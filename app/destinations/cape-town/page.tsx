import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cape Town Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Cape Town as a sunshine destination for digital nomads, remote workers and long-stay travellers, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Sea Point",
    description:
      "Best for ocean views, cafés, gyms, walkability and a balanced city-by-the-sea lifestyle.",
  },
  {
    name: "Green Point",
    description:
      "Best for access to the waterfront, restaurants, stadium area, cafés and central convenience.",
  },
  {
    name: "Camps Bay",
    description:
      "Best for beaches, sunsets, premium stays, restaurants and a more luxury coastal feel.",
  },
  {
    name: "Gardens",
    description:
      "Best for city access, cafés, nightlife, creative energy and mountain views.",
  },
];

const quickFacts = [
  ["Best for", "Winter sun, remote work, beaches, lifestyle"],
  ["Typical vibe", "Scenic, creative, outdoorsy, premium"],
  ["Budget level", "Medium to high"],
  ["Best season", "November to March for warm summer weather"],
  ["Remote work scene", "Strong in central and coastal neighbourhoods"],
];

const faqs = [
  {
    question: "Is Cape Town good for digital nomads?",
    answer:
      "Yes. Cape Town is popular with remote workers because it combines cafés, coworking spaces, beaches, mountain scenery, restaurants and a strong lifestyle appeal.",
  },
  {
    question: "Is Cape Town affordable for long stays?",
    answer:
      "Cape Town can be more affordable than some major European cities, but costs vary heavily by area and season. Coastal areas such as Camps Bay are usually more expensive than central neighbourhoods.",
  },
  {
    question: "When is the best time to visit Cape Town?",
    answer:
      "Cape Town is especially popular from November to March, when the weather is warmer and drier. This also makes it attractive for UK travellers looking for winter sun.",
  },
];

export default function CapeTownDestinationPage() {
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
              Cape Town for winter sun, remote work and ocean lifestyle
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Cape Town is one of the world’s most cinematic sunshine cities,
              combining beaches, mountains, cafés, restaurants, outdoor living
              and a growing remote work scene.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Cape Town fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Cape Town is ideal for travellers who want sunshine, scenery and a
              lifestyle that feels adventurous but still connected. It offers
              beaches, mountains, cafés, coworking spaces, gyms, restaurants and
              one of the most dramatic city backdrops in the world.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For UK travellers, Cape Town is especially attractive during the
              northern hemisphere winter. While the UK is colder and darker,
              Cape Town moves into its summer season, making it a strong option
              for winter sun, remote work and longer stays.
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
              Best areas to stay in Cape Town
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
            Who Cape Town is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Winter sun travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Cape Town is a strong escape from the UK winter, with warm
                weather, long daylight hours, beaches and outdoor living during
                the northern hemisphere’s colder months.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Remote workers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Cafés, coworking spaces, gyms and scenic neighbourhoods make
                Cape Town a strong temporary base for remote workers and
                creatives.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Outdoor travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                With beaches, hiking, surfing, road trips and mountain views,
                Cape Town suits travellers who want more than a traditional city
                break.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Cape Town lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Cape Town can offer strong lifestyle value compared with some
                major European or US cities, especially for travellers who value
                scenery, outdoor living and food culture. However, costs can
                rise quickly in premium coastal areas and during peak season.
              </p>

              <p>
                For Kuafu travellers, Cape Town works because it feels like a
                full lifestyle destination rather than just a holiday. You can
                work from a café in the morning, walk the promenade in the
                afternoon and watch the sunset over the Atlantic in the evening.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Cape Town FAQs</h2>

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
                href="/guides/where-is-summer-now"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Where Is Summer Now? →
              </Link>

              <Link
                href="/guides/where-to-travel-in-december-from-uk"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                Where to Travel in December →
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