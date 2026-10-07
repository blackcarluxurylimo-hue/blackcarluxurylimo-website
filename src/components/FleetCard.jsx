import { Link } from 'react-router-dom';

export default function FleetCard({ item }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-gold/20 bg-ink/80 p-4 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-gold/45">
      <h3 className="text-lg font-semibold text-white">{item.name}</h3>

      <img
        src={item.image}
        alt={item.name}
        width="800"
        height="500"
        className="mt-3 h-44 w-full rounded-xl border border-gold/30 bg-charcoal object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Spec lines: luggage + passengers */}
      <dl className="mt-4 space-y-1.5 text-sm text-white/80">
        {item.luggage && (
          <div className="flex items-center gap-2">
            <span aria-hidden="true">🧳</span>
            <dd>{item.luggage}</dd>
          </div>
        )}
        {item.passengers && (
          <div className="flex items-center gap-2">
            <span aria-hidden="true">👥</span>
            <dd>{item.passengers}</dd>
          </div>
        )}
      </dl>

      {/* Feature bullets (up to 4) */}
      {item.features?.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 gap-1.5">
          {item.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-white/75">
              <span className="mt-0.5 text-gold" aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={item.showroomPath || '/fleet'}
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-4 text-sm font-medium text-white transition group-hover:bg-gold group-hover:text-charcoal"
      >
        {item.ctaLabel || 'View Showroom'}
      </Link>
    </article>
  );
}
