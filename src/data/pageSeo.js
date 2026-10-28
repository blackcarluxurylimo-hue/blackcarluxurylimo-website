import { blogPosts } from './blog.js';

const ORIGIN = 'https://www.blackcarluxurylimo.com';
const SITE_NAME = 'Black Car Luxury Limo';

export function buildPageSeo({ path, title, description, ogTitle, ogDescription, twitterDescription, image }) {
  const url = `${ORIGIN}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${ORIGIN}${image}`;

  return {
    title,
    description,
    robots: 'index, follow',
    canonical: url,
    og: {
      type: 'website',
      siteName: SITE_NAME,
      title: ogTitle,
      description: ogDescription,
      url,
      image: imageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: twitterDescription,
      image: imageUrl,
    },
    hreflang: { lang: 'en', href: url },
  };
}

export const homeSeo = buildPageSeo({
  path: '/',
  title: 'Professional Chauffeur Service NYC | Black Car Luxury Limo',
  description:
    'Book airport car service near you with Black Car Luxury Limo. Enjoy NYC airport transfers, private black car service and professional chauffeur service across NYC.',
  ogTitle: 'Professional Chauffeur Service NYC | Black Car Luxury Limo',
  ogDescription:
    'Book airport car service near you with Black Car Luxury Limo. Enjoy NYC airport transfers, private black car service and professional chauffeur service across NYC.',
  twitterDescription:
    'Book airport car service near you with Black Car Luxury Limo. Enjoy NYC airport transfers, private black car service and professional chauffeur service across NYC.',
  image: '/assets/mercedes-gls.jpg',
});

export const aboutSeo = buildPageSeo({
  path: '/about',
  title: 'About Us | Black Car Luxury Limo NYC',
  description:
    'Black Car Luxury Limo is a New York chauffeur service built on punctuality, discretion, and an immaculate 2025+ black fleet for executive, airport, and VIP travel.',
  ogTitle: 'About Us | Black Car Luxury Limo',
  ogDescription:
    'Learn about Black Car Luxury Limo and our commitment to comfortable, professional luxury transportation.',
  twitterDescription: 'Learn about Black Car Luxury Limo and our luxury transportation services.',
  image: '/assets/board-member-entering.jpg',
});

export const serviceAreasSeo = buildPageSeo({
  path: '/service-areas',
  title: 'Luxury Chauffeur Service in NYC Area | Black Car Luxury Limo NYC',
  description:
    'Black car service across Manhattan, Brooklyn, Queens, Long Island, Westchester, and NYC, plus airport transfers to JFK, LGA, EWR, TEB, HPN, ISP, and MMU.',
  ogTitle: 'Luxury Chauffeur Service in NYC Area | Black Car Luxury Limo NYC',
  ogDescription:
    'Black car service across Manhattan, Brooklyn, Queens, Long Island, Westchester, and NYC, plus airport transfers to JFK, LGA, EWR, TEB, HPN, ISP, and MMU.',
  twitterDescription:
    'Black car service across Manhattan, Brooklyn, Queens, Long Island, Westchester, and NYC, plus airport transfers to JFK, LGA, EWR, TEB, HPN, ISP, and MMU.',
  image: '/assets/mercedes-gls.jpg',
});

export const fleetSeo = buildPageSeo({
  path: '/fleet',
  title: 'Charter Bus Rental Service in NYC | Black Car Luxury Limo',
  description:
    'Book charter bus rental in NYC with reliable charter bus services for group travel, corporate events, airport transfers and special occasions with comfort.',
  ogTitle: 'Charter Bus Rental Service in NYC | Black Car Luxury Limo',
  ogDescription:
    'Book charter bus rental in NYC with reliable charter bus services for group travel, corporate events, airport transfers and special occasions with comfort.',
  twitterDescription:
    'Book charter bus rental in NYC with reliable charter bus services for group travel, corporate events, airport transfers and special occasions with comfort.',
  image: '/assets/chevy-suburban-2026.png',
});

