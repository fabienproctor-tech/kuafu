import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Kuafu | Follow the Light",
  description:
    "Learn about Kuafu, a travel and work abroad platform helping UK travellers discover sunny destinations, route ideas and work abroad opportunities.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              About Kuafu
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Helping travellers follow the light
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Kuafu is a travel + work abroad platform built for UK students,
              young professionals, remote workers and anyone chasing a sunnier
              path.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-lg leading-8 text-slate-700">
                Kuafu is inspired by the Chinese legend of Kuafu, a giant who
                chased the sun across the world. For us, that idea becomes a
                modern travel mission: helping people discover places where the
                sun, work opportunities and travel experiences line up.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Whether you want a short sunny escape, a working holiday, a
                remote-work base or a longer route around the world, Kuafu is
                built to help you move with the seasons.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src="/kuafu-logo.png"
                alt="Kuafu logo"
                className="mx-auto h-48 w-auto"
              />

              <p className="mt-6 text-center text-sm font-semibold text-blue-900">
                Follow the light. Find your path.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              What Kuafu helps you do
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
              Travel smarter, stay longer and explore more
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Find the sun
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Discover destinations by season, weather, lifestyle and travel
                  style.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Plan the journey
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Search flights, hotels, route ideas and destination guides
                  from one place.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Work as you travel
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Explore remote work, seasonal roles, hospitality jobs and
                  working-holiday opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Sunny beach travel"
              className="h-80 w-full rounded-3xl object-cover shadow-sm"
            />

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Travellers exploring in the sun"
              className="h-80 w-full rounded-3xl object-cover shadow-sm"
            />
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Ready to start your next chapter?
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
                Try Route Generator
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}