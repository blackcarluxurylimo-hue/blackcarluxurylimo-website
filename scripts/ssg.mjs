import { build } from 'vite';
import { rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverOutDir = path.join(rootDir, '.ssg-temp');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function updateMetaTag(html, name, content) {
  const escaped = escapeHtml(content);
  const pattern = new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["'][^"']*["']\\s*/?>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, `<meta name="${name}" content="${escaped}" />`);
  }

  return html.replace('</head>', `    <meta name="${name}" content="${escaped}" />\n  </head>`);
}

function updatePropertyMetaTag(html, property, content) {
  const escaped = escapeHtml(content);
  const pattern = new RegExp(`<meta\\s+property=["']${property}["']\\s+content=["'][^"']*["']\\s*/?>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, `<meta property="${property}" content="${escaped}" />`);
  }

  return html.replace('</head>', `    <meta property="${property}" content="${escaped}" />\n  </head>`);
}

function injectHtml(template, appHtml, seo) {
  let html = template.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = updateMetaTag(html, 'description', seo.description);
  html = updatePropertyMetaTag(html, 'og:title', seo.title);
  html = updatePropertyMetaTag(html, 'og:description', seo.description);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return html;
}

async function buildClient() {
  await build({
    root: rootDir,
    logLevel: 'info',
  });
}

async function buildServer() {
  await rm(serverOutDir, { recursive: true, force: true });
  await build({
    root: rootDir,
    logLevel: 'info',
    build: {
      ssr: path.join(rootDir, 'src', 'entry-server.jsx'),
      outDir: serverOutDir,
      emptyOutDir: true,
    },
  });
}

async function prerender() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
  const serverEntryPath = path.join(serverOutDir, 'entry-server.js');
  const { render, prerenderRoutes } = await import(pathToFileURL(serverEntryPath).href);

  for (const route of prerenderRoutes) {
    const { appHtml, seo } = render(route);
    const html = injectHtml(template, appHtml, seo);
    const routeDir = route === '/' ? distDir : path.join(distDir, route.slice(1));

    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), html, 'utf8');
  }
}

async function main() {
  await buildClient();
  await buildServer();
  await prerender();
  await rm(serverOutDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});