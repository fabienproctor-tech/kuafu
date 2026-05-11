import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dubai Travel Guide for Winter Sun & Work Abroad | Kuafu",
  description:
    "Explore Dubai as a sunshine destination for winter sun travellers, remote workers and work abroad opportunities, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Dubai Marina",
    description:
      "Best for waterfront living, cafés, beaches, nightlife and modern city lifestyle.",
  },
  {
    name: "Downtown Dubai",
    description:
      "Best for luxury living, business districts, shopping and iconic skyline views.",
  },
  {
    name: "Jumeirah",
    description:
      "Best for beach access, villas, cafés and a more relaxed coastal atmosphere.",
  },
  {
    name: "Business Bay",
    description:
      "Best for remote work, business travel, coworking spaces and central convenience.",
  },
];

const quickFacts = [
  ["Best for", "Winter sun, luxury travel, work abroad"],
  ["Typical vibe", "Modern, ambitious, sunny, international"],
  ["Budget level", "Medium to high"],
  ["Best season", "November to March"],
  ["Remote work scene", "Strong and internationally connected"],
];

const faqs = [
  {
    question: "Is Dubai good for remote workers?",
    answer:
      "Yes. Dubai has become increasingly popular with remote workers thanks to strong infrastructure, cafés, coworking spaces, sunshine and international connectivity.",
  },
  {
    question: "Is Dubai expensive?",
    answer:
      "Dubai can be expensive depending on lifestyle and accommodation choices, especially in premium areas such as Downtown Dubai and Dubai Marina.",
  },
  {
    question: "When is the best time to visit Dubai?",
    answer:
      "Dubai is most popular between November and March when temperatures are warmer but more comfortable compared with the intense summer heat.",
  },
];

export default function DubaiDestinationPage() {
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
              Dubai for winter sun, remote work and modern lifestyle
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Dubai combines sunshine, modern city living, luxury experiences,
              beaches and international work opportunities, making it one of the
              world’s most recognisable winter sun destinations.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Dubai fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Dubai appeals to travellers looking for sunshine, ambition and a
              modern international lifestyle. The city combines beaches,
              skyscrapers, cafés, coworking spaces, luxury hotels and strong air
              connectivity with the rest of the world.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For remote workers, graduates and long-stay travellers, Dubai can
              feel like a gateway city between Europe, Asia and the Middle East.
              It is especially attractive during the UK winter when Dubai offers
              warm weather and outdoor living.
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
              Best areas to stay in Dubai
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
            Who Dubai is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Winter sun travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Dubai is one of the most accessible winter sun destinations for
                UK travellers looking for beaches, sunshine and warm weather.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Remote workers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Fast internet, cafés, coworking spaces and international
                infrastructure make Dubai attractive for remote workers and
                entrepreneurs.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Luxury travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Dubai is known for high-end hotels, rooftop pools, beach clubs,
                shopping and premium lifestyle experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Dubai lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Dubai can range from relatively manageable to highly expensive
                depending on lifestyle. Accommodation, dining and entertainment
                costs can rise quickly in premium districts, especially during
                peak winter months.
              </p>

              <p>
                For Kuafu travellers, Dubai stands out because it offers a
                modern sunshine lifestyle with global connectivity. The city
                feels ambitious, polished and highly international while still
                offering beaches and outdoor living during winter.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Dubai FAQs</h2>

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
    href="/destinations/seychelles"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Seychelles Travel Guide →
  </Link>

  <Link
    href="/destinations/cape-town"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Cape Town Travel Guide →
  </Link>

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
    href="/guides/best-countries-to-work-abroad-uk"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best Countries to Work Abroad →
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