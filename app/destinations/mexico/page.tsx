import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mexico Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Mexico as a sunshine destination for digital nomads, remote workers, backpackers and long-stay travellers, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Mexico City",
    description:
      "Best for culture, cafés, restaurants, coworking spaces, nightlife and a creative city lifestyle.",
  },
  {
    name: "Playa del Carmen",
    description:
      "Best for beach living, digital nomads, coworking, nightlife and easy access to the Riviera Maya.",
  },
  {
    name: "Tulum",
    description:
      "Best for wellness, beaches, boutique stays, slower travel and a more premium lifestyle.",
  },
  {
    name: "Puerto Escondido",
    description:
      "Best for surf, sunsets, beach cafés, backpackers and a more relaxed coastal lifestyle.",
  },
];

const quickFacts = [
  ["Best for", "Digital nomads, culture, beaches, long stays"],
  ["Typical vibe", "Colourful, social, creative, sunny"],
  ["Budget level", "Medium, with cheaper and premium options"],
  ["Best season", "November to April for drier weather in many areas"],
  ["Remote work scene", "Strong in Mexico City, Playa del Carmen and Tulum"],
];

const faqs = [
  {
    question: "Is Mexico good for digital nomads?",
    answer:
      "Yes. Mexico is popular with digital nomads because it offers strong city options, beach towns, cafés, coworking spaces, food culture and a large international travel community.",
  },
  {
    question: "Is Mexico affordable for long-stay travellers?",
    answer:
      "Mexico can be affordable depending on where you stay. Mexico City and beach towns can range from budget-friendly to expensive, especially in popular areas like Tulum and Playa del Carmen.",
  },
  {
    question: "Where is best for remote work in Mexico?",
    answer:
      "Mexico City is best for culture, cafés and city living. Playa del Carmen is popular for beach-based remote work, while Tulum and Puerto Escondido suit travellers looking for a slower coastal lifestyle.",
  },
];

export default function MexicoDestinationPage() {
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
              Mexico for digital nomads, sunshine and creative long stays
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Mexico is one of the most exciting long-stay destinations for
              travellers looking for sunshine, food culture, colour, city
              energy, beaches and remote work flexibility.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Mexico fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Mexico offers a powerful mix of sunshine, culture, food, beaches
              and modern remote work infrastructure. It works well for people
              who want more than a short holiday — especially travellers looking
              for a warmer, more flexible and creative lifestyle abroad.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              From café working in Mexico City to beach days in Playa del Carmen
              or surf life in Puerto Escondido, Mexico gives travellers multiple
              versions of the sunshine lifestyle in one country.
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
              Best areas to stay in Mexico
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
            Who Mexico is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Mexico has strong remote work hubs, especially in Mexico City,
                Playa del Carmen and Tulum, with cafés, coworking spaces and
                international communities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Long-stay travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Mexico suits travellers who want to slow down, explore different
                regions and build a lifestyle around food, sunshine, beaches and
                culture.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Creative travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                The mix of colour, architecture, food, design, music and
                coastline makes Mexico especially appealing for creatives,
                freelancers and lifestyle-focused travellers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Mexico lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Mexico can work across a wide range of budgets. Some areas are
                still relatively affordable for long-stay travellers, while
                popular destinations such as Tulum, Playa del Carmen and parts
                of Mexico City can become more expensive depending on lifestyle,
                season and accommodation.
              </p>

              <p>
                For Kuafu travellers, the appeal is variety. You can choose a
                fast-paced city base, a beach town, a surf community or a slower
                cultural stay — all while keeping sunshine, food and freedom at
                the centre of the experience.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Mexico FAQs</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-blue-900">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-950 px-6 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold">Related Kuafu guides</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                href="/guides/where-is-summer-now"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Where Is Summer Now? →
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