import { Link } from 'react-router-dom';
import { socialLinks, socialIconPaths, socialBrandColors } from '../data/socialLinks.js';
import { bookingLinkProps } from '../data/bookingConfig.js';

// Larger, brand-colored footer glyph. Instagram uses its brand gradient;
// the others use a solid brand fill. Inline SVG — no icon-font dependency.
function FooterSocialIcon({ name }) {
  const path = socialIconPaths[name];
  if (!path) return null;

  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="footer-ig-gradient" cx="30%" cy="107%" r="130%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="8%" stopColor="#fdf497" />
            <stop offset="30%" stopColor="#fd5949" />
            <stop offset="50%" stopColor="#d6249f" />
            <stop offset="100%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path fill="url(#footer-ig-gradient)" d={path} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fill={socialBrandColors[name] || 'currentColor'} d={path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal px-4 py-10 md:px-6">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <h3 className="text-lg font-semibold text-white">Black Car Luxury Limo</h3>
          <p className="mt-3 text-sm text-white/75">
            Luxury limousine and chauffeur service for airport transfers, business travel, and private events.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/fleet">Fleet</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <a href="tel:+17184143881" className="mt-3 block text-sm text-white/80 hover:text-goldSoft">Phone: +1 (718) 414-3881</a>
          <a href="mailto:info@blackcarluxurylimo.com" className="mt-1 block text-sm text-white/80 hover:text-goldSoft">Email: info@blackcarluxurylimo.com</a>
          <p className="mt-3 text-sm text-white/80">Service Area: NYC, JFK, LGA, EWR</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-white">Book Fast</h3>
          <a
            {...bookingLinkProps}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
          >
            Book Now
          </a>
        </section>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 pt-6">
        {socialLinks.some((social) => social.url) && (
          <div className="flex items-center justify-center gap-4">
            {socialLinks
              .filter((social) => social.url)
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:scale-110 hover:brightness-110"
                >
                  <span className="block h-8 w-8">
                    <FooterSocialIcon name={social.name} />
                  </span>
                </a>
              ))}
          </div>
        )}
        <p className="mt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Black Car Luxury Limo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
