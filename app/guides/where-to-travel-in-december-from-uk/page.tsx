import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Where to Travel in December from the UK | Kuafu",
  description:
    "Discover the best sunny destinations in December for UK travellers including Australia, Bali, Thailand and the Canary Islands. Find winter sun, hotels and work abroad inspiration.",
};

const destinations = [
  {
    name: "Sydney, Australia",
    image: "/images/guides/december-travel/australia.jpg",
    bestFor: "Working holidays, beaches and long-term travel",
    weather: "Warm summer weather",
    budget: "Higher cost, but strong work opportunities",
    text: "Sydney is one of the best December destinations for UK travellers because Australia is entering summer. It is ideal for beaches, outdoor lifestyle and working holiday plans.",
    search: "Sydney",
  },
  {
    name: "Bali, Indonesia",
    image: "/images/guides/december-travel/bali.jpg",
    bestFor: "Remote work, tropical lifestyle and budget travel",
    weather: "Warm and tropical",
    budget: "Lower cost than most long-haul destinations",
    text: "Bali is a strong option for remote workers and longer trips, with warm weather, affordable living and a well-established digital nomad community.",
    search: "Bali",
  },
  {
    name: "Thailand",
    image: "/images/guides/december-travel/thailand.jpg",
    bestFor: "Backpacking, beaches and adventure",
    weather: "Warm and sunny in many regions",
    budget: "Great value for UK travellers",
    text: "Thailand offers sunshine, food, beaches and adventure at a relatively affordable price, making it one of the best winter sun destinations from the UK.",
    search: "Thailand",
  },
  {
    name: "Canary Islands, Spain",
    image: "/images/guides/december-travel/canary-islands.jpg",
    bestFor: "Short-haul winter sun",
    weather: "Mild and sunny",
    budget: "Good value compared with long-haul trips",
    text: "The Canary Islands are ideal if you want winter sun without a long-haul flight. They are one of the easiest warm-weather escapes from the UK in December.",
    search: "Canary Islands",
  },
];

export default function DecemberGuidePage() {
  return (
  <>
    <Header />
    <main className="bg-white text-slate-800">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
            Winter Sun Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Where to travel in December from the UK
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Escape the cold and discover sunny December destinations for beach
            trips, remote work, long-term travel and work abroad adventures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-lg leading-8 text-slate-700">
          December is one of the best months to leave the UK and follow the sun.
          While the UK gets colder and darker, destinations across the southern
          hemisphere and tropics are entering their warmest, brightest seasons.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Whether you want a short-haul winter sun break or a longer work abroad
          adventure, these destinations offer a strong mix of sunshine, travel
          opportunities and lifestyle.
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
                alt={`${destination.name} December travel destination`}
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
                <p className="text-sm font-semibold text-blue-900">Best for</p>
                <p className="mt-1 text-slate-700">{destination.bestFor}</p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Weather</p>
                <p className="mt-1 text-slate-700">{destination.weather}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Budget</p>
                <p className="mt-1 text-slate-700">{destination.budget}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/search?destination=${destination.search}`}
                className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
              >
                Search travel
              </Link>

              <Link
                href="/route-generator"
                className="rounded-full bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
              >
                Plan route
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <h2 className="text-3xl font-bold text-blue-900">
          Why December is a good month to travel
        </h2>

        <p className="mt-4 leading-7 text-slate-700">
          December travel is not just about holidays. For students, graduates,
          remote workers and young professionals, it can also be a chance to
          explore longer trips, working holiday routes and digital nomad
          destinations before the new year begins.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is hot in December from the UK?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Popular sunny destinations from the UK in December include
              Australia, Bali, Thailand, the Canary Islands, South Africa and
              parts of the Caribbean.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is the best place to travel in December for students?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              For students, good December options include the Canary Islands for
              shorter trips, Thailand and Bali for budget travel, and Australia
              for longer working holiday plans.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Can I work abroad in December?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              You may be able to work abroad in December depending on the
              country, visa rules and type of work. Always check local work
              rights before applying for jobs or travelling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">
            Ready to plan your December escape?
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
    <Footer />
  </>
  );
}