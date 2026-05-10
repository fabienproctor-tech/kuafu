import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best eSIM for Travel | Kuafu",
  description:
    "Compare the best eSIM options for travel, digital nomads, backpackers and long-term travellers. Learn how eSIMs work and when to use them.",
};

const providers = [
  {
    name: "Airalo",
    image: "/images/guides/esim-travel/phone-abroad.jpg",
    bestFor: "Affordable regional and country plans",
    coverage: "Wide global coverage",
    data: "Mostly fixed data plans",
    text: "Airalo is one of the most well-known travel eSIM providers and is useful for travellers who want simple country or regional data plans.",
  },
  {
    name: "Holafly",
    image: "/images/guides/esim-travel/airport-lounge.jpg",
    bestFor: "Unlimited data options",
    coverage: "Popular travel destinations",
    data: "Often unlimited data plans",
    text: "Holafly is popular with travellers who want simple unlimited data options for selected destinations without worrying about running out of data.",
  },
  {
    name: "Nomad",
    image: "/images/guides/esim-travel/remote-worker-cafe.jpg",
    bestFor: "Flexible travel data plans",
    coverage: "Many major destinations",
    data: "Fixed and regional plans",
    text: "Nomad offers a range of eSIM plans for frequent travellers, including country-specific and regional options.",
  },
  {
    name: "Ubigi",
    image: "/images/guides/esim-travel/traveller-maps.jpg",
    bestFor: "Frequent travellers and connected devices",
    coverage: "International coverage",
    data: "Fixed data packages",
    text: "Ubigi is another option for travellers who want data connectivity across multiple countries and devices.",
  },
];

export default function BestEsimForTravelPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Travel Essentials
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Best eSIM for Travel
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Compare travel eSIM options for holidays, backpacking, digital
              nomad life and long-term travel abroad.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-lg leading-8 text-slate-700">
            Staying connected while travelling is now one of the most important
            parts of planning a trip. An eSIM can help you avoid expensive
            roaming charges, access maps, book transport, message friends and
            work remotely while abroad.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The best eSIM for travel depends on where you are going, how much
            data you need and whether you prefer cheaper fixed-data plans or
            simpler unlimited-data options.
          </p>
        </section>

        <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
          {providers.map((provider, index) => (
            <article
              key={provider.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
                <Image
                  src={provider.image}
                  alt={`${provider.name} travel eSIM option`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                {provider.name}
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                {provider.text}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Best for
                  </p>
                  <p className="mt-1 text-slate-700">{provider.bestFor}</p>
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Coverage
                  </p>
                  <p className="mt-1 text-slate-700">{provider.coverage}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Data style
                  </p>
                  <p className="mt-1 text-slate-700">{provider.data}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            eSIM comparison
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4">Provider</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4">Data Style</th>
                </tr>
              </thead>

              <tbody>
                {providers.map((provider) => (
                  <tr key={provider.name} className="border-t">
                    <td className="p-4 font-semibold">{provider.name}</td>
                    <td className="p-4">{provider.bestFor}</td>
                    <td className="p-4">{provider.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            What is an eSIM?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            An eSIM is a digital SIM that lets you activate a mobile data plan
            without needing a physical SIM card. Many modern phones support
            eSIMs, making them useful for travellers who want quick access to
            mobile data abroad.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Before buying an eSIM, always check that your phone is unlocked and
            eSIM-compatible.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Is an eSIM better than roaming?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                An eSIM can often be cheaper than international roaming,
                especially for travellers using lots of mobile data abroad.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Which eSIM is best for Europe?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Airalo, Holafly, Nomad and Ubigi all offer Europe-focused plans,
                but the best choice depends on your data needs and trip length.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can digital nomads use eSIMs?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Yes. eSIMs are useful for digital nomads who move between
                countries and need quick mobile data access when arriving in a
                new destination.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Related guides</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/best-countries-for-digital-nomads"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best Countries for Digital Nomads
              </h3>
              <p className="mt-3 text-slate-600">
                Explore remote work destinations.
              </p>
            </Link>

            <Link
              href="/guides/cheapest-countries-to-live-abroad"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Cheapest Countries to Live Abroad
              </h3>
              <p className="mt-3 text-slate-600">
                Compare affordable long-term destinations.
              </p>
            </Link>

            <Link
              href="/guides/working-holiday-visas-explained"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Working Holiday Visas Explained
              </h3>
              <p className="mt-3 text-slate-600">
                Learn how to work and travel abroad.
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-blue-900 px-6 py-14 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">
              Ready to plan your connected trip?
            </h2>

            <p className="mt-4 text-blue-100">
              Explore destinations, travel options and work abroad ideas with
              Kuafu.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/search"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Start searching
              </Link>

              <Link
                href="/guides"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Explore guides
              </Link>
            </div>

            <p className="mt-8 text-sm text-blue-100">
              Follow the light. Find your path.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}