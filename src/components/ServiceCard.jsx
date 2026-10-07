import { bookingLinkProps } from '../data/bookingConfig.js';

export default function ServiceCard({ item }) {
  return (
    <article className="rounded-2xl border border-gold/20 bg-ink/80 p-6 transition duration-300 hover:border-gold/50 hover:bg-ink">
      <img
        src={item.image}
        alt={item.title}
        width="800"
        height="500"
        className="h-40 w-full rounded-xl border border-gold/30 bg-charcoal object-cover"
        loading="lazy"
        decoding="async"
      />
      <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">{item.description}</p>
      <a
        {...bookingLinkProps}
        className="mt-5 inline-flex min-h-12 items-center rounded-full bg-gold px-5 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
      >
        Book Now
      </a>
    </article>
  );
}
