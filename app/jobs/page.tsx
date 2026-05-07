import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Jobs Abroad for UK Travellers | Kuafu",
  description:
    "Explore remote work, seasonal jobs, hospitality roles and internships abroad for UK students, graduates and young professionals.",
};

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Jobs Abroad
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Find work that helps fund the journey
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Kuafu helps UK students, graduates and young professionals discover
          work opportunities that fit around travel. Search for remote roles,
          seasonal jobs, hospitality work, internships and working-holiday
          opportunities abroad.
        </p>

        <div className="mt-8">
          <Link
            href="/search"
            className="inline-block rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
          >
            Search jobs abroad
          </Link>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Remote Work</h2>
            <p className="mt-3 text-slate-600">
              Best for travellers who want flexibility. Look for digital
              marketing, admin, customer support, freelance, content and tech
              roles that can be done online.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Best for: Digital nomads, students, graduates and freelancers.
            </p>
            <Link
              href="/search?destination=Lisbon"
              className="mt-5 inline-block rounded-2xl border px-5 py-3 font-bold hover:bg-blue-50"
            >
              Search remote jobs
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Seasonal Jobs</h2>
            <p className="mt-3 text-slate-600">
              Seasonal jobs are ideal for summer travel. Common options include
              resorts, campsites, events, tour operators, hostels and activity
              companies.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Best for: Summer breaks, gap years and short-term travel.
            </p>
            <Link
              href="/search?destination=Barcelona"
              className="mt-5 inline-block rounded-2xl border px-5 py-3 font-bold hover:bg-blue-50"
            >
              Search seasonal jobs
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Hospitality</h2>
            <p className="mt-3 text-slate-600">
              Hospitality can be one of the easiest ways to work while travelling.
              Search for roles in hotels, bars, cafés, restaurants, hostels and
              tourist destinations.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Best for: Social travellers and people who want destination-based work.
            </p>
            <Link
              href="/search?destination=Split"
              className="mt-5 inline-block rounded-2xl border px-5 py-3 font-bold hover:bg-blue-50"
            >
              Search hospitality jobs
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Internships</h2>
            <p className="mt-3 text-slate-600">
              Internships can help students and graduates gain international
              experience while building a CV. Look for marketing, finance,
              business, tourism and operations placements.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Best for: Students, graduates and early-career professionals.
            </p>
            <Link
              href="/search?destination=London"
              className="mt-5 inline-block rounded-2xl border px-5 py-3 font-bold hover:bg-blue-50"
            >
              Search internships
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">Tips for better job search results</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-black">Use city names</h3>
              <p className="mt-2 text-slate-600">
                Job searches usually work best with cities such as Lisbon,
                Barcelona, Sydney or Dubai rather than broad country names.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">Check visa rules</h3>
              <p className="mt-2 text-slate-600">
                Always check official visa and work-rights guidance before
                applying for jobs abroad.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">Plan around seasons</h3>
              <p className="mt-2 text-slate-600">
                Hospitality and tourism roles are often strongest before and
                during peak travel seasons.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
          <h2 className="text-3xl font-black">
            Want to work and travel in the sun?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-300">
            Use the route generator to find sunny destinations, then search for
            flights, stays and job opportunities in one place.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
            >
              Try the Route Generator
            </Link>

            <Link
              href="/search"
              className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-950"
            >
              Start searching
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}