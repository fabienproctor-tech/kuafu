"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getFlightLink,
  getHotelLink,
  getJobLink,
} from "@/lib/searchLinks";

function SearchContent() {
  const searchParams = useSearchParams();
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const dest = searchParams.get("destination");
    if (dest) setDestination(dest);
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h1 className="text-4xl font-black text-slate-950">
          Search your next destination
        </h1>

        <input
          type="text"
          placeholder="Enter a city or country (e.g. Lisbon)"
          className="mt-6 w-full rounded-2xl border p-4"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <p className="mt-2 text-sm text-slate-500">
          Tip: for better job results, enter a city such as Lisbon, Barcelona or Sydney.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition"
            href={getFlightLink(destination)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-black">Flights</h2>
          </a>

          <a
            className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition"
            href={getHotelLink(destination)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-black">Hotels</h2>
          </a>

          <a
            className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition"
            href={getJobLink(destination)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-black">Jobs</h2>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-10">Loading search...</p>}>
      <SearchContent />
    </Suspense>
  );
}