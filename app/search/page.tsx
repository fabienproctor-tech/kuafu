"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFlightLink, getHotelLink, getJobLink } from "@/lib/searchLinks";

function SearchContent() {
  const searchParams = useSearchParams();
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const dest = searchParams.get("destination");
    if (dest) setDestination(dest);
  }, [searchParams]);

  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Travel Search
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Search your next destination
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Find flights, hotels and work abroad opportunities for sunny
              destinations around the world.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <label
              htmlFor="destination"
              className="text-sm font-semibold uppercase tracking-wide text-blue-900"
            >
              Destination
            </label>

            <input
              id="destination"
              type="text"
              placeholder="Enter a city or country, e.g. Lisbon, Bali or Australia"
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Tip: for better work abroad results, enter a city or country such
              as Lisbon, Barcelona, Sydney or Australia.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              href={getFlightLink(destination)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Flights
              </p>
              <h2 className="mt-2 text-2xl font-bold text-blue-900">
                Search flights
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Compare routes and start planning how to get there.
              </p>
            </a>

            <a
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              href={getHotelLink(destination)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Hotels
              </p>
              <h2 className="mt-2 text-2xl font-bold text-blue-900">
                Find places to stay
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Search accommodation options for short trips or longer stays.
              </p>
            </a>

            <a
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              href={getJobLink(destination)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Work Abroad
              </p>
              <h2 className="mt-2 text-2xl font-bold text-blue-900">
                Explore opportunities
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Discover work abroad routes, seasonal jobs and remote work ideas.
              </p>
            </a>
          </div>

          <div className="mt-12 rounded-3xl bg-blue-900 px-6 py-10 text-center text-white">
            <h2 className="text-3xl font-bold">Not sure where to go?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Explore Kuafu guides for sunny destinations, digital nomad ideas
              and work abroad inspiration.
            </p>
            <a
              href="/guides"
              className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Explore guides
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-10">Loading search...</p>}>
      <SearchContent />
    </Suspense>
  );
}