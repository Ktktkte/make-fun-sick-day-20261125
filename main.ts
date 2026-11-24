import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Sorry, I can't come in — my doorbell camera flagged me as a stranger and now my own house won't let me leave.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryFile = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
writeFileSync(entryFile, LINE + "\n", "utf8");
