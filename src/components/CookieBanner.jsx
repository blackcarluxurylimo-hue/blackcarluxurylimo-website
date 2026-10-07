import { useEffect, useState } from 'react';

const CONSENT_KEY = 'bcl_cookie_consent_v1';

function saveConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Ignore storage failures and still close the banner.
  }
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid calling setState synchronously in effect
    setTimeout(() => {
      try {
        const storedConsent = window.localStorage.getItem(CONSENT_KEY);
        setIsVisible(!storedConsent);
      } catch {
        setIsVisible(true);
      }
    }, 0);
  }, []);

  const handleAcceptAll = () => {
    saveConsent('accepted_all');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    saveConsent('rejected_non_essential');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      aria-label="Cookie consent banner"
      className="fixed inset-x-0 bottom-0 z-[120] border-t border-gold/30 bg-ink/95 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm leading-relaxed text-white/85">
          We use cookies to improve site performance and your browsing experience.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/45 px-5 text-sm font-semibold text-white transition hover:border-gold hover:text-goldSoft"
          >
            Reject Non-Essential Cookies
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-charcoal transition hover:bg-goldSoft"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </section>
  );
}

export default CookieBanner;