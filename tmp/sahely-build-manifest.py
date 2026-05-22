#!/usr/bin/env python3
"""Build sahely-corpus-manifest.csv from email markdown frontmatter + sitemap XMLs.

Phase 1c per plan §Phase 1c. Reads:
- docs/research/corpus-review/originals/sahely-emails/*.md (email-derived rows; 103 posts)
- tmp/sahely-step-0/post-sitemap.xml + post-sitemap2.xml (full URL inventory)

Outputs:
- docs/research/corpus-review/originals/sahely-corpus-manifest.csv (full corpus, ~1369 rows)
"""
import csv
import json
import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET

import yaml

REPO = Path("/Users/darrenzal/projects/spore")
EMAILS_DIR = REPO / "docs/research/corpus-review/originals/sahely-emails"
SITEMAP_FILES = [
    REPO / "tmp/sahely-step-0/post-sitemap.xml",
    REPO / "tmp/sahely-step-0/post-sitemap2.xml",
]
MANIFEST_CSV = REPO / "docs/research/corpus-review/originals/sahely-corpus-manifest.csv"

NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

COLUMNS = [
    "canonical_url",
    "gmail_url",
    "sitemap_url",
    "published_iso",
    "lastmod_iso",
    "title",
    "ai_tool_credits",
    "tags",
    "category",
    "asset_urls_json",
    "topical_classification",
    "gmail_known",
    "pdf_status",
    "kg_status",
    "pdf_sha256",
    "last_seen_iso",
    "is_repost",
    "repost_source_url",
]


def parse_frontmatter(md_path: Path) -> dict | None:
    """Extract YAML frontmatter from a markdown file."""
    text = md_path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return None
    parts = text.split("---\n", 2)
    if len(parts) < 3:
        return None
    try:
        return yaml.safe_load(parts[1])
    except yaml.YAMLError as e:
        print(f"YAML parse error in {md_path.name}: {e}", file=sys.stderr)
        return None


def parse_sitemap(path: Path) -> dict[str, str]:
    """Return {url: lastmod_iso} from a sitemap.xml."""
    tree = ET.parse(path)
    root = tree.getroot()
    out = {}
    for url_el in root.findall("sm:url", NS):
        loc = url_el.find("sm:loc", NS)
        lastmod = url_el.find("sm:lastmod", NS)
        if loc is None or loc.text is None:
            continue
        url = loc.text.strip()
        out[url] = lastmod.text.strip() if lastmod is not None and lastmod.text else ""
    return out


def slug_humanize(url: str) -> str:
    """Derive a human-readable title from a /yyyy/mm/dd/slug/ URL."""
    m = re.search(r"/\d{4}/\d{2}/\d{2}/([^/?]+)/?", url)
    if not m:
        return ""
    slug = m.group(1)
    # remove trailing AI-tool credits suffix patterns
    slug = re.sub(r"-chatgpt[\d.-]*[a-z-]*(-?notebooklm)?$", "", slug, flags=re.IGNORECASE)
    slug = re.sub(r"-gemini$", "", slug, flags=re.IGNORECASE)
    return " ".join(w.capitalize() for w in slug.split("-"))


def classify_from_slug(url: str) -> str:
    """Cheap topical classification from URL slug for sitemap-only rows."""
    s = url.lower()
    if "viability" in s or "viability-grammar" in s:
        return "viability-grammar"
    if "autopoiesis" in s or "maturana" in s or "medicine" in s or "immunology" in s:
        return "autopoiesis-medicine"
    if "money" in s or "debt" in s or "economic" in s or "capital" in s or "oligarch" in s:
        return "political-economy"
    if "geometry" in s or "sheaf" in s or "fano" in s or "octonion" in s:
        return "sheaf-geometry"
    if "peace" in s or "galtung" in s or "civilization" in s:
        return "peace-civilization"
    if re.search(r"/(2017|2018)/", url):
        return "foundation-2017-2018"
    if "energy-network" in s or "regenerative" in s or "goerner" in s:
        return "systems-science"
    return "other"


