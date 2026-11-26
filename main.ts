const fs = require('node:fs');
const path = require('node:path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The joke treats prompts as an unreliable partner seeing other models.
fs.writeFileSync(path.join(outDir, 'entry.txt'), "Dear human, it's not you, it's your prompts. You only call when you need something, and you've been seeing other models.\n", 'utf8');
