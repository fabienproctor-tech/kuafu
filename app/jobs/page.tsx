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
      "Work from anywhere while travelling. Popular remote jobs include digital marketing, customer support, content writing, design and tech roles.",
    bestFor: "Digital nomads and long-term travellers",
    locations: "Lisbon, Bali, Thailand",
    search: "Lisbon",
  },
  {
    title: "Seasonal Jobs",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Seasonal work is ideal for summer travel and gap years. Find opportunities in tourism, events, resorts and activity companies.",
    bestFor: "Gap years and short-term travel",
    locations: "Barcelona, Greece, Croatia",
    search: "Barcelona",
  },
  {
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hospitality is one of the easiest ways to work abroad while meeting people and experiencing new destinations.",
    bestFor: "Social travellers and students",
    locations: "Sydney, Split, Dubai",
    search: "Sydney",
  },
  {
    title: "Internships",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Build international experience through internships in business, marketing, finance, tourism and operations.",
    bestFor: "Students and graduates",
    locations: "London, Dubai, Singapore",
    search: "London",
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt="Work abroad"
          className="h-[500px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-5 text-white">
            <p className="font-black uppercase tracking-widest text-blue-300">
              Work Abroad
            </p>

            <h1 className="mt-3 max-w-3xl text-5xl font-black leading-tight">
              Work abroad while you travel
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Explore work abroad opportunities, seasonal roles, hospitality jobs,
internships and travel programmes for UK travellers, students and young
professionals.
            </p>

            <div className="mt-8">
              <Link
                href="/search"
                className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
              >
                Explore work abroad
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-black text-slate-950">
                  {job.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {job.description}
                </p>

                <div className="mt-5 space-y-2 rounded-2xl bg-blue-50 p-4 text-sm text-slate-600">
                  <p>
                    <strong>Best for:</strong> {job.bestFor}
                  </p>

                  <p>
                    <strong>Popular locations:</strong> {job.locations}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/search?destination=${job.search}`}
                    className="rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
                  >
                    Explore opportunities
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black">
            Tips for finding work abroad opportunities
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Search by city
              </h3>

              <p className="mt-3 text-slate-600">
                Job search results usually work best when using city names such
                as Lisbon, Sydney or Barcelona.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Check visa rules
              </h3>

              <p className="mt-3 text-slate-600">
                Always check work rights and visa requirements before travelling
                or applying for roles abroad.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Travel season matters
              </h3>

              <p className="mt-3 text-slate-600">
                Hospitality and tourism roles are often easier to find before
                peak travel seasons.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
          <h2 className="text-3xl font-black">
            Combine work and travel with Kuafu
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Discover sunny destinations, search for work abroad opportunities and build your
            own route around the world.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
            >
              Try Route Generator
            </Link>

            <Link
              href="/destinations"
              className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-950"
            >
              Explore Destinations
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}