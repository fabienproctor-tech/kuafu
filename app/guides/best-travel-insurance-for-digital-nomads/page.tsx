import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Travel Insurance for Digital Nomads in 2026 | Kuafu",
  description:
    "Compare travel insurance options for digital nomads, remote workers and long-term travellers including SafetyWing, World Nomads, Genki and Heymondo.",
};

const insurers = [
  {
    name: "SafetyWing",
    image: "/images/guides/travel-insurance/digital-nomad-laptop.jpg",
    bestFor: "Digital nomads and long-term travellers",
    travelStyle: "Monthly, flexible travel cover",
    strengths:
      "Good for ongoing travel and remote workers moving between countries.",
    limitations:
      "Cover details can vary, so always check exclusions, medical limits and destination rules before buying.",
    text: "SafetyWing is often considered by digital nomads because it is built around flexible, longer-term travel rather than traditional short holidays.",
  },
  {
    name: "World Nomads",
    image: "/images/guides/travel-insurance/backpacker-airport.jpg",
    bestFor: "Adventure travel and backpacking",
    travelStyle: "Trip-based travel insurance",
    strengths:
      "Useful for travellers planning activities, backpacking routes and adventure-style trips.",
    limitations:
      "May not be the cheapest option for every long-term traveller, so compare against your exact trip needs.",
    text: "World Nomads is well known in the travel space and is often associated with backpackers and adventure travellers.",
  },
  {
    name: "Genki",
    image: "/images/guides/travel-insurance/beach-workspace.jpg",
    bestFor: "Remote workers and modern digital nomads",
    travelStyle: "Health-focused international cover",
    strengths:
      "Designed with globally mobile travellers and remote workers in mind.",
    limitations:
      "Check whether it fits your destination, trip length and medical needs before relying on it.",
    text: "Genki is a newer-style option aimed at people living and working internationally for longer periods.",
  },
  {
    name: "Heymondo",
    image: "/images/guides/travel-insurance/travel-documents.jpg",
    bestFor: "Short to medium trips",
    travelStyle: "Flexible travel insurance plans",
    strengths:
      "Good for travellers who want app-based support and straightforward travel cover.",
    limitations:
      "May be better suited to defined trips than fully open-ended nomad lifestyles.",
    text: "Heymondo can be useful for travellers looking for flexible cover for holidays, backpacking trips and medium-term travel.",
  },
];

export default function BestTravelInsuranceForDigitalNomadsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Travel Insurance Guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Best Travel Insurance for Digital Nomads
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Compare travel insurance options for remote workers, long-term
              travellers and digital nomads planning life abroad.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-lg leading-8 text-slate-700">
            Travel insurance is one of the most important things to consider
            before working remotely or living abroad. It can help protect you
            against unexpected medical costs, travel disruption, lost belongings
            and other problems while you are away from home.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Digital nomads often need more flexibility than a normal holiday
            insurance policy, especially if they are travelling for months,
            moving between countries or working while abroad.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="relative h-72 overflow-hidden rounded-3xl md:h-[450px]">
            <Image
              src="/images/guides/travel-insurance/airport-traveller.jpg"
              alt="Digital nomad traveller at an airport"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
          {insurers.map((insurer) => (
            <article
              key={insurer.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
                <Image
                  src={insurer.image}
                  alt={`${insurer.name} travel insurance for digital nomads`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                {insurer.name}
              </h2>

              <p className="mt-4 leading-7 text-slate-700">{insurer.text}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Best for
                  </p>
                  <p className="mt-1 text-slate-700">{insurer.bestFor}</p>
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Travel style
                  </p>
                  <p className="mt-1 text-slate-700">
                    {insurer.travelStyle}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Strengths
                  </p>
                  <p className="mt-1 text-slate-700">{insurer.strengths}</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Check before buying
                </p>
                <p className="mt-1 text-slate-700">{insurer.limitations}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Quick comparison
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4">Provider</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4">Travel Style</th>
                </tr>
              </thead>

              <tbody>
                {insurers.map((insurer) => (
                  <tr key={insurer.name} className="border-t">
                    <td className="p-4 font-semibold">{insurer.name}</td>
                    <td className="p-4">{insurer.bestFor}</td>
                    <td className="p-4">{insurer.travelStyle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            What should digital nomads look for?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">Medical cover</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Check emergency medical limits, exclusions and whether your
                destination is covered.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="font-bold text-blue-900">Trip length</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Some policies are better for short trips, while others suit
                longer or open-ended travel.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-blue-900">Remote work equipment</h3>
              <p className="mt-2 leading-7 text-slate-700">
                If you travel with a laptop, camera or phone, check baggage and
                electronics cover carefully.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">Activities</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Adventure sports, scooter riding and hiking may require extra
                cover depending on the policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Do digital nomads need travel insurance?
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Yes, travel insurance is strongly worth considering for digital
                nomads because long-term travel can involve medical risks,
                cancelled transport, lost belongings and unexpected emergencies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                What is the best insurance for long-term travel?
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                The best option depends on your destination, trip length, budget,
                health needs and whether you need cover while already abroad.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can you get travel insurance while already abroad?
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Some providers may allow this, but rules vary. Always check the
                policy wording before assuming you can buy cover after leaving
                your home country.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Does travel insurance cover laptops?
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Some policies include baggage or electronics cover, but limits
                and exclusions vary. Digital nomads should check this carefully
                before travelling with expensive equipment.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Related guides</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/best-esim-for-travel"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best eSIM for Travel
              </h3>
              <p className="mt-3 text-slate-600">
                Stay connected while travelling abroad.
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
          </div>
        </section>

        <section className="bg-blue-900 px-6 py-14 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">Ready to travel smarter?</h2>

            <p className="mt-4 text-blue-100">
              Explore destinations, travel essentials and work abroad ideas with
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