import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Japan Travel Guide for Working Holidays & Sun Seekers | Kuafu",
  description:
    "Explore Japan as a destination for working holiday travellers, digital nomads, students and long-stay travellers, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Tokyo",
    description:
      "Best for city energy, culture, food, transport, cafés, nightlife and career-focused travel.",
  },
  {
    name: "Osaka",
    description:
      "Best for food culture, nightlife, affordability compared with Tokyo and a more relaxed city base.",
  },
  {
    name: "Kyoto",
    description:
      "Best for history, temples, traditional streets, slower travel and cultural inspiration.",
  },
  {
    name: "Fukuoka",
    description:
      "Best for coastal city living, food, beaches, access to nature and a slightly slower pace.",
  },
];

const quickFacts = [
  ["Best for", "Working holidays, culture, city travel, food"],
  ["Typical vibe", "Efficient, creative, cultural, exciting"],
  ["Budget level", "Medium to high"],
  ["Best season", "March to May and October to November"],
  ["Work abroad scene", "Strong for working holiday travellers and English teaching"],
];

const faqs = [
  {
    question: "Is Japan good for working holidays?",
    answer:
      "Yes. Japan is one of the most exciting working holiday destinations for UK travellers who want culture, city life, food, language learning and a very different lifestyle experience.",
  },
  {
    question: "Is Japan affordable for long-stay travellers?",
    answer:
      "Japan is usually more expensive than many Southeast Asian destinations, but costs vary by city and lifestyle. Osaka and Fukuoka may feel more affordable than central Tokyo.",
  },
  {
    question: "Where is best to stay in Japan for a longer trip?",
    answer:
      "Tokyo is best for energy and opportunity, Osaka is great for food and nightlife, Kyoto suits slower cultural travel, and Fukuoka offers a coastal city lifestyle.",
  },
];

export default function JapanDestinationPage() {
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
              Japan for working holidays, culture and unforgettable city travel
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Japan is a dream destination for travellers looking for culture,
              food, cities, working holiday opportunities, seasonal beauty and a
              completely different pace of life.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Japan fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Japan offers a different kind of freedom: the chance to step into
              a highly organised, visually rich and culturally deep country
              where every city feels distinct. It is ideal for travellers who
              want inspiration, structure, food, design, nature and urban energy.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For students, graduates and working holiday travellers, Japan can
              be more than a trip. It can become a full chapter abroad, with the
              chance to work, travel between cities, learn the language and
              experience a completely different lifestyle.
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
              Best areas to stay in Japan
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
            Who Japan is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Working holiday travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Japan is ideal for UK travellers who want to work abroad, build
                independence, experience a different culture and travel across
                one of the world’s most fascinating countries.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Culture-focused travellers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                From temples and tea houses to neon districts, anime culture,
                museums, gardens and food markets, Japan is packed with cultural
                depth.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                City explorers
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Tokyo, Osaka, Kyoto and Fukuoka all offer different city
                lifestyles, from high-energy urban living to slower cultural
                travel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Japan lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Japan is usually not the cheapest long-stay destination, but it
                can offer strong value through public transport, convenience
                stores, local restaurants and efficient city living. Tokyo can
                be expensive, while Osaka, Fukuoka and smaller cities may feel
                more manageable.
              </p>

              <p>
                For Kuafu travellers, Japan works because it offers a powerful
                “next chapter” feeling. It is a destination where everyday life
                can feel cinematic — from train stations and ramen counters to
                mountain towns, temples and late-night city streets.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Japan FAQs</h2>

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
    href="/destinations/sydney"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Sydney Travel Guide →
  </Link>

  <Link
    href="/destinations/thailand"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Thailand Travel Guide →
  </Link>

  <Link
    href="/guides/working-holiday-visas-explained"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Working Holiday Visas Explained →
  </Link>

  <Link
    href="/guides/best-countries-to-work-abroad-uk"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best Countries to Work Abroad →
  </Link>

  <Link
    href="/jobs"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Explore Work Abroad Jobs →
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