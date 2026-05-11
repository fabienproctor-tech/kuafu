import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lisbon Travel Guide for Digital Nomads & Sun Seekers | Kuafu",
  description:
    "Explore Lisbon as a sunshine destination for digital nomads, remote workers and city-break travellers, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Alfama",
    description:
      "Best for traditional Lisbon atmosphere, viewpoints, old streets and cultural charm.",
  },
  {
    name: "Bairro Alto",
    description:
      "Best for nightlife, cafés, restaurants and social city living.",
  },
  {
    name: "Cais do Sodré",
    description:
      "Best for coworking spaces, digital nomad cafés, nightlife and riverfront access.",
  },
  {
    name: "Belém",
    description:
      "Best for slower living, riverside walks, museums and a calmer local feel.",
  },
];

const quickFacts = [
  ["Best for", "Digital nomads, city breaks, sunshine lifestyle"],
  ["Typical vibe", "Creative, coastal, relaxed, social"],
  ["Budget level", "Medium"],
  ["Best season", "March to October"],
  ["Remote work scene", "Very strong and internationally connected"],
];

const faqs = [
  {
    question: "Is Lisbon good for digital nomads?",
    answer:
      "Yes. Lisbon is one of Europe’s strongest digital nomad hubs thanks to its weather, cafés, coworking spaces, coastal lifestyle and international community.",
  },
  {
    question: "Is Lisbon expensive?",
    answer:
      "Lisbon has become more expensive in recent years, especially in central neighbourhoods, but it can still offer good value compared with some other Western European capitals.",
  },
  {
    question: "When is the best time to visit Lisbon?",
    answer:
      "Spring through autumn is especially popular thanks to warm weather, sunshine and outdoor café culture. Summer is busiest, while spring and autumn can feel more relaxed.",
  },
];

export default function LisbonDestinationPage() {
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
              Lisbon for digital nomads, sunshine and coastal city living
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Lisbon combines sunshine, coastal living, café culture, remote
              work communities and European city energy, making it one of the
              world’s most popular digital nomad destinations.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Lisbon fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Lisbon is ideal for travellers looking for sunshine without
              leaving Europe too far behind. It combines warm weather, ocean
              access, historic streets, café culture and a growing international
              remote work community.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For digital nomads, students, graduates and long-stay travellers,
              Lisbon offers a balance between productivity and lifestyle. You
              can work from cafés during the day, explore viewpoints and food
              spots in the evening, and still access beaches within a short
              journey.
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
              Best areas to stay in Lisbon
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
            Who Lisbon is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomads
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Lisbon has strong coworking infrastructure, cafés, networking
                opportunities and an international remote work community.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                City-break travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Lisbon works well for travellers wanting sunshine, culture,
                food, nightlife and a relaxed coastal atmosphere within Europe.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Long-stay travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                The slower pace, café culture and access to beaches make Lisbon
                attractive for people wanting to stay abroad for longer periods.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Lisbon lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Lisbon can offer a strong balance between lifestyle and cost,
                although prices have risen in recent years due to tourism and
                remote work demand. Costs vary depending on neighbourhood,
                accommodation type and travel season.
              </p>

              <p>
                For Kuafu travellers, Lisbon stands out because it blends
                European convenience with a more relaxed sunshine lifestyle. The
                city feels social, creative and highly walkable while still
                offering beach access and remote work infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Lisbon FAQs</h2>

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
    href="/destinations/barcelona"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Barcelona Travel Guide →
  </Link>

  <Link
    href="/destinations/mexico"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Mexico Travel Guide →
  </Link>

  <Link
    href="/guides/best-countries-for-digital-nomads"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Best Countries for Digital Nomads →
  </Link>

  <Link
    href="/guides/cheap-summer-destinations-europe"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Cheap Summer Destinations in Europe →
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