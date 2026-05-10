"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export default function VercelAnalyticsConsent() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    function checkConsent() {
      const consent = localStorage.getItem("kuafu-cookie-consent");
      setHasConsent(consent === "accepted");
    }

    checkConsent();

    window.addEventListener("kuafu-cookie-consent-updated", checkConsent);

    return () => {
      window.removeEventListener("kuafu-cookie-consent-updated", checkConsent);
    };
  }, []);

  if (!hasConsent) return null;

  return <Analytics />;
}