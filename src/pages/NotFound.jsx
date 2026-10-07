import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { hearstImages } from '../utils/assets.js';

export default function NotFound() {
  return (
    <main className="px-4 py-20 md:px-6">
      <Seo title="404 | Black Car Luxury Limo" description="Page not found." />
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-gold/20 bg-ink/80 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-goldSoft">404</p>
        <h1 className="mt-3 text-4xl font-bold text-white">Page Not Found</h1>
        <p className="mt-3 text-white/75">The page you requested does not exist.</p>
        <img
          src={hearstImages.chevroletSuburbanAlt}
          alt="Luxury SUV on the road"
          width="1600"
          height="900"
          className="mt-6 h-56 w-full rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
        />
        <Link
          to="/"
          className="mx-auto mt-6 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-semibold text-charcoal"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
