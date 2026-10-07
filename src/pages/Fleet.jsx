import CTA from '../components/CTA.jsx';
import FleetCard from '../components/FleetCard.jsx';
import Seo from '../components/Seo.jsx';
import { fleet, pricingGuide } from '../data/fleet.js';

export default function Fleet() {
  return (
    <>
      <Seo
        title="Fleet | Black Car Luxury Limo NYC"
        description="Browse our premium limousine fleet including Cadillac Escalade, Mercedes S-Class, Suburban, and executive Sprinter van."
      />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <section className="reveal mx-auto w-full max-w-7xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Our Luxury Fleet</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Professionally maintained 2025+ black luxury vehicles — SUVs, executive sedans, and Sprinter vans — for executive travel, airport transfers, and premium private transportation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {fleet.map((item) => (
              <FleetCard key={item.name} item={item} />
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-gold/20 bg-ink/80 p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Why Elite Clients Choose Us</p>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">You Are Not Paying for a Ride. You Are Paying for an Experience.</h2>
              <p className="mt-3 text-white/75">
                In New York City, premium black car service is reserved for executives, celebrities, and discerning travelers who expect more than transportation. Our clients do not compare us on price — they return because we deliver without compromise, every single time.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {pricingGuide.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gold/15 bg-charcoal/70 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.detail}</p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm text-white/60">
              Every quote is custom — built around your schedule, your vehicle preference, and your standard of comfort. No hidden fees. No surprises.
            </p>
          </section>
        </section>

        <CTA compact />
      </main>
    </>
  );
}
