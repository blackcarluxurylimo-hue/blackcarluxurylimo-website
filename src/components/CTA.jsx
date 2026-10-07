import { hearstImages } from '../utils/assets.js';
import { bookingLinkProps } from '../data/bookingConfig.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function CTA({ compact = false }) {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div
        className={`mx-auto w-full max-w-7xl rounded-2xl border border-gold/30 bg-gradient-to-r from-[#1a1610] to-[#111113] ${
          compact ? 'p-6 md:p-8' : 'p-7 md:p-10'
        }`}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Ready To Ride</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Reserve Your Luxury Chauffeur In Minutes
            </h2>
            <p className="mt-2 text-white/75">
              Transparent rates, premium vehicles, and 24/7 support for every journey.
            </p>
            <img
              src={hearstImages.cadillacEscalade}
              alt="Luxury limo"
              width="1200"
              height="700"
              className="mt-4 hidden h-24 w-56 rounded-xl object-cover sm:block"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/17184143881"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
