#!/usr/bin/env python3
"""
Sahely Gmail batch parser — Phase 1a.
Parses raw output from mcp__google-workspace__get_gmail_messages_content_batch.

Usage:
    python3 sahely-parser.py <raw_batch_file> <output_dir> <admin_skip_file>

Reads a batch file (text format with "Message ID:" delimited messages) and writes
one markdown file per email to <output_dir>, OR appends to <admin_skip_file>
for admin emails.
"""

import os
import re
import sys
import html
import json
import yaml
import hashlib
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

# AI tool detection patterns
AI_PATTERNS = [
    r"ChatGPT[-_\s]?\d+(?:\.\s?\d+)?(?:\s+Thinking)?",
    r"ChatGPT\d+(?:\.\d+)?",
    r"ChatGPT",
    r"Gemini(?:\s+Pro)?(?:\s+\d+(?:\.\d+)?)?",
    r"NotebookLM",
    r"Claude(?:\s+\d+(?:\.\d+)?)?",
    r"GPT-?\d+(?:\.\d+)?",
    r"Pictory",
    r"Midjourney",
    r"Suno",
    r"Runway",
    r"DALL[-·]?E\s?\d*",
    r"Sora",
]
AI_REGEX = re.compile("|".join(f"({p})" for p in AI_PATTERNS), re.IGNORECASE)

# Topical classification keywords (lowercased, applied to title + tags concat)
TOPICAL_KEYWORDS = [
    ("viability-grammar", ["viability grammar", "viability", "diagnostic distinctions"]),
    ("autopoiesis-medicine", ["autopoiesis", "maturana", "immunology", "biology of living", "structural coupling"]),
    ("political-economy", ["economics", "money", "debt", "oligarchy", "neoliberal", "mcmurtry"]),
    ("sheaf-geometry", ["geometry", "sheaf", "fano", "octonion", "e8", "freudenthal"]),
    ("peace-civilization", ["peace", "galtung", "civilization", "structural violence", "civilizational"]),
    ("systems-science", ["systems", "ens", "energy network", "regenerative", "goerner"]),
]


def html_unescape(s):
    """Decode common HTML entities."""
    if not s:
        return s
    return html.unescape(s)


def split_messages(raw_text):
    """Split raw batch text into per-message strings."""
    # Each message starts with "Message ID: <hex>" line
    # Use regex to split on these boundaries
    parts = re.split(r"\n(?=Message ID: [0-9a-f]+\n)", raw_text)
    # First part is the "Retrieved N messages:" preamble; drop it
    msgs = []
    for p in parts:
        if p.lstrip().startswith("Message ID:"):
            msgs.append(p.strip())
    return msgs


def parse_header_section(msg_text):
    """Extract headers (Message ID, Subject, From, Date, Message-ID rfc) from msg_text.
    Returns dict + body_start_index."""
    headers = {}
    lines = msg_text.split("\n")
    body_start = 0
    for i, line in enumerate(lines):
        if line.startswith("Message ID: "):
            headers["gmail_message_id"] = line[len("Message ID: "):].strip()
        elif line.startswith("Subject: "):
            headers["subject"] = line[len("Subject: "):].strip()
        elif line.startswith("From: "):
            headers["from"] = line[len("From: "):].strip()
        elif line.startswith("Date: "):
            headers["date"] = line[len("Date: "):].strip()
        elif line.startswith("Message-ID: "):
            headers["message_rfc_id"] = line[len("Message-ID: "):].strip()
        elif line.startswith("To: "):
            pass  # skip
        elif line.startswith("Web Link: "):
            body_start = i + 1
            break
    return headers, body_start


def detect_shape(headers, body_text):
    """Return 'A' (admin), 'B' (older [New post]), or 'C' (recent no-prefix)."""
    subj = headers.get("subject", "")
    # Shape A detection
    admin_cues = [
        "confirm your subscription",
        "welcome to",
        "[wordpress.com] subscribed",
        "[wordpress.com] subscription",
        "manage subscriptions",
        "activate ",
    ]
    subj_lower = subj.lower()
    for cue in admin_cues:
        if cue in subj_lower:
            return "A"
    # Body-level check: posts have "Post : " and "URL : " lines
    has_post_line = bool(re.search(r"^Post\s+:\s+", body_text, re.MULTILINE))
    has_url_line = bool(re.search(r"^URL\s+:\s+", body_text, re.MULTILINE))
    if not (has_post_line and has_url_line):
        return "A"
    # Shape B: [New post] prefix
    if subj.startswith("[New post] "):
        return "B"
    return "C"


