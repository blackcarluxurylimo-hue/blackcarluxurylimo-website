import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { socialLinks, socialIconPaths } from '../data/socialLinks.js';
import { bookingLinkProps } from '../data/bookingConfig.js';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/service-areas', label: 'Service Area' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function SocialIcon({ name }) {
  const path = socialIconPaths[name];
  if (!path) return null;
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, [scrolled, open]);

  const navLinkClass = ({ isActive }) =>
    `text-lg tracking-wide transition-colors ${
      isActive ? 'text-gold' : 'text-white/85 hover:text-goldSoft'
    }`;

  return (
    <header ref={headerRef} className={`site-navbar fixed left-0 right-0 top-0 z-[100] border-b border-gold/20 bg-black transition-all duration-300 ${
      scrolled ? 'shadow-[0_6px_24px_rgba(0,0,0,0.35)]' : ''
    }`}>
      {/* Top utility bar: social (left) · contact + Book Now (right) */}
      <div className="w-full border-b border-gold/10 bg-white/5">
        {/* Mobile (<sm): two slim rows — row 1 socials + email, row 2 phone +
            Book Now — so socials and email stay visible without crowding the
            phone at narrow widths. Tap targets are >=40px; the two rows keep
            the bar under ~90px tall. */}
        <div className="mx-auto flex max-w-7xl flex-col gap-0.5 px-4 py-1 sm:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center">
              {socialLinks
                .filter((social) => social.url)
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center text-white/70 transition hover:text-goldSoft"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
            </div>
            <a
              href="mailto:info@blackcarluxurylimo.com"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs text-white/70 transition hover:text-goldSoft"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@blackcarluxurylimo.com
            </a>
          </div>
          <div className="flex items-center justify-between gap-3">
            <a
              href="tel:+17184143881"
              className="navbar-phone-glow inline-flex min-h-10 items-center gap-1.5 text-sm font-medium transition"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              +1 (718) 414-3881
            </a>
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-10 items-center rounded-full bg-gold px-4 text-xs font-semibold text-charcoal transition hover:bg-goldSoft"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* sm and up (tablet + desktop): original single-row layout, unchanged. */}
        <div className="mx-auto hidden max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:flex md:px-6">
          {/* Left: social icons — render only when a URL is configured. */}
          <div className="hidden items-center gap-3 sm:flex">
            {socialLinks
              .filter((social) => social.url)
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="text-white/70 transition hover:text-goldSoft"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
          </div>

          {/* Right: phone (always) · email (>=sm) · Book Now (always) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+17184143881"
              className="navbar-phone-glow flex items-center gap-1.5 text-sm font-medium transition"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              +1 (718) 414-3881
            </a>
            <a
              href="mailto:info@blackcarluxurylimo.com"
              className="hidden items-center gap-1.5 text-sm text-white/70 transition hover:text-goldSoft sm:flex"
            >
              <svg aria-hidden="true" className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@blackcarluxurylimo.com
            </a>
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-8 items-center rounded-full bg-gold px-4 text-xs font-semibold text-charcoal transition hover:bg-goldSoft"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-6 ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        <Link to="/" className="flex items-center gap-2" aria-label="Black Car Luxury Limo Home" onClick={() => setOpen(false)}>
          <span
            className="navbar-logo-shine shrink-0 h-24"
            aria-hidden="true"
          >
            <img
              src="/favicon.png"
              alt="Black Car Luxury Limo logo"
              className="h-full w-auto object-contain"
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="text-xl font-semibold text-white">Black Car Luxury Limo</p>
            <p className="text-sm text-goldSoft">Private Chauffeur Service</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:border-gold hover:text-goldSoft lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-4">
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-4 origin-center rounded-full bg-current transition-all duration-300 ${
                open ? '-translate-x-1/2 -translate-y-1/2 rotate-45 opacity-0' : '-translate-x-1/2 -translate-y-[6px] rotate-0 opacity-100'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-4 origin-center rounded-full bg-current transition-all duration-300 ${
                open ? '-translate-x-1/2 -translate-y-1/2 scale-x-0 opacity-0' : '-translate-x-1/2 -translate-y-1/2 scale-x-100 opacity-100'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-4 origin-center rounded-full bg-current transition-all duration-300 ${
                open ? '-translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-0' : '-translate-x-1/2 translate-y-[4px] rotate-0 opacity-100'
              }`}
            />

            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-4 origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current transition-all duration-300 ${
                open ? 'scale-x-100 opacity-100 delay-75' : 'scale-x-0 opacity-0 delay-0'
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-4 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current transition-all duration-300 ${
                open ? 'scale-x-100 opacity-100 delay-150' : 'scale-x-0 opacity-0 delay-0'
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className={`fixed inset-0 z-[90] bg-black/40 lg:hidden ${scrolled ? 'top-[64px]' : 'top-[76px]'}`}
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`relative z-[101] overflow-hidden border-t border-gold/20 bg-ink transition-all duration-300 lg:hidden ${
          open
            ? scrolled
              ? 'max-h-[calc(100vh-64px)] opacity-100'
              : 'max-h-[calc(100vh-76px)] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className={`mx-auto flex w-full max-w-7xl flex-col gap-2 overflow-y-auto px-4 py-4 ${
            scrolled ? 'max-h-[calc(100vh-64px)]' : 'max-h-[calc(100vh-76px)]'
          }`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              <span className="inline-flex min-h-12 items-center">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="city-track-wrapper overflow-hidden border-t border-gold/10 bg-black/80">
        <div className="city-track" id="track">
          <span>Airport Transfer</span>
          <span>Point to Point Transfer</span>
          <span>Hourly Transfer</span>
          <span>SEDAN | SUV</span>
          <span>SPRINTER VAN</span>
          <span>MINI-BUS</span>
          <span>CHARTER BUS</span>
          <span>Airport Transfer</span>
          <span>Point to Point Transfer</span>
          <span>Hourly Transfer</span>
          <span>SEDAN | SUV</span>
          <span>SPRINTER VAN</span>
          <span>MINI-BUS</span>
          <span>CHARTER BUS</span>
        </div>
      </div>
    </header>
  );
}
