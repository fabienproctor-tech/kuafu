import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const guides = [
  {
    title: "Best Countries for Digital Nomads in 2026",
    href: "/guides/best-countries-for-digital-nomads",
    category: "Work Abroad",
    description:
      "Explore sunny destinations for remote work, lifestyle and long-term travel.",
  },
  {
  title: "Cheapest Countries to Live Abroad",
  href: "/guides/cheapest-countries-to-live-abroad",
  category: "Living Abroad",
  description:
    "Compare affordable countries for long-term travel, remote work and digital nomad life.",
},
  {
    title: "Where is summer now?",
    href: "/guides/where-is-summer-now",
    category: "Seasonal Travel",
    description:
      "Follow the sun through the year and discover warm destinations.",
  },
  {
    title: "Where to travel in December from the UK",
    href: "/guides/where-to-travel-in-december-from-uk",
    category: "Winter Sun",
    description:
      "Find sunny December escapes for UK travellers, students and remote workers.",
  },
  {
    title: "Best countries to work abroad from the UK",
    href: "/guides/best-countries-to-work-abroad-uk",
    category: "Work Abroad",
    description:
      "Compare countries for working holidays, seasonal jobs and travel experience.",
  },
  {
    title: "Cheap summer destinations in Europe",
    href: "/guides/cheap-summer-destinations-europe",
    category: "Budget Travel",
    description:
      "Discover affordable sunny destinations across Europe for summer travel.",
  },
  {
  title: "January Winter Sun Destinations",
  href: "/guides/january-winter-sun-destinations",
  category: "Winter Sun",
  description:
    "Discover sunny January destinations for UK travellers, from the Canary Islands to Thailand, Bali and Australia.",
},
];

export default function GuidesPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Kuafu Guides
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Travel guides for sunny destinations and work abroad ideas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore destination guides, winter sun ideas, work abroad routes
              and digital nomad inspiration built for UK travellers.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  {guide.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-blue-900">
                  {guide.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <p className="mt-5 font-semibold text-blue-900">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              What to explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
              Find the guide that fits your next move
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Winter sun
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Escape colder UK months with sunny destinations across Europe,
                  Asia and Australia.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Work abroad
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Compare destinations for seasonal jobs, working holidays and
                  longer-term travel.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Digital nomads
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Discover remote work destinations with sunshine, cafés,
                  coworking spaces and lifestyle appeal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Ready to find your next sunny destination?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Use Kuafu to search travel options, explore destinations and plan
              work abroad routes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/search"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Start searching
              </Link>

              <Link
                href="/route-generator"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Plan a route
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}