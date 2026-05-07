import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Travel Destinations | Kuafu",
  description:
    "Discover sunny destinations, digital nomad hotspots, working holiday countries and travel inspiration from Kuafu.",
};

const destinations = [
  {
    name: "Lisbon, Portugal",
    description:
      "A top destination for digital nomads, remote workers and UK travellers looking for sunshine, culture and affordable living.",
    search: "Lisbon",
  },
  {
    name: "Barcelona, Spain",
    description:
      "Ideal for city breaks, summer jobs and Mediterranean travel with beaches, nightlife and strong tourism opportunities.",
    search: "Barcelona",
  },
  {
    name: "Sydney, Australia",
    description:
      "One of the best working holiday destinations for UK travellers with strong hospitality and tourism opportunities.",
    search: "Sydney",
  },
  {
    name: "Bali, Indonesia",
    description:
      "Popular with remote workers and long-term travellers looking for warm weather, coworking spaces and low living costs.",
    search: "Bali",
  },
  {
    name: "Bangkok, Thailand",
    description:
      "Perfect for budget travel, food culture and exploring Southeast Asia while staying connected to major travel routes.",
    search: "Bangkok",
  },
  {
    name: "Dubai, UAE",
    description:
      "A global travel hub with luxury hotels, remote work opportunities and strong international connections.",
    search: "Dubai",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Destinations
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Discover places worth following the sun for
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Explore destinations popular with UK travellers, students, remote
          workers and digital nomads. Search for flights, stays and job
          opportunities while planning your next route.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <h2 className="text-3xl font-black text-slate-950">
                {destination.name}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {destination.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/search?destination=${destination.search}`}
                  className="rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
                >
                  Search flights
                </Link>

                <Link
                  href={`/search?destination=${destination.search}`}
                  className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white"
                >
                  Find hotels
                </Link>

                <Link
                  href={`/search?destination=${destination.search}`}
                  className="rounded-2xl border border-slate-300 px-5 py-3 font-bold hover:bg-blue-50"
                >
                  Find jobs
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black">
            Best destination types
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Digital Nomad
              </h3>

              <p className="mt-3 text-slate-600">
                Bali, Lisbon and Thailand remain popular for remote workers due
                to affordability, weather and coworking communities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Working Holiday
              </h3>

              <p className="mt-3 text-slate-600">
                Australia and Canada are among the best countries for UK
                travellers looking to work abroad while exploring.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-blue-600">
                Winter Sun
              </h3>

              <p className="mt-3 text-slate-600">
                Dubai, Thailand and the Canary Islands are ideal escapes from
                cold UK winters.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
          <h2 className="text-3xl font-black">
            Build your own route around the world
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Use Kuafu’s route generator to discover where the sun is, compare
            destinations and plan your next journey.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
            >
              Try Route Generator
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-950"
            >
              Explore Guides
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}