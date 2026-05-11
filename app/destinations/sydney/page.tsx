import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sydney Travel Guide for Working Holidays & Sun Seekers | Kuafu",
  description:
    "Explore Sydney as a destination for working holidays, beach lifestyle, city travel and long-term adventures abroad, including lifestyle, best areas, cost and travel tips.",
};

const areas = [
  {
    name: "Bondi",
    description:
      "Best for beach lifestyle, surfing, cafés, fitness culture and backpacker energy.",
  },
  {
    name: "Surry Hills",
    description:
      "Best for cafés, nightlife, creative culture, coworking and city living.",
  },
  {
    name: "Manly",
    description:
      "Best for relaxed coastal living, beaches, ferries and outdoor lifestyle.",
  },
  {
    name: "CBD",
    description:
      "Best for work opportunities, transport links, shopping and central convenience.",
  },
];

const quickFacts = [
  ["Best for", "Working holidays, beaches, city lifestyle"],
  ["Typical vibe", "Sunny, social, outdoorsy, energetic"],
  ["Budget level", "High"],
  ["Best season", "September to April"],
  ["Work abroad scene", "Very strong for working holiday travellers"],
];

const faqs = [
  {
    question: "Is Sydney good for working holidays?",
    answer:
      "Yes. Sydney is one of the world’s most popular working holiday destinations thanks to its beaches, lifestyle, job opportunities and strong backpacker community.",
  },
  {
    question: "Is Sydney expensive?",
    answer:
      "Sydney is generally considered one of the more expensive working holiday destinations, especially for rent and accommodation in central or coastal areas.",
  },
  {
    question: "When is the best time to visit Sydney?",
    answer:
      "Sydney is especially popular from spring through autumn, with warm weather, beach culture and outdoor living being major parts of the lifestyle.",
  },
];

export default function SydneyDestinationPage() {
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
              Sydney for working holidays, beaches and sunshine lifestyle
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Sydney combines beaches, sunshine, city energy and work abroad
              opportunities, making it one of the most iconic long-term travel
              destinations for UK travellers.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Sydney fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Sydney represents the classic “move abroad for a better lifestyle”
              dream for many travellers. It combines beaches, warm weather,
              outdoor living, cafés, work opportunities and a highly social
              atmosphere.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For students, graduates and working holiday travellers, Sydney can
              feel like a major life chapter rather than just a trip. The city
              gives you the chance to work, travel, meet people and build
              independence while living close to beaches and sunshine.
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
              Best areas to stay in Sydney
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
            Who Sydney is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Working holiday travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Sydney is ideal for UK travellers looking to work abroad while
                experiencing beaches, city life and long-term travel freedom.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Beach lifestyle travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Bondi, Manly and Sydney’s coastal suburbs make the city perfect
                for people who want sunshine, beaches, cafés and outdoor living.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Long-term travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Sydney works well for travellers wanting to combine work,
                independence, travel and social experiences over a longer period
                abroad.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Sydney lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Sydney is generally one of the more expensive working holiday
                destinations, especially when it comes to rent, accommodation
                and eating out. However, salaries and work opportunities can
                help balance the higher cost of living.
              </p>

              <p>
                For Kuafu travellers, Sydney stands out because of its lifestyle
                quality. The city combines beaches, weather, cafés, fitness
                culture, transport links and work opportunities in a way that
                feels highly aspirational and freedom-focused.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">Sydney FAQs</h2>

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
    href="/destinations/japan"
    className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
  >
    Japan Travel Guide →
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