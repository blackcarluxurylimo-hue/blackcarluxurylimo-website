// generate-sitemap.js
// Modern ES module for sitemap and robots.txt generation
import { createWriteStream, promises as fs } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import path from 'path';

/* global process */

// ---- CONFIG ----
const BASE_URL = 'https://blackcarluxurylimo.com'; // Production URL
const DIST_DIR = './dist';
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const PUBLIC_SITEMAP_PATH = path.join('./public', 'sitemap.xml');
const ROBOTS_PATH = path.join(DIST_DIR, 'robots.txt');
const PUBLIC_ROBOTS_PATH = path.join('./public', 'robots.txt');

// --- Static route extraction from src/routes.jsx ---
import { ROUTE_PATHS } from '../src/routes-list.js';

// Priority logic: homepage highest, others medium, lowest for less important
function getPriority(path) {
  if (path === '/') return 1.0;
  if (['/services', '/fleet', '/service-areas'].includes(path)) return 0.8;
  if (['/about', '/contact'].includes(path)) return 0.7;
  return 0.6;
}

// Changefreq logic
function getChangefreq(path) {
  if (path === '/') return 'daily';
  if (['/services', '/fleet', '/service-areas'].includes(path)) return 'weekly';
  if (['/about', '/contact'].includes(path)) return 'monthly';
  return 'monthly';
}

// Exclude non-indexable routes (404, admin, etc.)
const EXCLUDE_ROUTES = ['*', '/notfound', '/admin'];

// --- Blog posts: If you have a blog, import your data here ---
// Example:
// import { BLOG_POSTS } from '../src/data/blog.js';
const BLOG_POSTS = [];

// --- Image support: If you want to add images, add an 'images' array to your route or blog post objects ---

function getSitemapEntries() {
  const today = new Date().toISOString();
  // Static routes from prerenderRoutes
  const staticEntries = ROUTE_PATHS
    .filter((url) => !EXCLUDE_ROUTES.includes(url))
    .map((url) => ({
      url,
      changefreq: getChangefreq(url),
      priority: getPriority(url),
      lastmod: today,
    }));

  // Blog posts (none in this project, see example below)
  // const blogEntries = BLOG_POSTS.map(post => ({
  //   url: `/blog/${post.slug}`,
  //   changefreq: 'monthly',
  //   priority: 0.6,
  //   lastmod: post.date || today,
  //   ...(post.images && post.images.length > 0 ? {
  //     img: post.images.map(src => ({ url: BASE_URL + src }))
  //   } : {})
  // }));

  return [...staticEntries /*, ...blogEntries */];
}

// Main sitemap generation
async function generateSitemap() {
  const entries = getSitemapEntries();
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(SITEMAP_PATH);
  sitemap.pipe(writeStream);
  for (const entry of entries) {
    sitemap.write(entry);
  }
  sitemap.end();
  const xml = await streamToPromise(sitemap);
  // Also write to public
  await fs.writeFile(PUBLIC_SITEMAP_PATH, xml, 'utf8');
  console.log(`Sitemap generated at ${SITEMAP_PATH} and ${PUBLIC_SITEMAP_PATH}`);
}

// Robots.txt generation
async function generateRobots() {
  const robotsContent = `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`;
  await fs.writeFile(ROBOTS_PATH, robotsContent, 'utf8');
  await fs.writeFile(PUBLIC_ROBOTS_PATH, robotsContent, 'utf8');
  console.log(`robots.txt generated at ${ROBOTS_PATH} and ${PUBLIC_ROBOTS_PATH}`);
}

// Entrypoint
async function main() {
  await fs.mkdir(DIST_DIR, { recursive: true });
  await generateSitemap();
  await generateRobots();
}

main().catch(e => {
  console.error('Sitemap/robots generation failed:', e);
  process.exit(1);
});

// ---
// To use BLOG_POSTS dynamically, import or require your data source instead of the static array.
// For large sites, consider streaming or batching entries for memory efficiency.
// For image support, add an 'images' array to your blog/static route objects and map to the 'img' property as shown above.
