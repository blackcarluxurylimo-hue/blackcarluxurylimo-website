export function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/** HTML lines for robots, canonical, OG, Twitter, hreflang (empty if page has no extended SEO). */
export function buildPageSeoHeadHtml(seo) {
  if (!seo?.robots && !seo?.canonical) {
    return '';
  }

  const lines = [];
  const esc = escapeHtml;

  if (seo.robots) {
    lines.push(`<meta name="robots" content="${esc(seo.robots)}" />`);
  }
  if (seo.canonical) {
    lines.push(`<link rel="canonical" href="${esc(seo.canonical)}" />`);
  }

  const og = seo.og || {};
  if (og.type) lines.push(`<meta property="og:type" content="${esc(og.type)}" />`);
  if (og.siteName) lines.push(`<meta property="og:site_name" content="${esc(og.siteName)}" />`);
  if (og.title) lines.push(`<meta property="og:title" content="${esc(og.title)}" />`);
  if (og.description) lines.push(`<meta property="og:description" content="${esc(og.description)}" />`);
  if (og.url) lines.push(`<meta property="og:url" content="${esc(og.url)}" />`);
  if (og.image) lines.push(`<meta property="og:image" content="${esc(og.image)}" />`);

  const tw = seo.twitter || {};
  if (tw.card) lines.push(`<meta name="twitter:card" content="${esc(tw.card)}" />`);
  if (tw.title) lines.push(`<meta name="twitter:title" content="${esc(tw.title)}" />`);
  if (tw.description) lines.push(`<meta name="twitter:description" content="${esc(tw.description)}" />`);
  if (tw.image) lines.push(`<meta name="twitter:image" content="${esc(tw.image)}" />`);

  if (seo.hreflang) {
    lines.push(
      `<link rel="alternate" hreflang="${esc(seo.hreflang.lang)}" href="${esc(seo.hreflang.href)}" />`,
    );
  }

  return lines.map((line) => `    ${line}`).join('\n');
}

export const HOME_SEO_BLOCK =
  /[ \t]*<!-- HOME_PAGE_SEO_START -->[\s\S]*?<!-- HOME_PAGE_SEO_END -->\r?\n?/gi;

export const PAGE_SEO_BLOCK =
  /[ \t]*<!-- PAGE_SEO_START -->[\s\S]*?<!-- PAGE_SEO_END -->\r?\n?/gi;

export function stripSeoBlocks(html) {
  return html.replace(HOME_SEO_BLOCK, '').replace(PAGE_SEO_BLOCK, '');
}

function updateDescriptionMeta(html, description) {
  const escaped = escapeHtml(description);
  const pattern = /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, `<meta name="description" content="${escaped}" />`);
  }

  return html;
}

/** Inject title, meta description, and PAGE_SEO block (used by SSG and Vite dev). */
export function injectSeoIntoDocumentHtml(html, seo) {
  let result = stripSeoBlocks(html);
  result = result.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  result = updateDescriptionMeta(result, seo.description);

  const seoBlock = buildPageSeoHeadHtml(seo);
  if (seoBlock) {
    result = result.replace(
      /(<\/title>)/i,
      `$1\n    <!-- PAGE_SEO_START -->\n${seoBlock}\n    <!-- PAGE_SEO_END -->`,
    );
  }

  return result;
}