export const servicesSeo = buildPageSeo({
  path: '/services',
  title: 'Corporate Black Car Chauffeur Service in NYC | Black Car Luxury Limo',
  description:
    'Book black car chauffeur service with us. Enjoy corporate car service in NYC, executive transportation and professional chauffeur services for business travel.',
  ogTitle: 'Corporate Black Car Chauffeur Service in NYC | Black Car Luxury Limo',
  ogDescription:
    'Book black car chauffeur service with us. Enjoy corporate car service in NYC, executive transportation and professional chauffeur services for business travel.',
  twitterDescription:
    'Book black car chauffeur service with us. Enjoy corporate car service in NYC, executive transportation and professional chauffeur services for business travel.',
  image: '/assets/corporate-pitch.jpg',
});

export const mercedesSeo = buildPageSeo({
  path: '/mercedes',
  title: 'Mercedes-Benz Fleet - Premium Luxury Lineup | Black Car Luxury Limo',
  description:
    'Discover our Mercedes-Benz lineup featuring GLS, GLE, G-Class, and EQS SUV models for premium executive travel. Visit our website to book hassle-free travel.',
  ogTitle: 'Mercedes-Benz Fleet - Premium Luxury Lineup | Black Car Luxury Limo',
  ogDescription:
    'Discover our Mercedes-Benz lineup featuring GLS, GLE, G-Class, and EQS SUV models for premium executive travel. Visit our website to book hassle-free travel.',
  twitterDescription:
    'Discover our Mercedes-Benz lineup featuring GLS, GLE, G-Class, and EQS SUV models for premium executive travel. Visit our website to book hassle-free travel.',
  image: '/assets/mercedes-gls.jpg',
});

export const escaladeSeo = buildPageSeo({
  path: '/escalade',
  title: 'Cadillac Escalade Lineup - Luxury SUV Fleet | Black Car Luxury Limo',
  description:
    'Explore our Cadillac Escalade lineup including Escalade, ESV, Escalade-V, and Escalade IQ/IQL for premium chauffeur service. Visit our website today.',
  ogTitle: 'Cadillac Escalade Lineup - Luxury SUV Fleet | Black Car Luxury Limo',
  ogDescription:
    'Explore our Cadillac Escalade lineup including Escalade, ESV, Escalade-V, and Escalade IQ/IQL for premium chauffeur service. Visit our website today.',
  twitterDescription:
    'Explore our Cadillac Escalade lineup including Escalade, ESV, Escalade-V, and Escalade IQ/IQL for premium chauffeur service. Visit our website today.',
  image: '/assets/cadillac-escalade.jpg',
});

export const lincolnSeo = buildPageSeo({
  path: '/lincoln',
  title: 'Lincoln SUV Lineup - Navigator & Nautilus | Black Car Luxury Limo',
  description:
    'Explore our Lincoln SUV lineup including Navigator, Navigator L, Aviator, and Nautilus for premium chauffeur service. Visit our website today to book now.',
  ogTitle: 'Lincoln SUV Lineup - Navigator & Nautilus | Black Car Luxury Limo',
  ogDescription:
    'Explore our Lincoln SUV lineup including Navigator, Navigator L, Aviator, and Nautilus for premium chauffeur service. Visit our website today to book now.',
  twitterDescription:
    'Explore our Lincoln SUV lineup including Navigator, Navigator L, Aviator, and Nautilus for premium chauffeur service. Visit our website today to book now.',
  image: '/assets/lincoln-navigator.jpg',
});

export const contactSeo = buildPageSeo({
  path: '/contact',
  title: 'Contact Us | Airport Black Car Service in NYC',
  description:
    'Book airport car service in NYC with Black Car Luxury Limo. Enjoy premium black car service, luxury transportation and reliable car service throughout New York City.',
  ogTitle: 'Contact Us | Airport Black Car Service in NYC',
  ogDescription:
    'Book airport car service in NYC with Black Car Luxury Limo. Enjoy premium black car service, luxury transportation and reliable car service throughout New York City.',
  twitterDescription:
    'Book airport car service in NYC with Black Car Luxury Limo. Enjoy premium black car service, luxury transportation and reliable car service throughout New York City.',
  image: '/assets/book-your-ride-escalade.webp',
});

