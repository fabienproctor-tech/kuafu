"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "kuafu-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function updateConsent(value: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, value);

    window.dispatchEvent(new Event("kuafu-cookie-consent-updated"));

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:left-6 md:right-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Cookies on Kuafu
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            We use analytics cookies to understand how visitors use Kuafu and
            improve our travel guides. You can accept or reject analytics
            cookies. Essential cookies may still be used to remember your choice.
          </p>

          <Link
            href="/privacy"
            className="mt-2 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            Read our Privacy & Cookie Policy
          </Link>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => updateConsent("rejected")}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Reject
          </button>

          <button
            onClick={() => updateConsent("accepted")}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}