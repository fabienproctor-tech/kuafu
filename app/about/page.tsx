import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Kuafu | Chase the Sun",
  description:
    "Learn about Kuafu, a travel platform helping people find flights, stays and jobs abroad while following the sun.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          About Kuafu
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Helping travellers chase the sun
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Kuafu is inspired by the Chinese legend of Kuafu, a giant who chased
          the sun across the world. For us, that idea becomes a modern travel
          mission: helping people find places where the sun, work opportunities
          and travel experiences line up.
        </p>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          We help UK students, graduates, young professionals and flexible
          travellers discover destinations, compare flights and stays, and find
          jobs abroad. Whether you want a short sunny escape, a working holiday,
          a remote-work base or a longer route around the world, Kuafu is built
          to help you move with the seasons.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Sunny beach travel"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="Travellers exploring in the sun"
            className="h-80 w-full rounded-3xl object-cover shadow-lg"
          />
        </div>

        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">What Kuafu helps you do</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-black">Find the sun</h3>
              <p className="mt-2 text-slate-600">
                Discover destinations by season, weather and travel style.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">Plan the journey</h3>
              <p className="mt-2 text-slate-600">
                Search flights, stays and route ideas from one place.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">Work as you travel</h3>
              <p className="mt-2 text-slate-600">
                Explore remote, seasonal, hospitality and working-holiday roles.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/route-generator"
            className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
          >
            Try the Route Generator
          </Link>

          <Link
            href="/search"
            className="rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white"
          >
            Start searching
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}