import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
                Travel + Work Abroad Platform
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Follow the light. Find your path.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Discover sunny destinations, search travel options and explore
                work abroad opportunities for students, young professionals and
                digital nomads.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/search"
                  className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:bg-orange-600"
                >
                  Start searching
                </Link>

                <Link
                  href="/guides"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  Explore guides
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur">
              <img
                src="/kuafu-logo.png"
                alt="Kuafu - Chasing the Sun"
                className="mx-auto h-48 w-auto"
              />

              <p className="mt-6 text-center text-blue-100">
                Travel inspiration, work abroad ideas and route planning in one
                place.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Discover sunny destinations
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Find places with better weather, stronger lifestyle appeal and
                travel potential throughout the year.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Explore work abroad
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Compare destinations for working holidays, seasonal jobs, remote
                work and digital nomad lifestyles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Plan your route
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Build inspiration-led routes around flights, hotels, guides and
                work abroad opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  Start exploring
                </p>
                <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
                  Popular Kuafu guides
                </h2>
              </div>

              <Link
                href="/guides"
                className="font-semibold text-blue-900 hover:text-orange-500"
              >
                View all guides →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Link
                href="/guides/where-is-summer-now"
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900">
                  Where is summer now?
                </h3>
                <p className="mt-3 text-slate-600">
                  Follow the sun through the year and find warm destinations.
                </p>
              </Link>

              <Link
                href="/guides/best-countries-for-digital-nomads"
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900">
                  Best countries for digital nomads
                </h3>
                <p className="mt-3 text-slate-600">
                  Explore remote work destinations with lifestyle appeal.
                </p>
              </Link>

              <Link
                href="/guides/where-to-travel-in-december-from-uk"
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900">
                  December winter sun
                </h3>
                <p className="mt-3 text-slate-600">
                  Find sunny December destinations from the UK.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Ready to plan your next chapter?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Search travel, explore destinations and discover work abroad ideas
              with Kuafu.
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