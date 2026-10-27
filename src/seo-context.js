import { createContext } from 'react';

export const defaultSeo = {
  title: 'Black Car Luxury Limo',
  description: 'Black Car Luxury Limo provides premium NYC chauffeur and limousine transportation for airport, corporate, and private travel.',
  robots: null,
  canonical: null,
  og: {},
  twitter: {},
  hreflang: null,
};

export const SeoContext = createContext(null);