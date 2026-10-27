import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { injectSeoIntoDocumentHtml } from './seo-html.mjs';
import { routeSeoMap } from '../src/data/pageSeo.js';

function normalizeRequestPath(rawPath) {
  if (!rawPath) return '/';
  const pathOnly = rawPath.split('?')[0].split('#')[0];
  if (pathOnly === '' || pathOnly === '/index.html') return '/';
  if (pathOnly.length > 1 && pathOnly.endsWith('/')) {
    return pathOnly.slice(0, -1);
  }
  return pathOnly;
}

function isDocumentRequest(req, urlPath) {
  if (req.method !== 'GET') return false;
  if (!routeSeoMap[urlPath]) return false;
  if (urlPath.startsWith('/@') || urlPath.startsWith('/src/') || urlPath.startsWith('/node_modules/')) {
    return false;
  }
  // Let Vite serve real files (assets, .js, .css, etc.)
  const lastSegment = urlPath.split('/').pop() ?? '';
  if (lastSegment.includes('.')) return false;
  return true;
}

export function pageSeoPlugin() {
  return {
    name: 'page-seo',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlPath = normalizeRequestPath(req.url);
        if (!isDocumentRequest(req, urlPath)) {
          return next();
        }

        try {
          const indexHtmlPath = path.join(server.config.root, 'index.html');
          let html = await readFile(indexHtmlPath, 'utf8');
          html = await server.transformIndexHtml(urlPath, html);
          html = injectSeoIntoDocumentHtml(html, routeSeoMap[urlPath]);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(html);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}
