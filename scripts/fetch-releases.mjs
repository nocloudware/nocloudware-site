// Se ejecuta antes de `astro build` (prebuild). Lee la última release de GitHub
// y la guarda en src/data/releases.json. Si falla, se conserva el archivo anterior.
import { readFile, writeFile } from 'node:fs/promises';

const REPOS = {
  turnafile: 'nocloudware/TurnAFile',
  tubemassdl: 'nocloudware/TubeMassDL',
  browsel: 'nocloudware/BrowSel',
};
const FILE = new URL('../src/data/releases.json', import.meta.url);
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'nocloudware-site' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

let current = {};
try { current = JSON.parse(await readFile(FILE, 'utf8')); } catch {}

for (const [key, repo] of Object.entries(REPOS)) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const r = await res.json();
    const asset = r.assets?.[0];
    current[key] = {
      ...current[key],
      version: r.tag_name ?? current[key]?.version,
      sizeMB: asset ? (asset.size / 1024 / 1024).toFixed(1) : current[key]?.sizeMB,
      date: r.published_at
        ? new Date(r.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        : current[key]?.date,
      downloadUrl: asset?.browser_download_url ?? current[key]?.downloadUrl,
    };
    console.log(`[releases] ${key}: ${current[key].version}`);
  } catch (e) {
    console.warn(`[releases] ${key}: se conserva el valor anterior (${e.message})`);
  }
}
await writeFile(FILE, JSON.stringify(current, null, 2) + '\n');
