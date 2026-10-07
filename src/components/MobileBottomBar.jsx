import { NavLink } from 'react-router-dom';
import { bookingLinkProps } from '../data/bookingConfig.js';

const PHONE = '+17184143881';

const iconClass = 'h-6 w-6';

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
      <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

const linkClass = ({ isActive }) =>
  `flex min-h-[3.5rem] flex-col items-center justify-center gap-1 text-[11px] font-semibold tracking-wide transition-colors ${
    isActive ? 'text-goldSoft' : 'text-gold hover:text-goldSoft'
  }`;

const anchorClass =
  'flex min-h-[3.5rem] flex-col items-center justify-center gap-1 text-[11px] font-semibold tracking-wide text-gold transition-colors hover:text-goldSoft';

export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-gold/25 bg-charcoal/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden"
    >
      <ul className="grid grid-cols-4">
        <li>
          <NavLink to="/" end className={linkClass} aria-label="Home">
            <HomeIcon />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/fleet" className={linkClass} aria-label="Fleet">
            <CarIcon />
            <span>Fleet</span>
          </NavLink>
        </li>
        <li>
          <a {...bookingLinkProps} className={anchorClass} aria-label="Book a ride">
            <CalendarIcon />
            <span>Book</span>
          </a>
        </li>
        <li>
          <a href={`tel:${PHONE}`} className={anchorClass} aria-label="Call us">
            <PhoneIcon />
            <span>Call</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
