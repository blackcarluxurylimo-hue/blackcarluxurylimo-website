import CTA from '../components/CTA.jsx';
import Seo from '../components/Seo.jsx';
import { serviceAreasSeo } from '../data/pageSeo.js';

const popularAreas = [
  'Manhattan',
  'Brooklyn',
  'Queens',
  'The Bronx',
  'Staten Island',
  'Long Island',
  'Westchester',
  'Jersey City',
  'Hoboken',
  'Newark',
  'Greenwich',
  'Stamford',
];

const airportTransfers = [
  { code: 'JFK', name: 'John F. Kennedy International Airport' },
  { code: 'LGA', name: 'LaGuardia Airport' },
  { code: 'EWR', name: 'Newark Liberty International Airport' },
  { code: 'TEB', name: 'Teterboro Airport' },
  { code: 'HPN', name: 'Westchester County Airport' },
  { code: 'ISP', name: 'Long Island MacArthur Airport (Islip)' },
  { code: 'MMU', name: 'Morristown Municipal Airport' },
];

export default function ServiceAreas() {
  return (
    <>
      <Seo {...serviceAreasSeo} />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <section className="reveal mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.24em] text-goldSoft">Where We Drive</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Service Areas</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Black Car Luxury Limo provides premium chauffeur service throughout New York City and the greater Tri-State area. From Manhattan boardrooms to Long Island estates, our licensed drivers know every route, shortcut, and terminal — so you always arrive composed and on time.
          </p>
        </section>

        {/* Popular areas */}
        <section className="reveal mx-auto mt-12 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Popular Areas We Serve</h2>
          <p className="mt-3 max-w-3xl text-white/75">
            Point-to-point transfers, hourly chauffeur service, and executive travel across the region.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {popularAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-gold/20 bg-charcoal/70 px-5 py-4 text-sm font-semibold text-white"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        {/* Airport transfers */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Popular Airport Transfers in New York</h2>
          <p className="mt-3 max-w-3xl text-white/75">
            On-time pickups with flight tracking and complimentary wait time for every major airport in the New York metro area.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {airportTransfers.map((airport) => (
              <article
                key={airport.code}
                className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-charcoal/70 px-5 py-4"
              >
                <span className="text-lg font-extrabold text-gold">{airport.code}</span>
                <span className="text-sm text-white/80">{airport.name}</span>
              </article>
            ))}
          </div>
        </section>

        <CTA compact />
      </main>
    </>
  );
}
