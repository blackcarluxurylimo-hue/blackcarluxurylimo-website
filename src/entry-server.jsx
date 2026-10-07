import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';
import { SeoContext, defaultSeo } from './seo-context.js';
import { prerenderRoutes } from './routes.jsx';

export function render(url) {
  let seo = { ...defaultSeo };

  const seoContextValue = {
    setSeo(nextSeo) {
      seo = nextSeo;
    },
  };

  const appHtml = renderToString(
    <React.StrictMode>
      <SeoContext.Provider value={seoContextValue}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </React.StrictMode>
  );

  return { appHtml, seo };
}

export { prerenderRoutes };