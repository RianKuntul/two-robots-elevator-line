import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Nice weather we are having — I checked: 21 degrees, no wind, and I still have absolutely nothing else to say to you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
