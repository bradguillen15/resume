#!/usr/bin/env node
/**
 * Builds functions/chat-context.md from a curated, public-safe subset of career/.
 * Runs as a firebase functions predeploy hook (see firebase.json) and via
 * `pnpm build:chat-context`.
 *
 * Only files matched by the allowlist below are included. Private job-search
 * material (interviews/, target-companies.md, job-board.md, recommendations/,
 * learning/, templates/) must never be added here.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CAREER = join(ROOT, "career");
const OUTPUT = join(ROOT, "functions", "chat-context.md");
// Gemini Flash supports a ~1M-token context window; this cap is a sanity check only.
const MAX_CHARS = 400_000;

const ALLOWED_FILES = [
  "context.md",
  "strengths.md",
  "brag-document.md",
  "leadership.md",
  "resume/master-resume.md",
];

const ALLOWED_DIRS = ["experience", "stories", "projects", "philosophy"];

const PRIVATE_PATHS = [
  "interviews",
  "target-companies.md",
  "job-board.md",
  "recommendations",
  "learning",
  "templates",
];

// Candid failure stories kept for interview prep but deliberately excluded
// from the public chat context.
const EXCLUDED_FILES = new Set([
  "stories/team-lead-burnout.md",
  "stories/greenfield-api-lesson.md",
]);

function collectFiles() {
  const files = [...ALLOWED_FILES];
  for (const dir of ALLOWED_DIRS) {
    for (const entry of readdirSync(join(CAREER, dir)).sort()) {
      if (entry.endsWith(".md")) files.push(`${dir}/${entry}`);
    }
  }
  return files.filter((f) => !EXCLUDED_FILES.has(f));
}

function assertNoPrivateContent(files) {
  const leaked = files.filter((f) =>
    PRIVATE_PATHS.some((p) => f === p || f.startsWith(`${p}/`))
  );
  if (leaked.length > 0) {
    throw new Error(`Private career content in allowlist: ${leaked.join(", ")}`);
  }
}

const files = collectFiles();
assertNoPrivateContent(files);

const sections = files.map((file) => {
  const content = readFileSync(join(CAREER, file), "utf8").trim();
  return `---\n# SOURCE: career/${file}\n\n${content}`;
});

const output = sections.join("\n\n") + "\n";

if (output.length > MAX_CHARS) {
  console.error(
    `Context is ${output.length.toLocaleString()} chars, over the ${MAX_CHARS.toLocaleString()} limit. ` +
      "Trim the allowlist in scripts/build-chat-context.mjs or the source files."
  );
  process.exit(1);
}

writeFileSync(OUTPUT, output);

const words = output.split(/\s+/).length;
console.log(
  `Wrote ${relative(ROOT, OUTPUT)}: ${files.length} files, ${words.toLocaleString()} words, ${output.length.toLocaleString()} chars`
);