export const suburbanSeo = buildPageSeo({
  path: '/suburban',
  title: 'Chevrolet Suburban - Full-Size Luxury SUV | Black Car Luxury Limo',
  description:
    'Experience spacious luxury with our Chevrolet Suburban fleet. Perfect for large groups and extended journeys. Visit our website today to book your fleet now.',
  ogTitle: 'Chevrolet Suburban - Full-Size Luxury SUV | Black Car Luxury Limo',
  ogDescription:
    'Experience spacious luxury with our Chevrolet Suburban fleet. Perfect for large groups and extended journeys. Visit our website today to book your fleet now.',
  twitterDescription:
    'Experience spacious luxury with our Chevrolet Suburban fleet. Perfect for large groups and extended journeys. Visit our website today to book your fleet now.',
  image: '/assets/chevrolet-suburban.jpg',
});

export const teslaSeo = buildPageSeo({
  path: '/tesla',
  title: 'Tesla Fleet - Luxury Electric Lineup | Black Car Luxury Limo',
  description:
    'Explore our premium Tesla lineup including Model X, Model S, Model 3, Model Y, and Cybertruck for executive electric travel. Visit our website today to book.',
  ogTitle: 'Tesla Fleet - Luxury Electric Lineup | Black Car Luxury Limo',
  ogDescription:
    'Explore our premium Tesla lineup including Model X, Model S, Model 3, Model Y, and Cybertruck for executive electric travel. Visit our website today to book.',
  twitterDescription:
    'Explore our premium Tesla lineup including Model X, Model S, Model 3, Model Y, and Cybertruck for executive electric travel. Visit our website today to book.',
  image: '/assets/tesla-model-x.jpg',
});

export const lucidSeo = buildPageSeo({
  path: '/lucid',
  title: 'Lucid Fleet - Premium Luxury Lineup | Black Car Luxury Limo',
  description:
    'Black Car Luxury Limo provides premium Lucid NYC chauffeur and limousine transportation for airport, corporate, and private travel. Visit our website today.',
  ogTitle: 'Lucid Fleet - Premium Luxury Lineup | Black Car Luxury Limo',
  ogDescription:
    'Black Car Luxury Limo provides premium Lucid NYC chauffeur and limousine transportation for airport, corporate, and private travel. Visit our website today.',
  twitterDescription:
    'Black Car Luxury Limo provides premium Lucid NYC chauffeur and limousine transportation for airport, corporate, and private travel. Visit our website today.',
  image: '/assets/mercedes-gls.jpg',
});

export const blogListingSeo = buildPageSeo({
  path: '/blog',
  title: 'NYC Luxury Car Service Blog | Black Car Luxury Limo',
  description:
    'Explore our Black Car Luxury Limo blog for NYC airport car service tips, luxury transportation insights, chauffeur service guides, and travel advice.',
  ogTitle: 'NYC Luxury Car Service Blog | Black Car Luxury Limo',
  ogDescription:
    'Explore our Black Car Luxury Limo blog for NYC airport car service tips, luxury transportation insights, chauffeur service guides, and travel advice.',
  twitterDescription:
    'Explore our Black Car Luxury Limo blog for NYC airport car service tips, luxury transportation insights, chauffeur service guides, and travel advice.',
  image: '/assets/mercedes-gls.jpg',
});

export function getBlogPostSeo(post) {
  const image = post.image.startsWith('http')
    ? post.image.replace(ORIGIN, '')
    : post.image.replace(/^\/+/, '/');

  return buildPageSeo({
    path: `/blog/${post.slug}`,
    title: post.seoTitle ?? `${post.title} | Black Car Luxury Limo`,
    description: post.seoDescription ?? post.excerpt,
    ogTitle: post.title,
    ogDescription: post.seoDescription ?? post.excerpt,
    twitterDescription: post.seoDescription ?? post.excerpt,
    image: image.startsWith('/') ? image : `/${image}`,
  });
}

const blogPostSeoMap = blogPosts.reduce((acc, post) => {
  acc[`/blog/${post.slug}`] = getBlogPostSeo(post);
  return acc;
}, {});

/** Map URL path → SEO payload (dev server + reference for prerender). */
export const routeSeoMap = {
  '/': homeSeo,
  '/about': aboutSeo,
  '/service-areas': serviceAreasSeo,
  '/fleet': fleetSeo,
  '/services': servicesSeo,
  '/contact': contactSeo,
  '/mercedes': mercedesSeo,
  '/escalade': escaladeSeo,
  '/lincoln': lincolnSeo,
  '/suburban': suburbanSeo,
  '/tesla': teslaSeo,
  '/lucid': lucidSeo,
  '/blog': blogListingSeo,
  ...blogPostSeoMap,
};
