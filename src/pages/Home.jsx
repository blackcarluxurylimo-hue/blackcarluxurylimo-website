import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Seo from '../components/Seo.jsx';
import { homeSeo } from '../data/pageSeo.js';
import FleetCard from '../components/FleetCard.jsx';
import { fleet } from '../data/fleet.js';
import { assetUrl } from '../utils/assets.js';
import { bookingLinkProps } from '../data/bookingConfig.js';

const airportTransfers = [
  {
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    image: assetUrl('airport-transfer-jfk-v2.png'),
  },
  {
    code: 'LGA',
    name: 'LaGuardia Airport',
    image: assetUrl('airport-transfer-lga-v2.png'),
  },
  {
    code: 'EWR',
    name: 'Newark Liberty International Airport',
    image: assetUrl('airport-transfer-ewr-v2.png'),
  },
  {
    code: 'TEB',
    name: 'Teterboro Airport',
    image: assetUrl('airport-transfer-teb-v2.png'),
  },
];

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

const popularAirportCodes = ['JFK', 'LGA', 'EWR', 'TEB', 'HPN', 'ISP', 'MMU'];

export default function Home() {
  return (
    <>
      <Seo {...homeSeo} />

      <header>
        <Hero />
      </header>

      <main>
        <section className="reveal px-4 py-12 md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
          <div className="mx-auto w-full max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-goldSoft">NYC Luxury Car Service</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Reliable Chauffeur Service Across NYC And Major Airports
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-sm text-white/80 md:text-base">
              Travel in comfort with a premium black SUV fleet, professional chauffeurs, and transparent service built for airport transfers, executive trips, and private events.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                {...bookingLinkProps}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
              >
                Book A Limo Now
              </a>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-6 text-sm font-semibold text-white transition hover:border-gold"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="reveal bg-ink/30 px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white">About Our NYC Limo Services</h2>
              <p className="mt-4 text-white/80">
                Our private car service covers NYC and the Tri-State area with a focus on punctuality, safety, and premium comfort. From airport transfers to executive mobility, every ride is personalized to your itinerary.
              </p>
              <p className="mt-3 text-white/75">
                Explore our selected black SUV collection below and choose your preferred ride style.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fleet.slice(0, 4).map((item) => (
                <FleetCard key={item.name} item={item} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/fleet"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-8 text-sm font-semibold text-white transition hover:border-gold hover:text-goldSoft"
              >
                View More Fleet
              </Link>
            </div>
          </div>
        </section>

        <section className="reveal px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-white">Airport Transfer Services</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-white/75">
              Timely airport pickups and drop-offs to keep your travel smooth and stress-free.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {airportTransfers.map((airport) => (
                <article key={airport.code} className="overflow-hidden rounded-2xl border border-gold/20 bg-charcoal/80">
                  <img
                    src={airport.image}
                    alt={airport.name}
                    width="1000"
                    height="650"
                    className="h-[24rem] w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-white">{airport.code} - {airport.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-goldSoft">Where We Drive</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Popular Areas We Serve</h2>
              <p className="mx-auto mt-3 max-w-3xl text-white/75">
                Luxury chauffeur service across New York City and the greater Tri-State area.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {popularAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gold/20 bg-charcoal/70 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {area}
                </span>
              ))}
            </div>

            <h3 className="mt-12 text-center text-2xl font-bold text-white md:text-3xl">
              Popular Airport Transfers in New York
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {popularAirportCodes.map((code) => (
                <span
                  key={code}
                  className="rounded-full border border-gold/25 bg-charcoal/70 px-4 py-2 text-sm font-bold text-gold"
                >
                  {code}
                </span>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/service-areas"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-8 text-sm font-semibold text-white transition hover:border-gold hover:text-goldSoft"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}