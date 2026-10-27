import CTA from '../components/CTA.jsx';
import Seo from '../components/Seo.jsx';
import { servicesSeo } from '../data/pageSeo.js';
import { executiveImages } from '../utils/assets.js';
import { bookingLinkProps } from '../data/bookingConfig.js';

const checklistLeft = [
  'A stress-free executive transportation experience that puts luxury and comfort above all else.',
  'Never fear being late — our licensed, trained chauffeurs pick you up and drop you off right on time, every time.',
  'Arrive at your destination with confidence. Step out of a mint-condition black SUV and make the impression you deserve.',
];

const checklistRight = [
  'Expert navigation through New York City traffic — our drivers know every route, shortcut, and alternate path.',
  'Real-time GPS tracking so you and your team reach your destination safely and on schedule.',
  'Last-minute changes are never a problem. Our chauffeurs adapt instantly to accommodate your itinerary.',
];

export default function Services() {
  return (
    <>
      <Seo {...servicesSeo} />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">

        {/* Corporate pitch — two column */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Corporate &amp; Executive Travel</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                Travel in Style With Corporate Limousine Service in NYC
              </h2>
              <p className="mt-4 text-white/80">
                In the corporate world, first impressions are everything. Arriving in a professionally driven, immaculate black SUV signals authority, precision, and respect for your own time — and for the people you are meeting.
              </p>
              <p className="mt-3 text-white/75">
                Skip the taxi line and the stress of self-navigation. Pre-book your corporate car service and arrive calm, prepared, and on time. Use the ride to review your notes, take calls, or simply decompress — while our chauffeur handles everything else.
              </p>
              <a
                {...bookingLinkProps}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
              >
                Book A Ride Now
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={executiveImages.corporatePitch}
                alt="Executive approaching luxury black car"
                width="900"
                height="600"
                className="h-72 w-full object-cover lg:h-80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl rounded-2xl bg-gold/10 border border-gold/25 px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Available 24 / 7</p>
              <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                Book Your <span className="text-gold">Limo Service</span> Now
              </h2>
              <p className="mt-2 text-white/75">Elevate your ride. Book now for an unforgettable travel experience.</p>
            </div>
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
            >
              Book A Limo Now
            </a>
          </div>
        </section>

        {/* How to book */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Simple &amp; Fast</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Booking Our Executive Car Service in NYC</h2>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/75">
            You can easily make a reservation via phone, WhatsApp, or through our contact form. Simply provide the date, time, pickup address, and destination. Once confirmed, your chauffeur will arrive at your door ready to go — you do the rest.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { step: '01', title: 'Share Your Details', body: 'Tell us the date, time, pickup location, destination, and any special requirements — wheelchair accessibility, child seats, extra luggage.' },
              { step: '02', title: 'Choose Your Vehicle', body: 'Select from our 2025+ black SUV lineup: Tesla Model X, Mercedes GLS, Cadillac Escalade, Lincoln Navigator, or Suburban.' },
              { step: '03', title: 'Ride in Comfort', body: 'Your chauffeur arrives early, handles your luggage, and delivers you on time — every single time. No surprises.' },
            ].map((item) => (
              <article key={item.step} className="rounded-2xl border border-gold/20 bg-charcoal/70 p-6">
                <p className="text-4xl font-extrabold text-gold/30">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-8 text-sm font-semibold text-white transition hover:border-gold"
            >
              Book A Limo Now
            </a>
          </div>
        </section>

        {/* At a glance checklist */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl rounded-2xl border border-gold/15 bg-ink/60 px-6 py-8 md:px-10 md:py-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">What You Get</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Our NYC Executive Limo Service at a Glance</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            <ul className="space-y-3">
              {checklistLeft.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {checklistRight.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Second CTA banner */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl rounded-2xl border border-gold/25 bg-charcoal/80 px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Airport · Corporate · Weddings · Special Events · Sightseeing · and More
              </h2>
              <p className="mt-2 text-white/75">Reliable and punctual limo service in New York City and beyond.</p>
            </div>
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
            >
              Book A Limo Now
            </a>
          </div>
        </section>

        {/* Why choose us */}
        <section className="reveal mx-auto mt-14 w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={executiveImages.boardMemberEntering}
                alt="Executive boarding luxury black SUV"
                width="900"
                height="600"
                className="h-72 w-full object-cover lg:h-80"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-goldSoft">Our Promise</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                Why Hire Our Executive Car Service in New York City?
              </h2>
              <p className="mt-4 text-white/80">
                At Black Car Luxury Limo, we offer the flexibility and dependability that redefine how you travel. You no longer have to wrestle with traffic, parking, or complicated addresses. Leave it all to our professional chauffeurs.
              </p>
              <p className="mt-3 text-white/75">
                Our state-of-the-art 2025+ black SUVs ensure you arrive composed and on time — every time. Take the ride to review your notes, prep for your meeting, or simply enjoy the silence. As you step out, you will make the impression your clients and partners remember.
              </p>
              <p className="mt-3 text-white/75">
                Last-minute changes? No problem. Our team stays ready to accommodate any shift in your schedule. That is the guarantee when you travel with the best executive car service NYC has to offer.
              </p>
              <a
                {...bookingLinkProps}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
              >
                Book Your Ride
              </a>
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="reveal mx-auto mt-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <img
              src={executiveImages.ceoInBackseat}
              alt="Executive in luxury black SUV — airport transfer"
              width="1200"
              height="700"
              className="h-48 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={executiveImages.chauffeurDriving}
              alt="Professional chauffeur with executive passenger"
              width="1200"
              height="700"
              className="h-48 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={executiveImages.cfoExiting}
              alt="Senior executive exiting luxury black car"
              width="1200"
              height="700"
              className="h-48 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <CTA compact />
      </main>
    </>
  );
}
