import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cheap Summer Destinations in Europe | Kuafu",
  description:
    "Discover affordable summer destinations in Europe including Portugal, Spain, Croatia and Budapest. Explore cheap sunny getaways for UK travellers.",
};

const destinations = [
  {
    name: "Portugal",
    image: "/images/guides/cheap-summer/portugal.jpg",
    budget: "£50–£90/day",
    bestFor: "Beach towns and affordable coastal living",
    places: "Lisbon, Porto, Algarve",
    text: "Portugal remains one of Europe’s best-value summer destinations thanks to affordable food, accommodation and beautiful beaches.",
  },
  {
    name: "Spain",
    image: "/images/guides/cheap-summer/spain.jpg",
    budget: "£60–£110/day",
    bestFor: "Sunny city breaks and beach holidays",
    places: "Barcelona, Valencia, Malaga",
    text: "Spain combines sunshine, nightlife, beaches and excellent food with relatively affordable travel costs outside peak resort areas.",
  },
  {
    name: "Croatia",
    image: "/images/guides/cheap-summer/croatia.jpg",
    budget: "£50–£100/day",
    bestFor: "Island hopping and coastal scenery",
    places: "Split, Dubrovnik, Hvar",
    text: "Croatia offers crystal-clear water, beautiful coastal cities and a Mediterranean feel at lower prices than Italy or France.",
  },
  {
    name: "Budapest",
    image: "/images/guides/cheap-summer/budapest.jpg",
    budget: "£40–£80/day",
    bestFor: "Cheap city breaks and nightlife",
    places: "District VII, Buda, Pest",
    text: "Budapest is one of Europe’s most affordable capitals with great nightlife, thermal baths and low-cost accommodation.",
  },
];

export default function CheapSummerDestinationsPage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
            Europe Travel Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Cheap Summer Destinations in Europe
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Discover affordable sunny destinations across Europe for beach
            holidays, city breaks and summer adventures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-lg leading-8 text-slate-700">
          Summer travel in Europe does not need to be expensive. From coastal
          Portugal to vibrant Budapest, there are still plenty of affordable
          destinations offering sunshine, beaches and culture.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          These are some of the best cheap summer destinations in Europe for UK
          travellers looking to maximise sunshine without overspending.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
              <Image
                src={destination.image}
                alt={`${destination.name} summer destination`}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-blue-900">
              {destination.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              {destination.text}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Daily budget
                </p>
                <p className="mt-1 text-slate-700">
                  {destination.budget}
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Best for
                </p>
                <p className="mt-1 text-slate-700">
                  {destination.bestFor}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Best places
                </p>
                <p className="mt-1 text-slate-700">
                  {destination.places}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              What is the cheapest summer destination in Europe?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Budapest, Portugal and parts of Croatia are among the most
              affordable summer destinations in Europe.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Which European country has the best beaches?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Portugal, Spain and Croatia are all known for excellent beaches
              and warm summer weather.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">
            Ready to plan your summer escape?
          </h2>

          <p className="mt-4 text-blue-100">
            Explore flights, hotels and sunny destinations with Kuafu.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/search"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Start searching
            </Link>

            <Link
              href="/destinations"
              className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
            >
              Explore destinations
            </Link>
          </div>

          <p className="mt-8 text-sm text-blue-100">
            Follow the light. Find your path.
          </p>
        </div>
      </section>
    </main>
  );
}