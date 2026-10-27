import { useContext, useEffect } from 'react';
import { SeoContext } from '../seo-context.js';

/**
 * Upserts a <meta> tag by a given attribute selector.
 * If the tag already exists it updates it; otherwise it creates and appends it.
 */
function upsertMeta(selector, attrs) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

/**
 * Upserts a <link> tag by a given attribute selector.
 */
function upsertLink(selector, attrs) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function removeMetaByName(name) {
  document.querySelector(`meta[name="${name}"]`)?.remove();
}

function removeMetaByProperty(property) {
  document.querySelector(`meta[property="${property}"]`)?.remove();
}

function removeCanonical() {
  document.querySelector('link[rel="canonical"]')?.remove();
}

function removeHreflang(lang) {
  document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)?.remove();
}

export default function Seo({
  title,
  description,
  robots,
  canonical,
  og = {},
  twitter = {},
  hreflang,
}) {
  const seo = useContext(SeoContext);

  if (typeof seo?.setSeo === 'function') {
    seo.setSeo({
      title,
      description,
      robots,
      canonical,
      og,
      twitter,
      hreflang,
    });
  }

  useEffect(() => {
    // Title
    document.title = title;

    // Description
    upsertMeta('meta[name="description"]', { name: 'description', content: description });

    // Robots
    if (robots) {
      upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    } else {
      removeMetaByName('robots');
    }

    // Canonical
    if (canonical) {
      upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
    } else {
      removeCanonical();
    }

    // Open Graph
    if (og.type)        upsertMeta('meta[property="og:type"]',        { property: 'og:type',        content: og.type });
    else                removeMetaByProperty('og:type');
    if (og.siteName)    upsertMeta('meta[property="og:site_name"]',   { property: 'og:site_name',   content: og.siteName });
    else                removeMetaByProperty('og:site_name');
    if (og.title)       upsertMeta('meta[property="og:title"]',       { property: 'og:title',       content: og.title });
    else                removeMetaByProperty('og:title');
    if (og.description) upsertMeta('meta[property="og:description"]', { property: 'og:description', content: og.description });
    else                removeMetaByProperty('og:description');
    if (og.url)         upsertMeta('meta[property="og:url"]',         { property: 'og:url',         content: og.url });
    else                removeMetaByProperty('og:url');
    if (og.image)       upsertMeta('meta[property="og:image"]',       { property: 'og:image',       content: og.image });
    else                removeMetaByProperty('og:image');

    // Twitter Card
    if (twitter.card)        upsertMeta('meta[name="twitter:card"]',        { name: 'twitter:card',        content: twitter.card });
    else                     removeMetaByName('twitter:card');
    if (twitter.title)       upsertMeta('meta[name="twitter:title"]',       { name: 'twitter:title',       content: twitter.title });
    else                     removeMetaByName('twitter:title');
    if (twitter.description) upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: twitter.description });
    else                     removeMetaByName('twitter:description');
    if (twitter.image)       upsertMeta('meta[name="twitter:image"]',       { name: 'twitter:image',       content: twitter.image });
    else                     removeMetaByName('twitter:image');

    // hreflang alternate
    if (hreflang) {
      upsertLink(`link[rel="alternate"][hreflang="${hreflang.lang}"]`, {
        rel: 'alternate',
        hreflang: hreflang.lang,
        href: hreflang.href,
      });
    } else {
      removeHreflang('en');
    }
  }, [title, description, robots, canonical, og, twitter, hreflang]);

  return null;
}
