import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Barcelona Travel Guide for Sun Seekers & City Travellers | Kuafu",
  description:
    "Explore Barcelona as a sunshine destination for students, digital nomads, city-break travellers and long-stay visitors, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "El Born",
    description:
      "Best for cafés, restaurants, nightlife, boutique streets and creative city energy.",
  },
  {
    name: "Gràcia",
    description:
      "Best for a more local feel, plazas, independent cafés, relaxed evenings and longer stays.",
  },
  {
    name: "Eixample",
    description:
      "Best for central convenience, architecture, shopping, coworking access and easy transport.",
  },
  {
    name: "Barceloneta",
    description:
      "Best for beach access, seafood restaurants, summer atmosphere and short sunny stays.",
  },
];

const quickFacts = [
  ["Best for", "City breaks, sunshine, students, digital nomads"],
  ["Typical vibe", "Creative, social, coastal, energetic"],
  ["Budget level", "Medium to high"],
  ["Best season", "April to October"],
  ["Remote work scene", "Strong, with cafés and coworking spaces"],
];

const faqs = [
  {
    question: "Is Barcelona good for digital nomads?",
    answer:
      "Yes. Barcelona is popular with digital nomads because it combines cafés, coworking spaces, beach access, nightlife, food culture and a strong international community.",
  },
  {
    question: "Is Barcelona expensive?",
    answer:
      "Barcelona can be more expensive than many smaller Spanish cities, especially in central and beach areas. Costs depend heavily on neighbourhood, season and accommodation style.",
  },
  {
    question: "When is the best time to visit Barcelona?",
    answer:
      "Spring, early summer and early autumn are especially good because the weather is warm, the city is lively and it is usually less intense than peak summer.",
  },
];

export default function BarcelonaDestinationPage() {
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
              Barcelona for sunshine, city breaks and coastal lifestyle
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Barcelona blends beaches, architecture, food, nightlife, cafés and
              Mediterranean energy, making it one of Europe’s most exciting
              sunshine city destinations.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Barcelona fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Barcelona is ideal for travellers who want city energy without
              giving up sunshine and beach access. It offers a rare combination
              of culture, architecture, food, nightlife, cafés and coastal
              living.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For students, graduates, digital nomads and city-break travellers,
              Barcelona feels social, creative and easy to enjoy. You can spend
              the morning exploring neighbourhoods, work from a café in the
              afternoon and finish the day by the sea.
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
              Best areas to stay in Barcelona
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
            Who Barcelona is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                City-break travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Barcelona is perfect for travellers who want architecture, food,
                nightlife, beaches and a strong sense of place in one trip.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">Students</h3>

              <p className="mt-3 leading-7 text-slate-700">
                The city’s social energy, universities, nightlife, beaches and
                international feel make it especially appealing for students and
                younger travellers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Barcelona has cafés, coworking spaces, transport links and a
                strong international community, making it a natural European
                remote work base.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Barcelona lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Barcelona can be more expensive than many other Spanish
                destinations, especially in central neighbourhoods and during
                peak summer. However, it offers strong lifestyle value for
                travellers who want culture, transport, beaches and social
                energy in one place.
              </p>

              <p>
                For Kuafu travellers, Barcelona works because it gives you a
                full Mediterranean lifestyle without needing to choose between a
                city and the sea. It feels energetic, visual and highly
                accessible for shorter trips or longer stays.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">
            Barcelona FAQs
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
                href="/guides/cheap-summer-destinations-europe"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Cheap Summer Destinations in Europe →
              </Link>

              <Link
                href="/guides/where-is-summer-now"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Where Is Summer Now? →
              </Link>

              <Link
                href="/guides/best-countries-for-digital-nomads"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Best Countries for Digital Nomads →
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