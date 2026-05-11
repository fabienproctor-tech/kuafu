import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thailand Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Thailand as a sunshine destination for digital nomads, backpackers, remote workers and long-stay travellers, including cost, best areas, lifestyle and travel tips.",
};

const areas = [
  {
    name: "Bangkok",
    description:
      "Best for city energy, food culture, coworking spaces, transport links and regional travel routes.",
  },
  {
    name: "Chiang Mai",
    description:
      "Best for affordable living, digital nomad communities, cafés, slower travel and mountain scenery.",
  },
  {
    name: "Phuket",
    description:
      "Best for beaches, island lifestyle, resorts, gyms, nightlife and short-to-medium stays.",
  },
  {
    name: "Koh Samui",
    description:
      "Best for tropical living, wellness, beaches and a quieter island base.",
  },
];

const quickFacts = [
  ["Best for", "Backpackers, digital nomads, winter sun, budget travel"],
  ["Typical vibe", "Warm, social, affordable, tropical"],
  ["Budget level", "Low to medium"],
  ["Best season", "November to March for cooler, drier weather"],
  ["Remote work scene", "Strong in Bangkok, Chiang Mai and island hubs"],
];

const faqs = [
  {
    question: "Is Thailand good for digital nomads?",
    answer:
      "Yes. Thailand is one of Asia’s strongest digital nomad bases, especially in Bangkok, Chiang Mai, Phuket and Koh Samui. It offers cafés, coworking spaces, affordable accommodation and a large international travel community.",
  },
  {
    question: "Is Thailand affordable for long-stay travellers?",
    answer:
      "Thailand can be very affordable compared with many Western countries, especially outside luxury beach areas. Costs vary depending on whether you stay in Bangkok, Chiang Mai, Phuket or the islands.",
  },
  {
    question: "When is the best time to visit Thailand?",
    answer:
      "The most popular period is usually November to March, when much of the country is drier and slightly cooler. Weather can vary by region, especially between the north, Bangkok and the islands.",
  },
];

export default function ThailandDestinationPage() {
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
              Thailand for digital nomads, backpackers and sun seekers
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Thailand is one of the world’s most popular long-stay travel
              destinations, combining sunshine, affordability, food culture,
              islands, city life and a strong remote work scene.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Thailand fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Thailand works especially well for travellers looking for
              sunshine, freedom and flexibility. It offers everything from
              low-cost city living and café working to tropical islands,
              backpacking routes, wellness retreats and regional travel links
              across Southeast Asia.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For students, graduates, backpackers and remote workers, Thailand
              can be a strong first step into long-term travel. Bangkok gives
              you city energy and transport links, Chiang Mai offers slower and
              more affordable nomad living, while Phuket and Koh Samui bring the
              beach lifestyle.
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
              Best areas to stay in Thailand
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
            Who Thailand is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Thailand has cafés, coworking spaces, affordable apartments and
                a long-established remote work community, especially in Bangkok,
                Chiang Mai and the islands.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">Backpackers</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Thailand is one of the classic backpacking gateways to Southeast
                Asia, with strong hostel routes, beaches, night markets and
                regional travel connections.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Winter sun travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                For UK travellers escaping colder months, Thailand offers warm
                weather, tropical beaches and a long-haul sunshine option during
                winter.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Thailand lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Thailand can suit a wide range of budgets. Chiang Mai and parts
                of Bangkok can be affordable for longer stays, while popular
                island areas such as Phuket and Koh Samui can become more
                expensive depending on season, accommodation style and lifestyle.
              </p>

              <p>
                For Kuafu travellers, the appeal is flexibility. You can live
                simply, work from cafés, travel between cities and islands, or
                build a more premium beach lifestyle with gyms, coworking spaces
                and wellness routines.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">
            Thailand FAQs
          </h2>

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
    href="/destinations/bali"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Bali Travel Guide →
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
    href="/guides/where-to-travel-in-december-from-uk"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Where to Travel in December →
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