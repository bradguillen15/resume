#!/usr/bin/env python3
"""Generate resume exports for Google Drive.

Usage:
    python3 scripts/export_for_drive.py

Output:
    exports/Brad Guillen - Senior Software Engineer.docx  # upload to Drive (edit in Google Docs)
    exports/Brad Guillen - Senior Software Engineer.pdf     # exact print copy
    public/Brad Guillen - Senior Software Engineer.pdf      # portfolio download

Edit content in scripts/resume_data.py, then run this script.
"""
import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASENAME = "Brad Guillen - Senior Software Engineer"
PDF_NAME = f"{BASENAME}.pdf"
DOCX_NAME = f"{BASENAME}.docx"
PUBLIC_PDF = os.path.join(ROOT, "public", PDF_NAME)
EXPORTS_DIR = os.path.join(ROOT, "exports")
EXPORT_PDF = os.path.join(EXPORTS_DIR, PDF_NAME)
EXPORT_DOCX = os.path.join(EXPORTS_DIR, DOCX_NAME)
GENERATE_PDF = os.path.join(ROOT, "scripts", "generate_resume.py")
GENERATE_DOCX = os.path.join(ROOT, "scripts", "generate_resume_docx.py")


def main() -> None:
    os.makedirs(EXPORTS_DIR, exist_ok=True)
    subprocess.run([sys.executable, GENERATE_PDF, "-o", PUBLIC_PDF], check=True)
    subprocess.run([sys.executable, GENERATE_DOCX, "-o", EXPORT_DOCX], check=True)
    shutil.copy2(PUBLIC_PDF, EXPORT_PDF)
    print("WROTE", PUBLIC_PDF)
    print("WROTE", EXPORT_PDF)
    print("WROTE", EXPORT_DOCX)
    print()
    print("Upload to Google Drive (editable in Google Docs):")
    print(" ", EXPORT_DOCX)
    print()
    print("PDF (exact layout, not for editing):")
    print(" ", EXPORT_PDF)


if __name__ == "__main__":
    main()
