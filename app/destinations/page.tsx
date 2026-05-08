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
    image:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Digital nomads and city breaks",
    weather: "Warm summers",
    budget: "Medium",
    work: "Remote work, hospitality and tourism",
  },
  {
    name: "Barcelona, Spain",
    description:
      "Ideal for city breaks, summer jobs and Mediterranean travel with beaches, nightlife and strong tourism opportunities.",
    search: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Beach city lifestyle",
    weather: "Hot summers",
    budget: "Medium",
    work: "Hospitality, events and tourism",
  },
  {
    name: "Sydney, Australia",
    description:
      "One of the best working holiday destinations for UK travellers with strong hospitality and tourism opportunities.",
    search: "Sydney",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Working holidays",
    weather: "Summer from December to February",
    budget: "High",
    work: "Hospitality, retail, events and admin",
  },
  {
    name: "Bali, Indonesia",
    description:
      "Popular with remote workers and long-term travellers looking for warm weather, coworking spaces and lower living costs.",
    search: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Remote work and long stays",
    weather: "Warm year-round",
    budget: "Low to medium",
    work: "Remote work and freelance roles",
  },
  {
    name: "Bangkok, Thailand",
    description:
      "Perfect for budget travel, food culture and exploring Southeast Asia while staying connected to major travel routes.",
    search: "Bangkok",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Budget travel and Asia routes",
    weather: "Hot year-round",
    budget: "Low to medium",
    work: "Tourism, teaching and remote work",
  },
  {
    name: "Dubai, UAE",
    description:
      "A global travel hub with luxury hotels, remote work opportunities and strong international connections.",
    search: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Luxury travel and career opportunities",
    weather: "Very hot",
    budget: "Medium to high",
    work: "Hospitality, retail and corporate roles",
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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-black text-slate-950">
                  {destination.name}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {destination.description}
                </p>

                <div className="mt-5 space-y-2 rounded-2xl bg-blue-50 p-4 text-sm text-slate-600">
                  <p>
                    <strong>Best for:</strong> {destination.bestFor}
                  </p>
                  <p>
                    <strong>Weather:</strong> {destination.weather}
                  </p>
                  <p>
                    <strong>Budget:</strong> {destination.budget}
                  </p>
                  <p>
                    <strong>Work:</strong> {destination.work}
                  </p>
                </div>

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
            </div>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black">Best destination types</h2>

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

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black">Related guides</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/guides/where-is-summer-now"
              className="rounded-2xl border p-5 font-bold hover:bg-blue-50"
            >
              Where is summer now?
            </Link>

            <Link
              href="/guides/where-to-travel-in-december-from-uk"
              className="rounded-2xl border p-5 font-bold hover:bg-blue-50"
            >
              Where to travel in December from the UK
            </Link>

            <Link
              href="/guides/cheap-summer-destinations-europe"
              className="rounded-2xl border p-5 font-bold hover:bg-blue-50"
            >
              Cheap summer destinations in Europe
            </Link>
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