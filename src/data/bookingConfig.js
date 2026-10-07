// Limo Anywhere Online Reservation System (ORS) — the external portal where
// customers book rides and see live pricing/quotes. Defined once here so every
// booking CTA across the site points to a single source of truth.
export const BOOKING_URL = 'https://book.mylimobiz.com/v4/blackcarluxury';

// Spread onto an <a> for any booking CTA: opens the ORS in a new tab safely.
export const bookingLinkProps = {
  href: BOOKING_URL,
  target: '_blank',
  rel: 'noopener noreferrer',
};
