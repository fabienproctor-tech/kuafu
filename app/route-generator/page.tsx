"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const routes: Record<string, string[]> = {
  June: ["Lisbon, Portugal", "Barcelona, Spain"],
  July: ["Split, Croatia", "Nice, France"],
  August: ["Santorini, Greece", "Ibiza, Spain"],
  December: ["Sydney, Australia", "Bali, Indonesia"],
};

export default function RouteGeneratorPage() {
  const [month, setMonth] = useState("June");

  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Route Generator
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Follow the sun with Kuafu
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Choose a month and discover sunny destination ideas with quick
              links to flights, hotels and work abroad opportunities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <label
              htmlFor="month"
              className="text-sm font-semibold uppercase tracking-wide text-blue-900"
            >
              Choose your travel month
            </label>

            <select
              id="month"
              className="mt-3 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>December</option>
            </select>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Kuafu suggests destinations based on seasonality, sunshine,
              travel appeal and work-travel potential.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {routes[month].map((place) => (
              <article
                key={place}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  Suggested destination
                </p>

                <h2 className="mt-2 text-2xl font-bold text-blue-900">
                  {place}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Suggested for {month} because this destination has strong
                  seasonal appeal, travel demand and work-travel potential.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/search?destination=${encodeURIComponent(place)}`}
                    className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
                  >
                    Search travel
                  </a>

                  <a
                    href={`/search?destination=${encodeURIComponent(place)}`}
                    className="rounded-full bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                  >
                    Work & Travel
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              How it works
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
              Build inspiration-led travel routes
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Pick a month
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Start with when you want to travel and Kuafu suggests where
                  the season makes sense.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Explore destinations
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Compare sunny places, lifestyle appeal and work abroad
                  potential.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Start planning
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Use search links to find travel options and continue building
                  your route.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Want more destination ideas?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Explore Kuafu guides for winter sun, digital nomad destinations
              and work abroad inspiration.
            </p>

            <a
              href="/guides"
              className="mt-8 inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
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