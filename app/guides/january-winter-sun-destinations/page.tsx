import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "January Winter Sun Destinations | Kuafu",
  description:
    "Discover the best January winter sun destinations for UK travellers including Thailand, Bali, Dubai, Australia and Cape Town.",
};

const destinations = [
  {
    name: "Canary Islands, Spain",
    image: "/images/guides/january-winter-sun/canary-islands.jpg",
    temperature: "18°C – 24°C",
    bestFor: "Short-haul winter sun",
    flight: "4–5 hours from the UK",
    text: "The Canary Islands are one of the easiest winter sun escapes from the UK, offering warm weather, beaches and affordable winter travel.",
  },
  {
    name: "Dubai, UAE",
    image: "/images/guides/january-winter-sun/dubai.jpg",
    temperature: "20°C – 27°C",
    bestFor: "Luxury travel and sunshine",
    flight: "7 hours from the UK",
    text: "Dubai is ideal in January thanks to warm temperatures, rooftop dining, beaches and strong work abroad opportunities.",
  },
  {
    name: "Thailand",
    image: "/images/guides/january-winter-sun/thailand.jpg",
    temperature: "25°C – 32°C",
    bestFor: "Budget travel and adventure",
    flight: "11–13 hours from the UK",
    text: "Thailand remains one of the best long-haul winter sun destinations thanks to affordable travel, tropical islands and vibrant cities.",
  },
  {
    name: "Bali, Indonesia",
    image: "/images/guides/january-winter-sun/bali.jpg",
    temperature: "26°C – 31°C",
    bestFor: "Remote work and long stays",
    flight: "16–18 hours from the UK",
    text: "Bali offers warm weather year-round and is popular with digital nomads, remote workers and travellers seeking tropical scenery.",
  },
  {
    name: "Sydney, Australia",
    image: "/images/guides/january-winter-sun/australia.jpg",
    temperature: "22°C – 30°C",
    bestFor: "Working holidays and summer lifestyle",
    flight: "20+ hours from the UK",
    text: "January is peak summer in Australia, making Sydney perfect for beaches, outdoor living and working holiday adventures.",
  },
  {
    name: "Cape Town, South Africa",
    image: "/images/guides/january-winter-sun/cape-town.jpg",
    temperature: "20°C – 29°C",
    bestFor: "Scenery and outdoor travel",
    flight: "11–12 hours from the UK",
    text: "Cape Town combines beaches, mountains, vineyards and warm summer weather, making it one of the best January destinations.",
  },
];

export default function JanuaryWinterSunPage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
            Winter Sun Guide
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            January Winter Sun Destinations
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Escape the UK winter and discover warm destinations perfect for
            beaches, remote work, adventure and working holidays.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-lg leading-8 text-slate-700">
          January is one of the best months to travel if you want sunshine while
          the UK is cold and dark. Whether you want a short-haul escape or a
          long-haul adventure, these destinations offer warm weather and strong
          travel experiences.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          From tropical beaches in Thailand to summer in Australia, these are
          some of the best January winter sun destinations for UK travellers.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
        {destinations.map((destination, index) => (
          <article
            key={destination.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
              <Image
                src={destination.image}
                alt={`${destination.name} winter sun destination`}
                fill
                priority={index === 0}
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
                  Temperature
                </p>
                <p className="mt-1 text-slate-700">
                  {destination.temperature}
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
                  Flight time
                </p>
                <p className="mt-1 text-slate-700">
                  {destination.flight}
                </p>
              </div>
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
                <th className="p-4">Destination</th>
                <th className="p-4">Temperature</th>
                <th className="p-4">Best For</th>
              </tr>
            </thead>

            <tbody>
              {destinations.map((destination) => (
                <tr key={destination.name} className="border-t">
                  <td className="p-4 font-semibold">
                    {destination.name}
                  </td>
                  <td className="p-4">
                    {destination.temperature}
                  </td>
                  <td className="p-4">
                    {destination.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is hot in January from the UK?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Popular January winter sun destinations include Thailand, Dubai,
              Bali, Australia, Cape Town and the Canary Islands.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              What is the warmest place in Europe in January?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              The Canary Islands are among the warmest European destinations in
              January and are popular for winter sun holidays.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is cheapest for winter sun?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Thailand and Bali are often among the most affordable long-haul
              winter sun destinations for UK travellers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Which January destinations are best for remote work?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Bali, Thailand and Dubai are popular with remote workers due to
              warm weather, coworking spaces and long-stay infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">
            Ready to escape the winter?
          </h2>

          <p className="mt-4 text-blue-100">
            Explore flights, hotels and work abroad opportunities with Kuafu.
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