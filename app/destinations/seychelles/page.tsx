import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seychelles Travel Guide for Paradise Escapes & Winter Sun | Kuafu",
  description:
    "Explore Seychelles as a tropical island destination for winter sun, luxury escapes, beaches and slow travel, including best islands, lifestyle and travel tips.",
};

const areas = [
  {
    name: "Mahé",
    description:
      "Best for resorts, beaches, hiking, restaurants and the main international airport.",
  },
  {
    name: "Praslin",
    description:
      "Best for slower island living, nature, luxury beaches and relaxed tropical travel.",
  },
  {
    name: "La Digue",
    description:
      "Best for iconic beaches, cycling, quiet island life and cinematic scenery.",
  },
  {
    name: "Beau Vallon",
    description:
      "Best for beach hotels, sunsets, swimming and a more social atmosphere.",
  },
];

const quickFacts = [
  ["Best for", "Luxury escapes, beaches, winter sun"],
  ["Typical vibe", "Relaxed, tropical, cinematic, exclusive"],
  ["Budget level", "High"],
  ["Best season", "April to October"],
  ["Travel style", "Slow travel, resorts and island hopping"],
];

const faqs = [
  {
    question: "Is Seychelles good for winter sun?",
    answer:
      "Yes. Seychelles is one of the world’s best winter sun destinations thanks to its warm tropical climate, beaches and Indian Ocean island scenery.",
  },
  {
    question: "Is Seychelles expensive?",
    answer:
      "Seychelles is generally considered a premium destination, especially for resorts and beachfront accommodation, although some guesthouse and apartment options are available.",
  },
  {
    question: "Which island is best in Seychelles?",
    answer:
      "Mahé is best for convenience and resorts, Praslin is ideal for relaxed luxury and beaches, while La Digue is famous for slower island living and iconic scenery.",
  },
];

export default function SeychellesDestinationPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-cyan-900 via-blue-900 to-orange-400 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-100">
              Destination Guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Seychelles for paradise escapes, winter sun and island freedom
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
              Seychelles is one of the world’s most cinematic tropical
              destinations, known for white-sand beaches, turquoise water,
              granite rock coastlines and slow island living.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Why Seychelles fits the Kuafu lifestyle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Seychelles represents the ultimate “follow the light” destination.
              It is less about fast travel and more about slowing down,
              disconnecting and experiencing sunshine, nature and island life at
              a calmer pace.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              For Kuafu travellers, Seychelles is aspirational. It blends
              tropical beaches, luxury resorts, island hopping and cinematic
              scenery into one of the most visually beautiful destinations in
              the world.
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
              Best places to stay in Seychelles
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
            Who Seychelles is best for
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Winter sun travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Seychelles is ideal for escaping colder months and replacing
                them with sunshine, beaches and tropical island scenery.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Luxury travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                The islands are known for premium resorts, private beaches,
                villas and some of the most beautiful coastal scenery in the
                world.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                Slow travellers
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Seychelles suits travellers looking to disconnect, slow down and
                focus on nature, beaches and island living rather than busy city
                travel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Seychelles lifestyle and cost
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 leading-8 text-slate-700">
              <p>
                Seychelles is generally positioned as a premium travel
                destination. Resorts, beachfront hotels and island transfers can
                be expensive, especially during peak travel seasons.
              </p>

              <p>
                For Kuafu travellers, Seychelles is less about budget travel and
                more about aspirational lifestyle travel. It represents freedom,
                tropical beauty and the idea of escaping routine for somewhere
                visually extraordinary.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950">
            Seychelles FAQs
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
                href="/guides/january-winter-sun-destinations"
                className="rounded-2xl bg-white/10 p-5 hover:bg-white/15"
              >
                January Winter Sun Destinations →
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