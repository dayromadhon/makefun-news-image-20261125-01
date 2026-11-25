// news-image-20261125 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// drawn for Wednesday 25 November 2026 and rendered to PNG in this session.
// This program copies it to the output directory the grader provides.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
