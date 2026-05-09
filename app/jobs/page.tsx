import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Work Abroad for UK Travellers | Kuafu",
  description:
    "Explore work abroad opportunities, seasonal roles, hospitality jobs, internships and travel programmes for UK students, graduates and young professionals.",
};

const jobs = [
  {
    title: "Remote Work",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Work remotely while travelling the world. Popular roles include digital marketing, customer support, design, writing and tech.",
    bestFor: "Digital nomads and long-term travellers",
    locations: "Lisbon, Bali, Thailand",
    search: "Lisbon",
  },
  {
    title: "Seasonal Jobs",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Seasonal roles are ideal for summer travel and gap years, especially in tourism, events and resort destinations.",
    bestFor: "Gap years and short-term travel",
    locations: "Barcelona, Greece, Croatia",
    search: "Barcelona",
  },
  {
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hospitality is one of the easiest ways to work abroad while meeting people and exploring new destinations.",
    bestFor: "Social travellers and students",
    locations: "Sydney, Split, Dubai",
    search: "Sydney",
  },
  {
    title: "Internships",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Gain international experience through internships in business, finance, tourism, operations and marketing.",
    bestFor: "Students and graduates",
    locations: "London, Dubai, Singapore",
    search: "London",
  },
];

export default function JobsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Work Abroad
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Work abroad while you travel
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore remote work, seasonal jobs, hospitality roles and
              internships for UK travellers, students and young professionals.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/search"
                className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
              >
                Explore opportunities
              </Link>

              <Link
                href="/guides/best-countries-to-work-abroad-uk"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-blue-900 hover:bg-blue-50"
              >
                Read work abroad guide
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {job.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Best for
                      </p>

                      <p className="mt-1 text-slate-700">{job.bestFor}</p>
                    </div>

                    <div className="rounded-xl bg-orange-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Popular locations
                      </p>

                      <p className="mt-1 text-slate-700">{job.locations}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/search?destination=${job.search}`}
                      className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
                    >
                      Explore opportunities
                    </Link>

                    <Link
                      href="/destinations"
                      className="rounded-full bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                    >
                      Explore destinations
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Getting started
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
              Tips for finding work abroad opportunities
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Search by city
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Job search results usually work best when using city names
                  such as Lisbon, Sydney or Barcelona.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Check visa rules
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Always check work rights and visa requirements before applying
                  for jobs abroad.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Travel season matters
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Hospitality and tourism jobs are often easier to find before
                  peak travel seasons begin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Related guides
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-900">
                Work abroad inspiration
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
              href="/guides/best-countries-to-work-abroad-uk"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best countries to work abroad
              </h3>

              <p className="mt-3 text-slate-600">
                Explore the best destinations for UK travellers looking to work
                abroad.
              </p>
            </Link>

            <Link
              href="/guides/best-countries-for-digital-nomads"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Digital nomad destinations
              </h3>

              <p className="mt-3 text-slate-600">
                Discover destinations for remote work and longer-term travel.
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
                Follow the sun and discover warm destinations throughout the
                year.
              </p>
            </Link>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Combine work and travel with Kuafu
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Search destinations, discover opportunities and build your own
              route around the world.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/route-generator"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Try Route Generator
              </Link>

              <Link
                href="/destinations"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}