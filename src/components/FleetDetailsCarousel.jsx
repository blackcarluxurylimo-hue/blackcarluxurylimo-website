import { useEffect, useRef, useState } from 'react';

const AUTO_ADVANCE_MS = 5000;
const SWIPE_THRESHOLD = 40;

// Shared service details shown on every vehicle slide (not per-vehicle data).
const SERVICE_DETAILS = [
  { icon: 'flight', text: 'Flight tracking' },
  {
    icon: 'clock',
    text: 'Free 90 min wait time for airport pickups (60 min for domestic flights) and 15 min for all others',
  },
  { icon: 'wifi', text: 'Complimentary in-vehicle WiFi available' },
  { icon: 'water', text: 'Complimentary bottled water' },
  { icon: 'cancellation', text: 'Free Cancellation 24 hours before pickup' },
];

function ServiceIcon({ name }) {
  const common = {
    className: 'mt-1 h-5 w-5 shrink-0 text-charcoal',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'flight':
      return (
        <svg {...common}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case 'wifi':
      return (
        <svg {...common}>
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M8.5 16.43a5 5 0 0 1 7 0" />
          <path d="M12 20h.01" />
        </svg>
      );
    case 'water':
      return (
        <svg {...common}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'cancellation':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function FleetDetailsCarousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items.length]);

  if (!items.length) {
    return null;
  }

  const displayIndex = activeIndex % items.length;

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="relative rounded-3xl border border-gold/25 bg-white/95 p-3 shadow-[0_16px_45px_rgba(8,11,20,0.38)] md:p-5">
        <div className="overflow-hidden rounded-2xl" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${displayIndex * 100}%)` }}
          >
            {items.map((vehicle, vehicleIdx) => (
              <article key={`${vehicle.model}-${vehicleIdx}`} className="min-w-full rounded-2xl bg-white">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-contain" style={{ height: '32rem' }}
                />

                <div className="px-4 pb-4 pt-5 md:px-6 md:pb-6">
                  <h3 className="text-3xl font-semibold tracking-tight text-charcoal">{vehicle.headline}</h3>
                  <p className="mt-1 text-lg text-charcoal/90">{vehicle.model}</p>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/75">{vehicle.summary}</p>

                  <div className="mt-5 h-1 w-24 rounded-full bg-blue-600" />

                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-charcoal/90">
                    {vehicle.features.map((feature, featureIdx) => (
                      <li key={`${vehicle.model}-feature-${featureIdx}`} className="flex items-start gap-3">
                        <svg
                          className="mt-1 h-5 w-5 shrink-0 text-charcoal"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 h-1 w-24 rounded-full bg-blue-600" />

                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-charcoal/90">
                    {SERVICE_DETAILS.map((detail) => (
                      <li key={detail.text} className="flex items-start gap-3">
                        <ServiceIcon name={detail.icon} />
                        <span>{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous vehicle"
              onClick={goPrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-charcoal/20 bg-white/90 p-2 text-charcoal shadow transition hover:bg-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next vehicle"
              onClick={goNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-charcoal/20 bg-white/90 p-2 text-charcoal shadow transition hover:bg-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {items.map((vehicle, idx) => (
                <button
                  key={`${vehicle.model}-dot-${idx}`}
                  type="button"
                  aria-label={`Go to ${vehicle.model}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition ${
                    idx === displayIndex ? 'w-7 bg-blue-600' : 'w-2.5 bg-charcoal/25 hover:bg-charcoal/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}