#!/usr/bin/env node
/**
 * Render the README badges into badges/*.svg in the Bulwark design system:
 * square (radius 0, like tiles and links), Hanken Grotesk 500, a Tabler icon on the ink
 * label and the value on raspberry. Text is converted to outlines so the
 * badges look the same wherever GitHub's image proxy serves them.
 *
 *   npm i --no-save opentype.js@1.3.4 @fontsource/hanken-grotesk @tabler/icons
 *   node scripts/badges.mjs
 *
 * The release and Discord badges read live numbers; the scheduled workflow
 * reruns this and commits whatever changed.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import opentype from "opentype.js";

const require = createRequire(import.meta.url);
const OUT = process.env.BADGES_OUT || path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..", "badges");

const INK = "#18181b";
const ON_INK = "#f2f2f3";
const VALUE = "#c01f46"; // raspberry at link depth: white text passes 4.5:1 at badge size
const ON_VALUE = "#ffffff";

const H = 24;
const PAD = 8;
const ICON = 16; // the guidelines allow 16, 20 and 24
const GAP = 6;
const SIZE = 12.5;

const font = opentype.parse(
  fs.readFileSync(require.resolve("@fontsource/hanken-grotesk/files/hanken-grotesk-latin-500-normal.woff")).buffer,
);

function text(str, x, fill) {
  const scale = SIZE / font.unitsPerEm;
  const ascent = font.ascender * scale;
  const descent = -font.descender * scale;
  const baseline = (H + ascent - descent) / 2 - 0.5;
  const p = font.getPath(str, x, baseline, SIZE);
  return { svg: `<path fill="${fill}" d="${p.toPathData(2)}"/>`, width: font.getAdvanceWidth(str, SIZE) };
}

function icon(name, x, color) {
  const src = fs.readFileSync(require.resolve(`@tabler/icons/outline/${name}.svg`), "utf8");
  const paths = [...src.matchAll(/<path d="([^"]+)"/g)].map((m) => `<path d="${m[1]}"/>`).join("");
  const k = ICON / 24;
  const y = (H - ICON) / 2;
  return `<g transform="translate(${x} ${y}) scale(${k})" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">${paths}</g>`;
}

function badge({ label, value, iconName }) {
  const labelStart = PAD + ICON + GAP;
  const l = text(label, labelStart, ON_INK);
  const labelW = Math.ceil(labelStart + l.width + PAD);
  const v = text(value, labelW + PAD, ON_VALUE);
  const W = Math.ceil(labelW + PAD + v.width + PAD);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${label}: ${value}">
<title>${label}: ${value}</title>
<rect width="${labelW}" height="${H}" fill="${INK}"/><rect x="${labelW}" width="${W - labelW}" height="${H}" fill="${VALUE}"/>
${icon(iconName, PAD, ON_INK)}${l.svg}${v.svg}
</svg>
`;
}

async function json(url, headers = {}) {
  const res = await fetch(url, { headers: { "user-agent": "bulwark-badges", ...headers } });
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json();
}

async function release() {
  const auth = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  const r = await json("https://api.github.com/repos/bulwarkmail/webmail/releases/latest", auth);
  return r.tag_name.startsWith("v") ? r.tag_name : `v${r.tag_name}`;
}

async function discord() {
  const r = await json("https://discord.com/api/v9/invites/tYCujymGrT?with_counts=true");
  return `${r.approximate_presence_count} online`;
}

// A failed lookup keeps the badge already on disk instead of writing a wrong one.
async function live(fn) {
  try {
    return await fn();
  } catch (err) {
    console.warn(String(err));
    return null;
  }
}

const BADGES = {
  website: { label: "website", value: "bulwarkmail.org", iconName: "world" },
  docs: { label: "docs", value: "bulwarkmail.org/docs", iconName: "book" },
  license: { label: "license", value: "AGPL v3", iconName: "scale" },
  docker: { label: "docker", value: "ghcr.io/bulwarkmail/webmail", iconName: "brand-docker" },
  release: { label: "release", value: await live(release), iconName: "tag" },
  discord: { label: "discord", value: await live(discord), iconName: "brand-discord" },
};

fs.mkdirSync(OUT, { recursive: true });
for (const [name, b] of Object.entries(BADGES)) {
  if (b.value == null) continue;
  const file = path.join(OUT, `${name}.svg`);
  const svg = badge(b);
  if (fs.existsSync(file) && fs.readFileSync(file, "utf8") === svg) continue;
  fs.writeFileSync(file, svg);
  console.log(`wrote badges/${name}.svg (${b.value})`);
}
