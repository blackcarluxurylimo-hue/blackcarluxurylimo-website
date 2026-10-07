import { useContext, useEffect } from 'react';
import { SeoContext } from '../seo-context.js';

export default function Seo({ title, description }) {
  const seo = useContext(SeoContext);

  if (typeof seo?.setSeo === 'function') {
    seo.setSeo({ title, description });
  }

  useEffect(() => {
    document.title = title;

    const existing = document.querySelector('meta[name="description"]');
    if (existing) {
      existing.setAttribute('content', description);
      return;
    }

    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }, [title, description]);

  return null;
}
