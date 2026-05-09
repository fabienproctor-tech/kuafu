"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kuafu-cookie-consent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("kuafu-cookie-consent", "accepted");
    window.dispatchEvent(new Event("kuafu-cookie-consent-updated"));
    setShowBanner(false);
  }

  function rejectCookies() {
    localStorage.setItem("kuafu-cookie-consent", "rejected");
    window.dispatchEvent(new Event("kuafu-cookie-consent-updated"));
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 bg-white px-6 py-5 shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-bold text-blue-900">
            Cookies on Kuafu
          </h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
            We use analytics cookies to understand how visitors use Kuafu and
            improve the website. You can accept or reject analytics cookies.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={rejectCookies}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Reject analytics
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}