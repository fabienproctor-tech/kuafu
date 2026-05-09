"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
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

  if (!GA_ID || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}