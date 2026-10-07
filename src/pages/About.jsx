import { bookingLinkProps } from '../data/bookingConfig.js';
import CTA from '../components/CTA.jsx';
import Seo from '../components/Seo.jsx';
import { executiveImages } from '../utils/assets.js';

const values = [
  {
    title: 'Punctuality',
    body: 'Your chauffeur arrives early, tracks your flight, and builds in buffer time. In our world, on time means already there.',
  },
  {
    title: 'Discretion',
    body: 'Background-checked, professionally dressed drivers who understand that privacy and quiet are part of the service.',
  },
  {
    title: 'Immaculate Fleet',
    body: 'Every vehicle is a 2025+ black luxury SUV, sedan, or Sprinter — detailed before every ride and maintained to concierge standards.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Black Car Luxury Limo NYC"
        description="Black Car Luxury Limo is a New York chauffeur service built on punctuality, discretion, and an immaculate 2025+ black fleet for executive, airport, and VIP travel."
      />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <section className="reveal mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-goldSoft">Who We Are</p>
              <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">About Black Car Luxury Limo</h1>
              <p className="mt-4 text-white/80">
                We are a New York City chauffeur company built for travelers who treat their time as their most valuable asset. For executives, celebrities, and discerning guests across the Tri-State area, we deliver more than a ride — we deliver a standard of comfort, reliability, and quiet luxury that never wavers.
              </p>
              <p className="mt-3 text-white/75">
                Every journey is handled by a licensed, professionally trained chauffeur in a meticulously maintained 2025+ black vehicle. From JFK arrivals to boardroom departures and wedding-day logistics, we plan around your schedule so you never have to think about the details.
              </p>
              <a
                {...bookingLinkProps}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
              >
                Book Your Ride
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={executiveImages.boardMemberEntering}
                alt="Chauffeur welcoming a client into a luxury black car"
                width="900"
                height="600"
                className="h-72 w-full object-cover lg:h-80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">What Sets Us Apart</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Our Commitment to Every Client</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-gold/20 bg-charcoal/70 p-6">
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <CTA compact />
      </main>
    </>
  );
}
