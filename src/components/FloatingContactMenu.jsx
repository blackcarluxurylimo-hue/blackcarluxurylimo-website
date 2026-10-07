import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function FloatingContactMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-20 z-[95] md:bottom-24 flex flex-col items-end gap-2">
      <div className={`flex flex-col items-end gap-2 overflow-hidden transition-all duration-300 ${open ? 'mb-2 h-auto' : 'h-0'}`}>
        <a
          href="https://wa.me/17184143881"
          target="_blank"
          rel="noreferrer"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          className={`group inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/35 bg-charcoal/95 px-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-goldSoft ${
            open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-charcoal">
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </span>
          WhatsApp
        </a>

        <a
          href="sms:+17184143881"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/35 bg-charcoal/95 px-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-goldSoft ${
            open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-charcoal">
            💬
          </span>
          Text
        </a>

        <a
          href="tel:+17184143881"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/35 bg-charcoal/95 px-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-goldSoft ${
            open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-charcoal">
            📞
          </span>
          Call
        </a>

        <a
          href="mailto:info@blackcarluxurylimo.com"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/35 bg-charcoal/95 px-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-goldSoft ${
            open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-charcoal">
            ✉
          </span>
          Email
        </a>
      </div>

      {/* Radar pulse wrapper — stops when menu is open */}
      <div className="relative">
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-gold opacity-40 animate-[fcm-radar_1.8s_ease-out_infinite]" />
            <span className="absolute inset-0 rounded-full bg-gold opacity-25 animate-[fcm-radar_1.8s_ease-out_0.6s_infinite]" />
          </>
        )}
        <button
          type="button"
          aria-label={open ? 'Close contact menu' : 'Open contact menu'}
          onClick={() => setOpen((value) => !value)}
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-goldSoft bg-gold text-2xl font-bold text-charcoal shadow-[0_10px_26px_rgba(0,0,0,0.55)] transition hover:bg-goldSoft"
        >
          {open ? '×' : '+'}
        </button>
      </div>

      <style>{`
        @keyframes fcm-radar {
          0%   { transform: scale(1);   opacity: 0.45; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fcm-radar_1\\.8s_ease-out_infinite\\],
          .animate-\\[fcm-radar_1\\.8s_ease-out_0\\.6s_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}