"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getFlightLink,
  getHotelLink,
  getJobLink,
} from "@/lib/searchLinks";

const routes: Record<string, string[]> = {
  June: ["Lisbon, Portugal", "Barcelona, Spain"],
  July: ["Split, Croatia", "Nice, France"],
  August: ["Santorini, Greece", "Ibiza, Spain"],
  December: ["Sydney, Australia", "Bali, Indonesia"],
};

export default function RouteGeneratorPage() {
  const [month, setMonth] = useState("June");

  return (
    <main className="min-h-screen bg-orange-50">
      <Header />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-orange-600">
          Route Generator
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Follow the Sun 🌞
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Select a month and Kuafu will suggest sunny destinations with quick
          links to flights, stays and jobs.
        </p>

        <select
          className="mt-8 w-full rounded-2xl border p-4"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>December</option>
        </select>

        <div className="mt-8 grid gap-5">
          {routes[month].map((place) => (
            <div key={place} className="rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-black">{place}</h2>

              <p className="mt-2 text-slate-600">
                Suggested because this destination has strong sun, good travel
                demand and work-travel potential.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`/search?destination=${encodeURIComponent(place)}`}
                  target="_blank"
                  className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-5 py-3 font-bold text-white">
                  Search flights
                </a>

                <a
                  href={`/search?destination=${encodeURIComponent(place)}`}
                  target="_blank"
                  className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white"
                >
                  Find hotels
                </a>

                <a
                  href={`/search?destination=${encodeURIComponent(place)}`}
                  target="_blank"
                  className="rounded-2xl border border-slate-300 px-5 py-3 font-bold"
                >
                  Find jobs
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}