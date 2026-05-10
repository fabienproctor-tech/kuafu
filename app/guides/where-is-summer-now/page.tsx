import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Where Is Summer Now? | Kuafu Travel Guide",
  description:
    "Discover where summer is happening now, including Europe, the Canary Islands, Thailand, Bali and Australia. Find sunny destinations for travel, remote work and work abroad.",
};

const seasons = [
  {
    name: "June to August",
    image: "/images/guides/where-is-summer-now/europe-summer.jpg",
    bestFor: "European beach trips and classic summer holidays",
    destinations: "Portugal, Spain, Croatia, Greece, France, Italy",
    text: "Europe is ideal during the UK summer months, with warm weather, beach towns, festivals and easy short-haul flights.",
  },
  {
    name: "September to November",
    image: "/images/guides/where-is-summer-now/canary-islands.jpg",
    bestFor: "Late sunshine and quieter escapes",
    destinations: "Canary Islands, Morocco, Dubai, Southern Spain",
    text: "As Europe cools down, the Canary Islands and nearby warm destinations become great options for autumn sun.",
  },
  {
    name: "December to February",
    image: "/images/guides/where-is-summer-now/thailand.jpg",
    bestFor: "Winter sun and long-haul adventures",
    destinations: "Thailand, Bali, Australia, South Africa",
    text: "For winter sun, look further afield. Tropical destinations and southern hemisphere countries offer warmth while the UK is cold.",
  },
  {
    name: "March to May",
    image: "/images/guides/where-is-summer-now/bali.jpg",
    bestFor: "Spring escapes before peak summer prices",
    destinations: "Portugal, Spain, Greece, Turkey, Bali",
    text: "Spring is a useful time to travel before peak prices arrive, with Mediterranean destinations warming up and tropical options still appealing.",
  },
];

export default function WhereIsSummerNowPage() {
  return (
  <>
    <Header />
    <main className="bg-white text-slate-800">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
            Seasonal Travel Guide
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Where is summer now?
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Follow the sun through the year and discover warm destinations for
            travel, remote work and work abroad adventures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-lg leading-8 text-slate-700">
          If you are travelling from the UK and want to find sunshine, the best
          destinations depend on the time of year. Some months are perfect for
          Europe, while others are better for long-haul winter sun.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Kuafu helps you think beyond a normal holiday by combining sunny
          destinations with flights, hotels and work abroad opportunities.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
        {seasons.map((season, index) => (
          <article
            key={season.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
              <Image
  src={season.image}
  alt={`${season.name} sunny travel destinations`}
  fill
  sizes="(max-width: 768px) 100vw, 1200px"
  priority={index === 0}
  className="object-cover"
/>
            </div>

            <h2 className="text-2xl font-bold text-blue-900">
              {season.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-700">{season.text}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Best for</p>
                <p className="mt-1 text-slate-700">{season.bestFor}</p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-blue-900">
                  Destination ideas
                </p>
                <p className="mt-1 text-slate-700">{season.destinations}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <h2 className="text-3xl font-bold text-blue-900">
          How Kuafu helps you follow the sun
        </h2>

        <p className="mt-4 leading-7 text-slate-700">
          Instead of only searching for a short holiday, Kuafu brings together
          destination ideas, flight search, hotel search and work abroad links.
          This makes it useful for students, graduates, remote workers and young
          professionals who want to travel for longer.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/route-generator"
            className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            Try the route generator
          </Link>

          <Link
            href="/search"
            className="rounded-full bg-blue-900 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Start searching
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is the best place for summer in December?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              Popular winter sun options for UK travellers include Australia,
              Thailand, Bali, South Africa and the Canary Islands.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Where is hot in Europe outside summer?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              The Canary Islands, southern Spain, Portugal and parts of Greece
              can offer warmer weather outside the main summer season.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Can I work while travelling?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              It depends on the country, visa rules and your type of work. You
              should always check local work rights before applying for work
              abroad opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Is Kuafu only for students?
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              No. Kuafu is designed for UK students and young professionals
              first, but it can also help remote workers, gap year travellers
              and anyone looking for sun-led travel ideas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
  <h2 className="text-3xl font-bold text-blue-900">
    Related guides
  </h2>

  <div className="mt-6 grid gap-6 md:grid-cols-3">
    <Link
      href="/guides/best-countries-for-digital-nomads"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-blue-900">
        Best Countries for Digital Nomads
      </h3>
      <p className="mt-3 text-slate-600">
        Explore sunny remote-work destinations.
      </p>
    </Link>

    <Link
      href="/guides/where-is-summer-now"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-blue-900">
        Where is summer now?
      </h3>
      <p className="mt-3 text-slate-600">
        Follow the sun throughout the year.
      </p>
    </Link>

    <Link
      href="/guides/best-countries-to-work-abroad-uk"
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold text-blue-900">
        Best Countries to Work Abroad
      </h3>
      <p className="mt-3 text-slate-600">
        Compare work abroad destinations.
      </p>
    </Link>
  </div>
</section>

      <section className="bg-blue-900 px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">
            Ready to find your next sunny destination?
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