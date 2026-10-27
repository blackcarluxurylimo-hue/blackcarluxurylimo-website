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
  title: 'Black Car Luxury Limo | Luxury Chauffeur Service NYC',
  description:
    'Premium NYC limousine and chauffeur service for airport transfers, executive rides, weddings, and VIP transportation.',
  ogTitle: 'Black Car Luxury Limo | Luxury Chauffeur Service',
  ogDescription:
    'Travel in comfort and style with Black Car Luxury Limo. Explore our luxury fleet and professional chauffeur services.',
  twitterDescription:
    'Travel in comfort and style with Black Car Luxury Limo. Explore our luxury fleet and professional chauffeur services.',
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
  title: 'Service Areas | Black Car Luxury Limo NYC',
  description:
    'Luxury chauffeur and black car service across Manhattan, Brooklyn, Queens, Long Island, Westchester, and the NYC Tri-State area, plus airport transfers to JFK, LGA, EWR, TEB, HPN, ISP, and MMU.',
  ogTitle: 'Luxury Transportation Service Areas | Black Car Luxury Limo',
  ogDescription:
    'Explore Black Car Luxury Limo service areas and find luxury transportation options for your travel needs.',
  twitterDescription: 'Explore our service areas and luxury transportation options.',
  image: '/assets/mercedes-gls.jpg',
});

export const fleetSeo = buildPageSeo({
  path: '/fleet',
  title: 'Fleet | Black Car Luxury Limo NYC',
  description:
    'Browse our premium limousine fleet including Cadillac Escalade, Mercedes S-Class, Suburban, and executive Sprinter van.',
  ogTitle: 'Luxury Vehicle Fleet | Black Car Luxury Limo',
  ogDescription: 'Discover our luxury vehicle fleet and explore premium transportation options for your journey.',
  twitterDescription: 'Explore the luxury vehicles available through Black Car Luxury Limo.',
  image: '/assets/chevy-suburban-2026.png',
});

export const servicesSeo = buildPageSeo({
  path: '/services',
  title: 'NYC Executive Limo Services | Black Car Luxury Limo',
  description:
    'Premium NYC limousine services for airport transfers, corporate travel, weddings, and private hourly bookings. Professionally licensed chauffeurs and 2025+ black SUVs.',
  ogTitle: 'Luxury Chauffeur Services | Black Car Luxury Limo',
  ogDescription: 'Explore luxury chauffeur and private transportation services from Black Car Luxury Limo.',
  twitterDescription: 'Explore private transportation and luxury chauffeur services.',
  image: '/assets/corporate-pitch.jpg',
});

export const mercedesSeo = buildPageSeo({
  path: '/mercedes',
  title: 'Mercedes-Benz Fleet - Premium Luxury Lineup | Black Car Luxury Limo',
  description:
    'Discover our Mercedes-Benz lineup featuring GLS, GLE, G-Class, and EQS SUV models for premium executive travel.',
  ogTitle: 'Mercedes Luxury Transportation | Black Car Luxury Limo',
  ogDescription: 'Explore Mercedes vehicles in our fleet and discover a premium transportation option.',
  twitterDescription: 'Discover Mercedes luxury transportation options with Black Car Luxury Limo.',
  image: '/assets/mercedes-gls.jpg',
});

export const escaladeSeo = buildPageSeo({
  path: '/escalade',
  title: 'Cadillac Escalade Lineup - Luxury SUV Fleet | Black Car Luxury Limo',
  description:
    'Explore our Cadillac Escalade lineup including Escalade, ESV, Escalade-V, and Escalade IQ/IQL for premium chauffeur service.',
  ogTitle: 'Cadillac Escalade Luxury Transport | Black Car Luxury Limo',
  ogDescription: 'Explore the Cadillac Escalade and discover a spacious, premium transportation option.',
  twitterDescription: 'Explore Cadillac Escalade luxury transportation with Black Car Luxury Limo.',
  image: '/assets/cadillac-escalade.jpg',
});

export const lincolnSeo = buildPageSeo({
  path: '/lincoln',
  title: 'Lincoln SUV Lineup - Navigator, Aviator, Nautilus | Black Car Luxury Limo',
  description:
    'Explore our Lincoln SUV lineup including Navigator, Navigator L, Aviator, and Nautilus for premium chauffeur service.',
  ogTitle: 'Lincoln Luxury Transportation | Black Car Luxury Limo',
  ogDescription: 'Discover Lincoln vehicles in our fleet and explore comfortable private transportation.',
  twitterDescription: 'Explore Lincoln luxury transportation options with Black Car Luxury Limo.',
  image: '/assets/lincoln-navigator.jpg',
});

export const contactSeo = buildPageSeo({
  path: '/contact',
  title: 'Contact & Booking | Black Car Luxury Limo NYC',
  description:
    'Book your NYC limousine and chauffeur service. Request airport transfers, corporate rides, wedding transportation, and hourly service.',
  ogTitle: 'Contact Black Car Luxury Limo | Get in Touch',
  ogDescription:
    'Get in touch with Black Car Luxury Limo about luxury transportation and private travel requirements.',
  twitterDescription: 'Contact us about luxury transportation and private travel options.',
  image: '/assets/book-your-ride-escalade.webp',
});

export const suburbanSeo = buildPageSeo({
  path: '/suburban',
  title: 'Chevrolet Suburban - Full-Size Luxury SUV | Black Car Luxury Limo',
  description:
    'Experience spacious luxury with our Chevrolet Suburban fleet. Perfect for large groups and extended journeys.',
  ogTitle: 'Chevrolet Suburban Luxury Transport | Black Car Luxury Limo',
  ogDescription: 'Explore the Chevrolet Suburban and discover a spacious private transportation option.',
  twitterDescription: 'Discover Chevrolet Suburban luxury transportation with Black Car Luxury Limo.',
  image: '/assets/chevrolet-suburban.jpg',
});

export const teslaSeo = buildPageSeo({
  path: '/tesla',
  title: 'Tesla Fleet - Luxury Electric Lineup | Black Car Luxury Limo',
  description:
    'Explore our premium Tesla lineup including Model X, Model S, Model 3, Model Y, and Cybertruck for executive electric travel.',
  ogTitle: 'Tesla Luxury Transportation | Black Car Luxury Limo',
  ogDescription: 'Explore Tesla transportation options and discover a modern vehicle choice for your journey.',
  twitterDescription: 'Explore Tesla luxury transportation options with Black Car Luxury Limo.',
  image: '/assets/tesla-model-x.jpg',
});

export const blogListingSeo = buildPageSeo({
  path: '/blog',
  title: 'Blog | Black Car Luxury Limo NYC',
  description:
    'Luxury travel insights, airport transfer tips, and NYC chauffeur advice from Black Car Luxury Limo.',
  ogTitle: 'Luxury Travel Insights | Black Car Luxury Limo',
  ogDescription:
    'Read guides on airport transfers, corporate travel, weddings, and private car service in New York City.',
  twitterDescription: 'NYC chauffeur and luxury transportation tips from Black Car Luxury Limo.',
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
  '/blog': blogListingSeo,
  ...blogPostSeoMap,
};
