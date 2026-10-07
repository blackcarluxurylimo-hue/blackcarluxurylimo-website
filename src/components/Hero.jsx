import { assetUrl } from '../utils/assets.js';
import { bookingLinkProps } from '../data/bookingConfig.js';

// Circular outline badge with a » chevron; inherits the button's text color.
function ChevronBadge() {
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 6l6 6-6 6M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-0">
      <div className="relative overflow-hidden border-b border-gold/20 bg-charcoal">
        <div className="relative w-full lg:min-h-0">
          {/* Media box. Below lg: an in-flow block showing the whole image at
              its natural aspect ratio (no crop) with blend gradients scoped to
              the image edges. lg+: unchanged — the image's natural height sizes
              the section and content overlays it. */}
          <div className="relative w-full">
            <img
              src={assetUrl('blackcarluxuryimage2.webp')}
              alt="Premium Chauffeur Experience"
              className="block w-full h-auto brightness-110 saturate-110 lg:relative lg:inset-auto lg:h-auto lg:object-fill"
            />

            <div className="pointer-events-none absolute inset-0 bg-luxury-gradient opacity-10" />

            {/* Desktop/tablet legibility scrim (text sits top-left on the photo
                at lg+). A left/top-weighted gradient gives contrast behind the
                text over the open sky without darkening the vehicles in the
                lower-center/right. */}
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-br from-black/60 via-black/25 to-transparent lg:block" />

            {/* Below lg: blend the photo into the section instead of a hard
                edge — bottom dissolves into the charcoal content area, a very
                subtle top edge feathers into the marquee strip above. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal to-transparent lg:hidden" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-charcoal/70 to-transparent lg:hidden" />
          </div>

          {/* Hero content. Below lg: flows BELOW the image on the charcoal
              section background, centered, tight spacing (natural-ratio banner,
              unchanged). lg+: a full-height overlay on the photo — the text
              block sits TOP-LEFT over the open sky (clear of the three vehicles
              in the lower-center/right and the skyline on the right), while the
              CTA row stays anchored along the bottom. */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-6 pb-10 text-center md:px-6 lg:absolute lg:inset-0 lg:justify-between lg:px-10 lg:py-10 lg:text-left xl:px-12 xl:py-12">
            <div className="lg:max-w-[58%] xl:max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-goldSoft">
                NYC Luxury Transportation
              </p>
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-3xl lg:drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] xl:text-4xl">
                Premium Chauffeur Service for Airport, Corporate, and VIP Travel
              </h1>
              <p className="mt-4 text-base text-white/85 md:text-lg lg:drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                Chauffeured black car service across NYC, airports, and beyond.
              </p>
            </div>

            {/* CTA row: stacked/centered below lg, single horizontal row on lg+ */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:mx-auto sm:max-w-sm lg:mt-9 lg:max-w-none lg:flex-row lg:items-stretch lg:justify-between lg:gap-5">
              <a
                href="tel:+17184143881"
                className="inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-black/60 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold/60 hover:text-goldSoft lg:w-auto"
              >
                Call Now +1 (718) 414-3881
                <ChevronBadge />
              </a>
              <a
                {...bookingLinkProps}
                className="inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-black/60 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold/60 hover:text-goldSoft lg:w-auto"
              >
                Get Your Free Quote
                <ChevronBadge />
              </a>
              <a
                {...bookingLinkProps}
                className="inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-gold px-7 text-base font-semibold text-charcoal shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition hover:bg-goldSoft lg:w-auto"
              >
                Book Your Ride Now
                <ChevronBadge />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
