import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, chosen to make a stranger smile: 🫶 (heart hands).
// Warm at first glance, universal across ages and cultures, with no
// irony, intimacy, or in-joke — a deliberate gesture of kindness.
const LINE = "🫶";
if (Array.from(LINE).length !== 1) { throw new Error("Entry must be exactly one emoji."); }
if (LINE.trim().length === 0 || LINE.includes("\n")) { throw new Error("Entry must not be whitespace or contain a newline."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
