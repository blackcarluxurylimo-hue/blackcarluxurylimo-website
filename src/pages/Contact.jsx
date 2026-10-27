import { useState, useRef } from 'react';
import Seo from '../components/Seo.jsx';
import { contactSeo } from '../data/pageSeo.js';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import LocationAutocomplete from '../components/LocationAutocomplete.jsx';
import { hearstImages } from '../utils/assets.js';

const PHONE = '+17184143881';
const WA_NUMBER = '17184143881';
const EMAIL = 'info@blackcarluxurylimo.com';

function buildMessage(fields) {
  return [
    '🚗 New Booking Request – Black Car Luxury Limo',
    '',
    `👤 Name: ${fields.fullName}`,
    `📞 Phone: ${fields.phone}`,
    `📧 Email: ${fields.email}`,
    '',
    `📍 Pickup: ${fields.pickupLocation}`,
    `🏁 Drop-off: ${fields.dropoffLocation}`,
    `📅 Date: ${fields.date}`,
    `⏰ Time: ${fields.time}`,
    `👥 Passengers: ${fields.passengers}`,
    `🚙 Service Type: ${fields.serviceType}`,
    '',
    `📝 Notes: ${fields.notes || 'N/A'}`,
  ].join('\n');
}

export default function Contact() {
  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '',
    serviceType: 'Airport Transfer',
    notes: '',
  });
  const [showSend, setShowSend] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));
  const setField = (key) => (val) => setFields((prev) => ({ ...prev, [key]: val }));

  const required = ['fullName', 'phone', 'pickupLocation', 'dropoffLocation', 'date', 'time', 'passengers'];

  function validate() {
    const next = {};
    required.forEach((k) => {
      if (!fields[k].trim()) next[k] = 'Required';
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleReview(e) {
    e.preventDefault();
    if (validate()) setShowSend(true);
  }

  function sendViaWhatsApp() {
    const text = buildMessage(fields);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noreferrer');
  }

  function sendViaSMS() {
    const text = buildMessage(fields);
    window.location.href = `sms:${PHONE}?body=${encodeURIComponent(text)}`;
  }

  function sendViaEmail() {
    const subject = `Booking Request – ${fields.serviceType} – ${fields.fullName}`;
    const body = buildMessage(fields);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClass = (key) =>
    `mt-2 min-h-12 w-full rounded-lg border px-3 text-base text-white outline-none bg-charcoal focus:border-gold ${
      errors[key] ? 'border-red-500' : 'border-white/20'
    }`;

  return (
    <>
      <Seo {...contactSeo} />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <section className="reveal mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left panel */}
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">Book Your Ride</h1>
            <p className="mt-4 text-white/80">
              Fill in your trip details and choose how you'd like to send your request.
            </p>
            <img
              src={hearstImages.bookYourRideEscalade}
              alt="Black Cadillac Escalade with professional chauffeur"
              width="1400"
              height="731"
              className="mt-6 h-52 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-6 rounded-2xl border border-gold/20 bg-ink/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-goldSoft">Direct Contact</p>
              <a href={`tel:${PHONE}`} className="mt-3 block text-2xl font-bold text-white hover:text-goldSoft">
                +1 (718) 414-3881
              </a>
              <a href={`mailto:${EMAIL}`} className="mt-3 block break-all text-sm text-white/80 hover:text-goldSoft">
                {EMAIL}
              </a>
              <p className="mt-2 text-white/75">24/7 booking support for airport, corporate, and event rides.</p>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="min-w-0 rounded-2xl border border-gold/20 bg-ink/80 p-4 sm:p-6"
            aria-label="Booking form"
            onSubmit={handleReview}
            noValidate
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Name */}
              <label className="text-sm text-white">
                Full Name <span className="text-red-400">*</span>
                <input type="text" value={fields.fullName} onChange={set('fullName')} className={inputClass('fullName')} placeholder="Jane Doe" />
                {errors.fullName && <span className="mt-1 block text-xs text-red-400">{errors.fullName}</span>}
              </label>

              {/* Phone */}
              <label className="text-sm text-white">
                Phone <span className="text-red-400">*</span>
                <input type="tel" value={fields.phone} onChange={set('phone')} className={inputClass('phone')} placeholder="(555) 123-4567" />
                {errors.phone && <span className="mt-1 block text-xs text-red-400">{errors.phone}</span>}
              </label>

              {/* Email */}
              <label className="text-sm text-white md:col-span-2">
                Email
                <input type="email" value={fields.email} onChange={set('email')} className="mt-2 min-h-12 w-full rounded-lg border border-white/20 bg-charcoal px-3 text-base text-white outline-none focus:border-gold" placeholder="your@email.com" />
              </label>

              {/* Pickup */}
              <div className="text-sm text-white md:col-span-2">
                <span>Pickup Location <span className="text-red-400">*</span></span>
                <LocationAutocomplete
                  value={fields.pickupLocation}
                  onChange={setField('pickupLocation')}
                  placeholder="e.g. JFK Airport, Terminal 4"
                  hasError={!!errors.pickupLocation}
                />
                {errors.pickupLocation && <span className="mt-1 block text-xs text-red-400">{errors.pickupLocation}</span>}
              </div>

              {/* Drop-off */}
              <div className="text-sm text-white md:col-span-2">
                <span>Drop-off Location <span className="text-red-400">*</span></span>
                <LocationAutocomplete
                  value={fields.dropoffLocation}
                  onChange={setField('dropoffLocation')}
                  placeholder="e.g. 350 5th Ave, New York, NY"
                  hasError={!!errors.dropoffLocation}
                />
                {errors.dropoffLocation && <span className="mt-1 block text-xs text-red-400">{errors.dropoffLocation}</span>}
              </div>

              {/* Date */}
              <label className="text-sm text-white">
                Date <span className="text-red-400">*</span>
                <input
                  type="date"
                  value={fields.date}
                  onChange={set('date')}
                  min={new Date().toISOString().split('T')[0]}
                  style={{ colorScheme: 'dark' }}
                  className={inputClass('date')}
                />
                {errors.date && <span className="mt-1 block text-xs text-red-400">{errors.date}</span>}
              </label>

              {/* Time */}
              <label className="text-sm text-white">
                Time <span className="text-red-400">*</span>
                <select value={fields.time} onChange={set('time')} className={inputClass('time')}>
                  <option value="">Select time…</option>
                  {Array.from({ length: 48 }, (_, i) => {
                    const h = Math.floor(i / 2);
                    const m = i % 2 === 0 ? '00' : '30';
                    const suffix = h < 12 ? 'AM' : 'PM';
                    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
                    const value = `${String(h).padStart(2, '0')}:${m}`;
                    const label = `${h12}:${m} ${suffix}`;
                    return <option key={value} value={value}>{label}</option>;
                  })}
                </select>
                {errors.time && <span className="mt-1 block text-xs text-red-400">{errors.time}</span>}
              </label>

              {/* Passengers */}
              <label className="text-sm text-white">
                Passengers <span className="text-red-400">*</span>
                <select value={fields.passengers} onChange={set('passengers')} className={inputClass('passengers')}>
                  <option value="">Select…</option>
                  {[1,2,3,4,5,6,7].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
                {errors.passengers && <span className="mt-1 block text-xs text-red-400">{errors.passengers}</span>}
              </label>

              {/* Service Type */}
              <label className="text-sm text-white">
                Service Type
                <select value={fields.serviceType} onChange={set('serviceType')} className="mt-2 min-h-12 w-full rounded-lg border border-white/20 bg-charcoal px-3 text-base text-white outline-none focus:border-gold">
                  <option>Airport Transfer</option>
                  <option>Wedding Limo</option>
                  <option>Corporate Ride</option>
                  <option>Hourly Service</option>
                </select>
              </label>

              {/* Notes */}
              <label className="text-sm text-white md:col-span-2">
                Additional Notes
                <textarea value={fields.notes} onChange={set('notes')} rows="3" className="mt-2 w-full rounded-lg border border-white/20 bg-charcoal px-3 py-2 text-base text-white outline-none focus:border-gold" placeholder="Flight number, special requests, luggage info…" />
              </label>
            </div>

            {/* Send button / options */}
            {!showSend ? (
              <button
                type="submit"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 font-semibold text-charcoal transition hover:bg-goldSoft"
              >
                Review &amp; Send Booking
              </button>
            ) : (
              <div className="mt-5 rounded-2xl border border-gold/30 bg-charcoal/60 p-4">
                <p className="mb-3 text-center text-sm font-semibold text-goldSoft uppercase tracking-widest">Choose how to send</p>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="inline-flex flex-1 min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={sendViaSMS}
                    className="inline-flex flex-1 min-h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-charcoal px-4 text-sm font-semibold text-white transition hover:border-gold"
                  >
                    <span className="text-base">💬</span>
                    Text / SMS
                  </button>
                  <button
                    type="button"
                    onClick={sendViaEmail}
                    className="inline-flex flex-1 min-h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-charcoal px-4 text-sm font-semibold text-white transition hover:border-gold"
                  >
                    <span className="text-base">✉️</span>
                    Email
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSend(false)}
                  className="mt-3 w-full text-center text-xs text-white/50 hover:text-white/80"
                >
                  ← Edit details
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
