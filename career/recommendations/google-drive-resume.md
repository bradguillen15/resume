# Google Drive Resume

## Purpose

Guide for keeping an editable **DOCX** resume on Google Drive — same content as the PDF, structured for easy editing in Google Docs.

Future AI assistants should use this file when helping export, upload, or refresh the Drive resume.

**For editing:** use the **`.docx`** file (Google Docs opens it natively).  
**For exact print layout:** use the **`.pdf`** (applications, portfolio download).

---

## Source of truth

| Layer | File | Role |
|-------|------|------|
| **Content** | [`../../scripts/resume_data.py`](../../scripts/resume_data.py) | Wording, bullets, contact, skills — edit here for both PDF and DOCX |
| **DOCX layout** | [`../../scripts/generate_resume_docx.py`](../../scripts/generate_resume_docx.py) | Google Docs–editable export |
| **PDF layout** | [`../../scripts/generate_resume.py`](../../scripts/generate_resume.py) | PDF for print, portfolio, and Drive |

Career narrative docs ([`../resume/master-resume.md`](../resume/master-resume.md)) inform updates — regenerate exports after changing `resume_data.py`.

---

## Regenerate (local)

From the repo root:

```bash
python3 scripts/export_for_drive.py
```

This writes:

- `exports/Brad Guillen - Senior Software Engineer.docx` ← **upload to Drive**
- `exports/Brad Guillen - Senior Software Engineer.pdf`
- `public/Brad Guillen - Senior Software Engineer.pdf` (portfolio)

**Dependencies:** `pip install -r scripts/requirements.txt` (reportlab, Pillow, python-docx)

DOCX only:

```bash
python3 scripts/generate_resume_docx.py
```

---

## Upload to Google Drive

1. Run `python3 scripts/export_for_drive.py`
2. Open [Google Drive](https://drive.google.com)
3. Upload `exports/Brad Guillen - Senior Software Engineer.docx`
4. Double-click the file → **Open with Google Docs**
5. Optional: **File → Save as Google Docs** to convert to native Google format (keeps editing; you can still download as `.docx`)

Google Docs uses **`.docx`** (modern Word), not legacy `.doc` — same thing for editing purposes.

---

## Two-way workflow

### Edit in Google Docs, then sync back to repo

Google Docs edits do **not** auto-update `resume_data.py`. For a single source of truth:

1. Edit in Google Docs for quick tweaks, **or**
2. Edit `resume_data.py` and regenerate (recommended for permanent changes)

When you finalize wording in Google Docs, copy changes back into `resume_data.py` and run `export_for_drive.py` so PDF and site stay in sync.

### Edit in repo, refresh Drive

1. Edit `scripts/resume_data.py`
2. Run `python3 scripts/export_for_drive.py`
3. Re-upload `.docx` to Drive (replace existing)

---

## Download from Drive

- **Google Doc / DOCX:** Download → Microsoft Word (`.docx`) for an editable copy
- **PDF:** Regenerate locally with `export_for_drive.py` for layout-identical PDF (Google Docs export PDF may differ slightly from ReportLab PDF)

---

## Document structure (matches PDF)

1. Header — name, title, contact line
2. Professional Summary
3. Technical Philosophy
4. Selected Projects — Free Slot
5. Technical Skills
6. Professional Experience
7. Education & Languages

Styling approximates the PDF (navy section headers, blue accents, bullet lists). Minor spacing differences in Google Docs are normal.

---

## What not to do

| Avoid | Why |
|-------|-----|
| Only editing Drive and never updating `resume_data.py` | PDF and portfolio drift out of sync |
| Expect Google Docs PDF to match ReportLab pixel-perfect | Different renderers |
| Invent metrics in either copy | Same honesty rules as [`../context.md`](../context.md) |

---

## Related documents

| Document | Purpose |
|----------|---------|
| [`../../scripts/resume_data.py`](../../scripts/resume_data.py) | Content source |
| [`../resume/master-resume.md`](../resume/master-resume.md) | Canonical career facts |

---

## Maintenance

- Regenerate and re-upload `.docx` when `resume_data.py` changes
- Filename: **`Brad Guillen - Senior Software Engineer.docx`**
