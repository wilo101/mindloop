import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const indexHtml = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (!existsSync(indexHtml)) {
  console.error("dist/index.html not found — run vite build first");
  process.exit(1);
}

copyFileSync(indexHtml, notFound);
console.log("SPA fallback: dist/index.html → dist/404.html");