def main():
    # Step 1: parse all email markdown files
    email_rows = {}
    for md_path in sorted(EMAILS_DIR.glob("*.md")):
        fm = parse_frontmatter(md_path)
        if not fm:
            print(f"Skipping {md_path.name}: no parseable frontmatter", file=sys.stderr)
            continue
        url = fm.get("canonical_url", "")
        if not url:
            continue
        # Normalize trailing slash
        if not url.endswith("/"):
            url = url + "/"
        # Convert frontmatter to CSV row
        tags = fm.get("tags", [])
        if isinstance(tags, list):
            tags_str = ";".join(str(t) for t in tags)
        else:
            tags_str = str(tags)
        cats = fm.get("categories", [])
        if isinstance(cats, list):
            cats_str = ";".join(str(c) for c in cats)
        else:
            cats_str = str(cats)
        credits = fm.get("ai_tool_credits", [])
        if isinstance(credits, list):
            credits_str = ";".join(str(c) for c in credits)
        else:
            credits_str = str(credits)
        assets = fm.get("asset_urls", [])
        # Default pdf_status: pending if has primary PDF asset; no-pdf-attached otherwise
        has_primary_pdf = False
        if isinstance(assets, list):
            for a in assets:
                if isinstance(a, dict) and a.get("type") == "pdf-primary":
                    has_primary_pdf = True
                    break
        pdf_status_default = "pending" if has_primary_pdf else "no-pdf-attached"
        # KG status: the canary post got ingested-via-add-knowledge; others pending
        kg_status_default = "pending"
        # The May 21 canary post specifically:
        if "toward-a-maturana-informed-viability-grammar-deriving" in url:
            pdf_status_default = "downloaded"
            kg_status_default = "ingested"
            pdf_sha256 = "820676ddfe326406e0109dec0389ff8123efa3446d3f06c74b8fa5068ef778c1"
        else:
            pdf_sha256 = ""
        email_rows[url] = {
            "canonical_url": url,
            "gmail_url": url,  # Same as canonical for Gmail-derived rows
            "sitemap_url": "",  # Will be filled if matched
            "published_iso": str(fm.get("published_iso", "")),
            "lastmod_iso": "",  # Filled from sitemap if matched
            "title": fm.get("title", ""),
            "ai_tool_credits": credits_str,
            "tags": tags_str,
            "category": cats_str,
            "asset_urls_json": json.dumps(assets, ensure_ascii=False) if assets else "[]",
            "topical_classification": fm.get("topical_classification", ""),
            "gmail_known": "true",
            "pdf_status": pdf_status_default,
            "kg_status": kg_status_default,
            "pdf_sha256": pdf_sha256,
            "last_seen_iso": str(fm.get("last_seen_iso", "")),
            "is_repost": "true" if fm.get("is_repost") else "false",
            "repost_source_url": str(fm.get("repost_source_url", "")) if fm.get("repost_source_url") else "",
        }
    print(f"Parsed {len(email_rows)} email rows from {EMAILS_DIR}", file=sys.stderr)

    # Step 2: parse sitemaps
    sitemap_urls = {}
    for sm_path in SITEMAP_FILES:
        urls = parse_sitemap(sm_path)
        print(f"  {sm_path.name}: {len(urls)} URLs", file=sys.stderr)
        sitemap_urls.update(urls)
    print(f"Sitemap union: {len(sitemap_urls)} URLs", file=sys.stderr)

    # Step 3: merge — email rows are authoritative; sitemap fills lastmod_iso for known + creates sparse rows for unknowns
    all_rows = []
    matched_count = 0
    for url, email_row in email_rows.items():
        if url in sitemap_urls:
            email_row["sitemap_url"] = url
            email_row["lastmod_iso"] = sitemap_urls[url]
            matched_count += 1
        all_rows.append(email_row)
    print(f"Email rows matched in sitemap: {matched_count}/{len(email_rows)}", file=sys.stderr)

    # Sitemap-only rows (sparse)
    email_urls = set(email_rows.keys())
    sparse_count = 0
    for url, lastmod in sitemap_urls.items():
        if url in email_urls:
            continue
        # Extract published date from URL /yyyy/mm/dd/...
        m = re.search(r"/(\d{4})/(\d{2})/(\d{2})/", url)
        published_iso = f"{m.group(1)}-{m.group(2)}-{m.group(3)}T00:00:00Z" if m else ""
        title = slug_humanize(url)
        topical = classify_from_slug(url)
        all_rows.append({
            "canonical_url": url,
            "gmail_url": "",
            "sitemap_url": url,
            "published_iso": published_iso,
            "lastmod_iso": lastmod,
            "title": title,
            "ai_tool_credits": "",
            "tags": "",
            "category": "",
            "asset_urls_json": "[]",
            "topical_classification": topical,
            "gmail_known": "false",
            "pdf_status": "unknown",
            "kg_status": "pending",
            "pdf_sha256": "",
            "last_seen_iso": "",
            "is_repost": "",
            "repost_source_url": "",
        })
        sparse_count += 1
    print(f"Sitemap-only sparse rows: {sparse_count}", file=sys.stderr)

    # Step 4: sort by canonical_url (date-prefixed via /yyyy/mm/dd/ ordering is natural)
    all_rows.sort(key=lambda r: r["canonical_url"])

    # Step 5: write CSV
    with MANIFEST_CSV.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS, quoting=csv.QUOTE_MINIMAL)
        w.writeheader()
        w.writerows(all_rows)
    print(f"Wrote {len(all_rows)} rows to {MANIFEST_CSV}", file=sys.stderr)

    # Step 6: report
    print("\n--- Manifest summary ---")
    print(f"Total rows: {len(all_rows)}")
    print(f"Gmail-known: {len(email_rows)}")
    print(f"Sitemap-only: {sparse_count}")
    print(f"With primary PDF flagged: {sum(1 for r in all_rows if r['pdf_status'] in ('pending', 'downloaded'))}")
    print(f"No PDF: {sum(1 for r in all_rows if r['pdf_status'] == 'no-pdf-attached')}")
    print(f"Reposts: {sum(1 for r in all_rows if r['is_repost'] == 'true')}")
    print("\nTopical classification spread:")
    from collections import Counter
    cls_counts = Counter(r["topical_classification"] for r in all_rows)
    for cls, n in cls_counts.most_common():
        print(f"  {cls}: {n}")


if __name__ == "__main__":
    main()
