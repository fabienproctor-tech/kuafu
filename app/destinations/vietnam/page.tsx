import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vietnam Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Vietnam as an affordable destination for digital nomads, backpackers, remote workers and long-stay travellers, including cost, best areas, lifestyle and travel tips.",
};

const areas = [
  {
    name: "Ho Chi Minh City",
    description:
      "Best for city energy, cafés, nightlife, coworking spaces, startups and a fast-paced remote work lifestyle.",
  },
  {
    name: "Da Nang",
    description:
      "Best for beach living, affordability, cafés, coworking spaces and a relaxed digital nomad base.",
  },
  {
    name: "Hanoi",
    description:
      "Best for culture, food, history, cafés and a more traditional city experience.",
  },
  {
    name: "Hoi An",
    description:
      "Best for slower travel, beautiful streets, nearby beaches, food and creative stays.",
  },
];

const quickFacts = [
  ["Best for", "Budget travel, digital nomads, food, culture"],
  ["Typical vibe", "Affordable, energetic, creative, social"],
  ["Budget level", "Low to medium"],
  ["Best season", "Varies by region, but spring and autumn are often popular"],
  ["Remote work scene", "Growing strongly in Da Nang, Ho Chi Minh City and Hanoi"],
];

const faqs = [
  {
    question: "Is Vietnam good for digital nomads?",
    answer:
      "Yes. Vietnam is increasingly popular with digital nomads, especially in Da Nang, Ho Chi Minh City and Hanoi. It offers affordable living, strong café culture, coworking spaces and good travel links.",
  },
  {
    question: "Is Vietnam affordable for long-stay travellers?",
    answer:
      "Vietnam is one of Southeast Asia’s better-value destinations for long-stay travellers. Costs depend on city, accommodation style and lifestyle, but it can be very affordable compared with many Western destinations.",
  },
  {
    question: "Where is best for remote work in Vietnam?",
    answer:
      "Da Nang is often popular for beach-based remote work, while Ho Chi Minh City is better for city energy, networking and nightlife. Hanoi is strong for culture, cafés and a more traditional city feel.",
  },
];

export default function VietnamDestinationPage() {
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
              Vietnam for digital nomads, backpackers and affordable living
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Vietnam is one of Southeast Asia’s most exciting destinations for
              travellers looking for affordability, food culture, city energy,
              beaches, remote work and longer adventures.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Vietnam fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Vietnam is ideal for travellers who want sunshine, movement,
              culture and affordability. It gives you energetic cities,
              beachside bases, low-cost food, café working and easy routes
              through Southeast Asia.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For students, graduates, backpackers and remote workers, Vietnam
              can be a brilliant destination to stretch a budget while still
              having access to cafés, coworking spaces, social communities and
              memorable travel experiences.
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
              Best areas to stay in Vietnam
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
            Who Vietnam is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Budget travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Vietnam is a strong choice for travellers who want to make their
                money go further while still enjoying cities, beaches, food and
                transport links.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Da Nang, Ho Chi Minh City and Hanoi all offer cafés, coworking
                options and growing remote work communities for longer stays.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">Backpackers</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Vietnam is one of Asia’s classic backpacking routes, with
                affordable hostels, night markets, food tours, beaches and
                mountain routes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Vietnam lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Vietnam can be very affordable for long-stay travellers,
                especially when compared with many European or North American
                destinations. Local food, transport and accommodation can offer
                strong value, although costs rise in more tourist-heavy areas or
                with a more premium lifestyle.
              </p>

              <p>
                For Kuafu travellers, Vietnam works well because it gives you
                options: beach life in Da Nang, fast city living in Ho Chi Minh
                City, cultural depth in Hanoi and slower creative travel in Hoi
                An.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Vietnam FAQs</h2>

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
    href="/destinations/thailand"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Thailand Travel Guide →
  </Link>

  <Link
    href="/destinations/bali"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Bali Travel Guide →
  </Link>

  <Link
    href="/guides/cheapest-countries-to-live-abroad"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Cheapest Countries to Live Abroad →
  </Link>

  <Link
    href="/guides/best-countries-for-digital-nomads"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best Countries for Digital Nomads →
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