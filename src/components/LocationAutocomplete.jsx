import { useState, useEffect, useRef, useCallback } from 'react';

function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Address autocomplete backed by Nominatim (OpenStreetMap).
 * Free, no API key required.
 *
 * Props:
 *  value      – controlled string value
 *  onChange   – (stringValue) => void
 *  placeholder – string
 *  hasError   – boolean
 */
export default function LocationAutocomplete({ value, onChange, placeholder, hasError }) {
  const [query, setQuery] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const containerRef = useRef(null);
  const abortRef = useRef(null);

  // keep in sync when parent resets
  useEffect(() => {
    setQuery(value || '');
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSuggestions = useCallback(
    debounce(async (q) => {
      if (q.trim().length < 3) {
        setSuggestions([]);
        setOpen(false);
        return;
      }
      if (abortRef.current) abortRef.current.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      try {
        const url =
          `https://nominatim.openstreetmap.org/search` +
          `?q=${encodeURIComponent(q)}` +
          `&format=json&addressdetails=0&limit=6&countrycodes=us`;
        const res = await fetch(url, {
          headers: { 'Accept-Language': 'en' },
          signal: ctrl.signal,
        });
        const data = await res.json();
        setSuggestions(data);
        setOpen(data.length > 0);
        setActiveIdx(-1);
      } catch (e) {
        if (e.name !== 'AbortError') setSuggestions([]);
      }
    }, 420),
    [],
  );

  function handleInput(e) {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
    fetchSuggestions(val);
  }

  function select(displayName) {
    setQuery(displayName);
    onChange(displayName);
    setSuggestions([]);
    setOpen(false);
  }

  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      select(suggestions[activeIdx].display_name);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  // close on outside click
  useEffect(() => {
    function handler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={containerRef} className="relative mt-2">
      <input
        type="text"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`min-h-12 w-full rounded-lg border px-3 text-base text-white outline-none bg-charcoal focus:border-gold ${
          hasError ? 'border-red-500' : 'border-white/20'
        }`}
      />

      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gold/30 bg-charcoal shadow-2xl"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.place_id}
              role="option"
              aria-selected={i === activeIdx}
              onMouseDown={() => select(s.display_name)}
              className={`cursor-pointer px-3 py-2.5 text-sm text-white transition-colors ${
                i === activeIdx ? 'bg-gold/20 text-goldSoft' : 'hover:bg-white/10'
              }`}
            >
              <span className="line-clamp-2 leading-snug">{s.display_name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
