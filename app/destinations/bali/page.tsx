import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bali Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Bali as a sunshine destination for digital nomads, remote workers and long-stay travellers, including cost, best areas, lifestyle and travel tips.",
};

const areas = [
  {
    name: "Canggu",
    description:
      "Best for coworking, cafés, gyms, social life and digital nomad communities.",
  },
  {
    name: "Ubud",
    description:
      "Best for wellness, slower living, rice fields, yoga and creative work.",
  },
  {
    name: "Uluwatu",
    description:
      "Best for beaches, surf, sunsets and a more premium coastal lifestyle.",
  },
  {
    name: "Seminyak",
    description:
      "Best for restaurants, beach clubs, shopping and short-stay comfort.",
  },
];

const quickFacts = [
  ["Best for", "Digital nomads, sunshine, wellness, cafés"],
  ["Typical vibe", "Creative, relaxed, social, tropical"],
  ["Budget level", "Mid-range but flexible"],
  ["Best season", "May to September for drier weather"],
  ["Remote work scene", "Very strong"],
];

export default function BaliDestinationPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-orange-500 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-200">
              Destination Guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Bali for digital nomads, sun seekers and long-stay travellers
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Bali is one of the world’s most popular sunshine bases for remote
              workers, creatives and travellers looking for tropical lifestyle,
              cafés, beaches, wellness and community.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Bali fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Bali combines sunshine, affordability, coworking culture,
              wellness, beach life and a strong international community. For
              students, graduates, backpackers and digital nomads, it offers a
              soft landing into long-term travel and remote work abroad.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              It is not just a beach destination. Bali works because it gives
              travellers multiple lifestyles in one place: café working in
              Canggu, slower creative living in Ubud, surf culture in Uluwatu
              and more comfortable resort-style travel in Seminyak.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-blue-950">Quick facts</h2>

            <div className="mt-5 space-y-4">
              {quickFacts.map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Best areas to stay in Bali
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-blue-900">
                    {area.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">
            Who Bali is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Bali has strong coworking infrastructure, reliable cafés,
                community events and a large remote work scene.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Long-stay travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                It works well for people who want to slow down, stay longer and
                build a lifestyle around sunshine, fitness and travel.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                First-time remote workers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Bali is beginner-friendly because there are lots of travellers,
                cafés, accommodation options and support networks.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-950 px-6 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold">Related Kuafu guides</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
  <Link
    href="/destinations/thailand"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Thailand Travel Guide →
  </Link>

  <Link
    href="/destinations/vietnam"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Vietnam Travel Guide →
  </Link>

  <Link
    href="/guides/best-countries-for-digital-nomads"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best Countries for Digital Nomads →
  </Link>

  <Link
    href="/guides/cheapest-countries-to-live-abroad"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Cheapest Countries to Live Abroad →
  </Link>

  <Link
    href="/guides/best-esim-for-travel"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best eSIM for Travel →
  </Link>

  <Link
    href="/route-generator"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Try the Route Generator →
  </Link>
</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}