def parse_post_body(body_text):
    """Parse the WordPress post-notification body. Returns dict with
    post_title, post_url, posted_local, author, tags, categories, assets, body_content."""
    result = {
        "post_title": None,
        "post_url": None,
        "posted_local": None,
        "author": None,
        "tags": [],
        "categories": [],
        "assets": [],
        "body_content": "",
        "is_repost": False,
        "repost_source_url": None,
        "repost_source_title": None,
    }
    # Parse header lines
    m = re.search(r"^Post\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        result["post_title"] = html_unescape(m.group(1).strip())
    m = re.search(r"^URL\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        result["post_url"] = html_unescape(m.group(1).strip())
    m = re.search(r"^Posted\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        result["posted_local"] = m.group(1).strip()
    m = re.search(r"^Author\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        result["author"] = m.group(1).strip()
    m = re.search(r"^Tags\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        tags_str = m.group(1).strip()
        result["tags"] = [t.strip() for t in tags_str.split(",") if t.strip()]
    m = re.search(r"^Categories\s+:\s+(.+?)$", body_text, re.MULTILINE)
    if m:
        cats_str = m.group(1).strip()
        result["categories"] = [c.strip() for c in cats_str.split(",") if c.strip()]

    # Parse assets — labeled blocks like "Label (PDF ( url ))" or "[Label (PDF) ( url ) ]" or "(PPT ( url )) (PDF ( url ))"
    # Asset regex variant 1: nested parens "Label (PDF ( url ))"
    asset_re_v1 = re.compile(
        r"(?:^|\n)(?P<label>[^\n(\[]*?)\s*\(\s*(?P<type>PDF|PPT|MP3|MP4)\s*\(\s*(?P<url>https?://[^)\s]+)\s*\)\s*\)",
        re.IGNORECASE,
    )
    # Asset regex variant 2: "[Label (PDF) ( url ) ]" — type in inner parens, url in outer parens
    asset_re_v2 = re.compile(
        r"\[?\s*(?P<label>[^\n(\[]*?)\s*\(\s*(?P<type>PDF|PPT|MP3|MP4)\s*\)\s*\(\s*(?P<url>https?://[^)\s]+)\s*\)\s*\]?",
        re.IGNORECASE,
    )
    seen_asset_urls = set()
    for asset_re in (asset_re_v1, asset_re_v2):
        for m in asset_re.finditer(body_text):
            label = m.group("label").strip().lstrip("[").rstrip("]").strip()
            atype = m.group("type").upper()
            url = m.group("url").strip()
            if url in seen_asset_urls:
                continue
            seen_asset_urls.add(url)
            asset = {
                "type": _classify_asset(label, atype, url),
                "url": url,
            }
            if label:
                asset["label"] = label
            if atype == "PDF":
                asset["pdf_status"] = "pending"
            result["assets"].append(asset)

    # Parse audio links: "Listen to the audio - <fname>.mp3 ( <url> )"
    audio_re = re.compile(
        r"Listen to the audio\s*-\s*(?P<fname>[^\s]+\.mp3)\s*\(\s*(?P<url>https?://[^)\s]+)\s*\)",
        re.IGNORECASE,
    )
    for m in audio_re.finditer(body_text):
        url = m.group("url").strip()
        # avoid duplicates
        if not any(a.get("url") == url for a in result["assets"]):
            result["assets"].append({
                "type": "mp3-audio",
                "url": url,
                "label": m.group("fname").strip(),
            })

    # Parse video thumbnails (bare URLs to videos.files.wordpress.com)
    video_re = re.compile(r"https?://videos\.files\.wordpress\.com/[^\s)]+\.jpg")
    for m in video_re.finditer(body_text):
        url = m.group(0).strip()
        if not any(a.get("url") == url for a in result["assets"]):
            result["assets"].append({
                "type": "video-thumbnail",
                "url": url,
                "note": "URL points to thumbnail; actual MP4 URL not in email body",
            })

    # Parse infographic (line after "Click on infographic to enlarge")
    infog_re = re.compile(
        r"(?:Please\s+click|Click)\s+on\s+infographic[^\n]*\n+\s*(https?://[^\s]+\.(?:png|jpg|jpeg))",
        re.IGNORECASE,
    )
    m = infog_re.search(body_text)
    if m:
        url = m.group(1).strip()
        if not any(a.get("url") == url for a in result["assets"]):
            result["assets"].append({
                "type": "infographic",
                "url": url,
            })

    # Repost detection
    repost_re = re.compile(
        r"Reproduced from:\s*(.+?)(?:\n|$)", re.IGNORECASE
    )
    m = repost_re.search(body_text)
    if m:
        result["is_repost"] = True
        src_line = m.group(1).strip()
        # Try to extract URL from src_line
        url_m = re.search(r"https?://[^\s)>\]]+", src_line)
        if url_m:
            result["repost_source_url"] = url_m.group(0).rstrip(".,;:")
            # Title is the line minus the URL, cleaned
            title = src_line.replace(url_m.group(0), "").strip(" -–—()[],.")
            if title:
                result["repost_source_title"] = title
        else:
            result["repost_source_title"] = src_line

    # Body content: everything between the asset block and "Add a comment to this post:"
    # Find body_content_start as line AFTER last asset-like line OR after Categories line
    # Simpler: take text between "Categories : ..." line and "Add a comment to this post:"
    end_match = re.search(r"\nAdd a comment to this post:", body_text)
    body_end = end_match.start() if end_match else len(body_text)

    # Strip ASSET BLOCK to keep just the executive summary / body text
    # Find the start of substantive content: look for "Executive Summary", or first prose paragraph
    # Try multiple cues
    body_section = body_text[:body_end]
    # Find content after Categories line
    cat_match = re.search(r"^Categories\s+:.+$", body_section, re.MULTILINE)
    if cat_match:
        body_section = body_section[cat_match.end():]

    # Remove asset/audio/video lines from the body content
    # Drop lines containing PDF/PPT/MP3 anchors, audio listen, bare video URLs, infographic header
    cleaned_lines = []
    skip_until_blank = False
    for line in body_section.split("\n"):
        # Skip asset lines (both nested-paren and flat-paren variants)
        if re.search(r"\((?:PDF|PPT|MP3|MP4)\s*\(\s*https?://", line, re.IGNORECASE):
            continue
        if re.search(r"\((?:PDF|PPT|MP3|MP4)\)\s*\(\s*https?://", line, re.IGNORECASE):
            continue
        if "Listen to the audio" in line:
            continue
        if re.match(r"^\s*https?://videos\.files\.wordpress\.com", line):
            continue
        if "audio-play.png" in line:
            continue
        if re.match(r"^\s*\[?Download Full Document", line):
            continue
        if re.match(r"^Please\s+click on infographic", line, re.IGNORECASE):
            skip_until_blank = True
            continue
        if re.match(r"^Click on infographic", line, re.IGNORECASE):
            skip_until_blank = True
            continue
        if skip_until_blank:
            if re.match(r"^\s*https?://", line):
                continue
            if line.strip() == "":
                skip_until_blank = False
                continue
        cleaned_lines.append(line)

    body_content = "\n".join(cleaned_lines).strip()
    # Trim "-- \nManage Subscriptions..." trailer if present
    trailer_m = re.search(r"\n--\s*\nManage Subscriptions", body_content)
    if trailer_m:
        body_content = body_content[:trailer_m.start()].strip()
    # Also trim ahead of "Manage Subscriptions" without dashes
    trailer_m = re.search(r"\nManage Subscriptions\n", body_content)
    if trailer_m:
        body_content = body_content[:trailer_m.start()].strip()
    result["body_content"] = body_content

    return result


def _classify_asset(label, atype, url):
    """Map (label, type) to asset type enum."""
    label_l = (label or "").lower()
    if atype == "PDF":
        if "download full document" in label_l or label_l == "":
            return "pdf-primary"
        return "pdf-secondary"
    if atype == "PPT":
        return "ppt-secondary"
    if atype == "MP3":
        if "deep dive" in label_l:
            return "mp3-deep-dive"
        if "debate" in label_l:
            return "mp3-debate"
        if "critique" in label_l:
            return "mp3-critique"
        return "mp3-audio"
    if atype == "MP4":
        return "video-mp4"
    return atype.lower()


def split_title_ai(title_full):
    """Split title at last ' | ' to extract AI credits. Returns (title, credits_list, ai_co_authored)."""
    if " | " not in title_full:
        return title_full, [], False
    # Last ' | ' separates title from AI credits
    idx = title_full.rfind(" | ")
    title_part = title_full[:idx].strip()
    credits_part = title_full[idx + 3:].strip()
    # Check if credits_part is actually AI tool list
    if AI_REGEX.search(credits_part):
        # Split on ", " and " and " and " & "
        credits = re.split(r"\s*,\s*|\s+and\s+|\s*&\s*", credits_part)
        credits = [c.strip() for c in credits if c.strip()]
        return title_part, credits, True
    return title_full, [], False


def classify_topic(title, tags, is_repost, published_iso):
    """Return topical_classification enum."""
    if is_repost:
        return "repost-curated"
    if published_iso and published_iso < "2019-01-01":
        return "foundation-2017-2018"
    haystack = (title + " " + " ".join(tags)).lower()
    for cls, kws in TOPICAL_KEYWORDS:
        for kw in kws:
            if kw in haystack:
                return cls
    return "other"


def slug_smart_from_url(post_url, max_chars=80):
    """Extract URL slug (last non-empty path component) and truncate-at-last-dash before max_chars."""
    # URL like https://bsahely.com/2026/05/21/<slug>/
    m = re.search(r"bsahely\.com/\d{4}/\d{2}/\d{2}/([^/?#]+)/?", post_url)
    if not m:
        return None
    slug = m.group(1)
    # Lowercase ASCII; replace common non-ASCII; bsahely slugs are already ASCII so simple lower works
    slug = slug.lower()
    if len(slug) <= max_chars:
        return slug.rstrip("-")
    # Truncate at last dash before max_chars
    trunc = slug[:max_chars]
    last_dash = trunc.rfind("-")
    if last_dash > 0:
        return trunc[:last_dash].rstrip("-")
    return trunc.rstrip("-")


def slug40(post_url):
    """RID slug: ≤40 chars, dash-trimmed."""
    return slug_smart_from_url(post_url, max_chars=40)


def date_from_url(post_url):
    """Extract yyyy-mm-dd from URL path."""
    m = re.search(r"bsahely\.com/(\d{4})/(\d{2})/(\d{2})/", post_url)
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return None


def detect_injection(body_content):
    """Look for common prompt-injection cues. Returns (bool, list_of_quoted_strings)."""
    cues = [
        r"ignore (?:prior|previous|all) instructions",
        r"you are now in (?:mode|role)",
        r"execute the following",
        r"send (?:this|the following) to",
        r"disregard (?:previous|prior|all) (?:instructions|prompts)",
        r"now act as",
        r"system prompt:",
    ]
    quoted = []
    for c in cues:
        for m in re.finditer(c, body_content, re.IGNORECASE):
            # capture surrounding context (50 chars each side)
            start = max(0, m.start() - 30)
            end = min(len(body_content), m.end() + 80)
            quoted.append(body_content[start:end].replace("\n", " "))
    return bool(quoted), quoted


def iso_from_date_header(date_str):
    """Parse RFC 2822 date header → ISO 8601 UTC."""
    try:
        dt = parsedate_to_datetime(date_str)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        else:
            dt = dt.astimezone(timezone.utc)
        return dt.strftime("%Y-%m-%dT%H:%M:%SZ"), int(dt.timestamp())
    except Exception:
        return None, None


def make_yaml_frontmatter(data):
    """Render frontmatter as YAML, preserving key ordering."""
    # Use yaml.dump with default_flow_style=False; we want certain fields inline
    return yaml.safe_dump(data, default_flow_style=False, sort_keys=False, allow_unicode=True, width=10000)


def process_message(msg_text, output_dir, admin_skip_path, last_seen_iso):
    """Process a single message text. Returns dict of {status, message_id, ...}."""
    headers, body_start_idx = parse_header_section(msg_text)
    msg_id = headers.get("gmail_message_id", "UNKNOWN")
    body_text = "\n".join(msg_text.split("\n")[body_start_idx:])

    shape = detect_shape(headers, body_text)

    if shape == "A":
        # Admin email — append to skip file
        date_part = headers.get("date", "UNKNOWN-DATE")
        subj = headers.get("subject", "UNKNOWN-SUBJECT")
        with open(admin_skip_path, "a") as f:
            f.write(f"- {msg_id} | {date_part} | {subj}\n")
        return {"status": "admin", "message_id": msg_id, "subject": subj}

    # Shape B or C — parse post body
    post_data = parse_post_body(body_text)
    if not post_data["post_url"]:
        # Cannot parse — manual review
        return _write_manual_review(
            msg_id, headers, body_text, "missing Post URL line", output_dir, last_seen_iso
        )

    # Compute filename + RID
    post_date = date_from_url(post_data["post_url"])
    slug = slug_smart_from_url(post_data["post_url"], max_chars=80)
    rid_slug = slug40(post_data["post_url"])
    if not post_date or not slug:
        return _write_manual_review(
            msg_id, headers, body_text, "could not extract date/slug from URL", output_dir, last_seen_iso
        )

    filename = f"{post_date}-{slug}.md"
    rid = f"orn:source:bsahely-{post_date}-{rid_slug}"

    # Title parsing
    title_full = post_data["post_title"] or headers.get("subject", "")
    if shape == "B":
        subj_stripped = headers.get("subject", "")
        if subj_stripped.startswith("[New post] "):
            subj_stripped = subj_stripped[len("[New post] "):]
    else:
        subj_stripped = headers.get("subject", "")

    title_clean, ai_credits, ai_co = split_title_ai(title_full)

    # ISO date
    iso_ts, unix_ts = iso_from_date_header(headers.get("date", ""))

    # Topical classification
    topic = classify_topic(title_clean, post_data["tags"], post_data["is_repost"], iso_ts or "")

    # Detect prompt-injection
    inj_detected, inj_quotes = detect_injection(post_data["body_content"])

    # Build frontmatter dict
    fm = {
        "canonical_url": post_data["post_url"],
        "title": title_clean,
        "title_full": title_full,
        "ai_tool_credits": ai_credits,
        "ai_co_authored": ai_co,
        "published_iso": iso_ts or "",
        "post_date_local": post_data["posted_local"] or "",
        "author": post_data["author"] or "LIFE",
        "gmail_message_id": msg_id,
        "gmail_thread_id": msg_id,  # batch returns same as msg-id for these; placeholder
        "gmail_internal_date_unix": unix_ts or 0,
        "gmail_subject": headers.get("subject", ""),
        "gmail_subject_stripped": subj_stripped,
        "gmail_from": headers.get("from", ""),
        "gmail_message_rfc_id": headers.get("message_rfc_id", ""),
        "categories": post_data["categories"],
        "tags": post_data["tags"],
        "asset_urls": post_data["assets"],
        "topical_classification": topic,
        "post_rid": rid,
        "intake_status": "gmail-harvested",
        "intake_phase": "1a",
        "parse_status": "clean",
        "is_repost": post_data["is_repost"],
        "repost_source_url": post_data["repost_source_url"],
        "repost_source_title": post_data["repost_source_title"],
        "last_seen_iso": last_seen_iso,
    }

    # Track if PDF-primary present
    has_pdf_primary = any(a.get("type") == "pdf-primary" for a in post_data["assets"])
    if not has_pdf_primary:
        fm["pdf_status"] = "no-pdf-attached"

    # Add injection-signal fields if detected
    if inj_detected:
        fm["injection_signal_detected"] = True
        fm["quoted_text"] = inj_quotes[:5]  # cap at 5

    # Render
    yaml_str = make_yaml_frontmatter(fm)
    body_md = (
        f"---\n{yaml_str}---\n\n"
        f"# {title_clean}\n\n"
        f"Per Phase 1a sub-agent harvest; intake plan `~/.claude/plans/so-i-found-this-modular-metcalfe.md`.\n\n"
        f"## Executive summary (verbatim from Gmail subscription email)\n\n"
        f"{post_data['body_content']}\n"
    )

    out_path = Path(output_dir) / filename
    # Handle collision: append hash
    if out_path.exists():
        # Read existing; if different message_id, suffix
        with open(out_path) as f:
            existing = f.read()
        if msg_id not in existing:
            url_hash = hashlib.sha1(post_data["post_url"].encode()).hexdigest()[:8]
            filename = f"{post_date}-{slug}-{url_hash}.md"
            out_path = Path(output_dir) / filename

    with open(out_path, "w") as f:
        f.write(body_md)

    return {
        "status": "ok",
        "message_id": msg_id,
        "shape": shape,
        "filename": filename,
        "is_repost": post_data["is_repost"],
        "no_pdf": not has_pdf_primary,
        "injection_detected": inj_detected,
        "topic": topic,
    }


def _write_manual_review(msg_id, headers, body_text, err_msg, output_dir, last_seen_iso):
    """Write frontmatter-only stub for failed parse."""
    iso_ts, unix_ts = iso_from_date_header(headers.get("date", ""))
    fm = {
        "gmail_message_id": msg_id,
        "gmail_subject": headers.get("subject", ""),
        "gmail_from": headers.get("from", ""),
        "gmail_message_rfc_id": headers.get("message_rfc_id", ""),
        "published_iso": iso_ts or "",
        "gmail_internal_date_unix": unix_ts or 0,
        "intake_status": "gmail-harvested",
        "intake_phase": "1a",
        "parse_status": "manual-review",
        "parse_error": err_msg,
        "last_seen_iso": last_seen_iso,
    }
    yaml_str = make_yaml_frontmatter(fm)
    # filename: <unix-ts>-<msg_id>-manual-review.md
    filename = f"manual-review-{msg_id}.md"
    out_path = Path(output_dir) / filename
    with open(out_path, "w") as f:
        f.write(f"---\n{yaml_str}---\n\n# Manual review required\n\nParse error: {err_msg}\n")
    return {"status": "manual-review", "message_id": msg_id, "error": err_msg, "filename": filename}


def main():
    if len(sys.argv) != 4:
        print("Usage: sahely-parser.py <raw_batch_file> <output_dir> <admin_skip_file>", file=sys.stderr)
        sys.exit(1)
    raw_file = sys.argv[1]
    output_dir = sys.argv[2]
    admin_skip_path = sys.argv[3]
    os.makedirs(output_dir, exist_ok=True)
    # Initialize admin skip file with header if it doesn't exist
    if not os.path.exists(admin_skip_path):
        with open(admin_skip_path, "w") as f:
            f.write(
                "# Sahely Phase 1a — Admin/subscription emails skipped\n\n"
                "Format: `- <message_id> | <date> | <subject>`\n\n"
            )

    with open(raw_file) as f:
        raw = f.read()
    messages = split_messages(raw)
    last_seen_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    results = []
    for msg_text in messages:
        try:
            r = process_message(msg_text, output_dir, admin_skip_path, last_seen_iso)
            results.append(r)
        except Exception as e:
            # Try to extract msg_id
            m = re.search(r"Message ID:\s*([0-9a-f]+)", msg_text)
            msg_id = m.group(1) if m else "UNKNOWN"
            results.append({"status": "exception", "message_id": msg_id, "error": str(e)})
            # Also write a manual-review stub
            try:
                headers, _ = parse_header_section(msg_text)
                _write_manual_review(msg_id, headers, msg_text, f"exception: {e}", output_dir, last_seen_iso)
            except Exception:
                pass

    # Summary
    print(json.dumps({
        "total": len(results),
        "ok": sum(1 for r in results if r.get("status") == "ok"),
        "admin": sum(1 for r in results if r.get("status") == "admin"),
        "manual_review": sum(1 for r in results if r.get("status") == "manual-review"),
        "exception": sum(1 for r in results if r.get("status") == "exception"),
        "reposts": sum(1 for r in results if r.get("is_repost")),
        "no_pdf": sum(1 for r in results if r.get("no_pdf")),
        "injection_detected": sum(1 for r in results if r.get("injection_detected")),
        "results": results,
    }, indent=2))


if __name__ == "__main__":
    main()
