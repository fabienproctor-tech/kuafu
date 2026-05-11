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
      "A coastal capital with sunshine, café culture, remote work communities and easy access to beaches.",
    search: "Lisbon",
    href: "/destinations/lisbon",
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
      "A Mediterranean city with beaches, nightlife, architecture and strong tourism opportunities.",
    search: "Barcelona",
    href: "/destinations/barcelona",
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
      "A classic working holiday destination with beaches, city life and strong seasonal job opportunities.",
    search: "Sydney",
    href: "/destinations/sydney",
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
      "A tropical destination popular with remote workers, creatives and longer-term travellers.",
    search: "Bali",
    href: "/destinations/bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Remote work and long stays",
    weather: "Warm year-round",
    budget: "Low to medium",
    work: "Remote work and freelance roles",
  },
  {
    name: "Dubai, UAE",
    description:
      "A global hub for sunshine, luxury hotels, stopovers and international work opportunities.",
    search: "Dubai",
    href: "/destinations/dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    bestFor: "Luxury travel and career opportunities",
    weather: "Very hot",
    budget: "Medium to high",
    work: "Hospitality, retail and corporate roles",
  },
  {
  name: "Thailand",
  description:
    "A classic Southeast Asia destination with beaches, islands, food culture and strong digital nomad communities.",
  search: "Thailand",
  href: "/destinations/thailand",
  image:
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  bestFor: "Budget travel and remote work",
  weather: "Hot year-round",
  budget: "Low to medium",
  work: "Tourism, teaching and remote work",
},
{
  name: "Vietnam",
  description:
    "An affordable destination known for cafés, food culture, beaches and growing digital nomad hubs.",
  search: "Vietnam",
  href: "/destinations/vietnam",
  image:
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  bestFor: "Affordable long stays",
  weather: "Warm tropical climate",
  budget: "Low",
  work: "Remote work and hospitality",
},
{
  name: "Cape Town, South Africa",
  description:
    "A cinematic coastal city combining beaches, mountains, cafés and winter sun lifestyle.",
  search: "Cape Town",
  href: "/destinations/cape-town",
  image:
    "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=1200&q=80",
  bestFor: "Winter sun and lifestyle travel",
  weather: "Warm summers",
  budget: "Medium",
  work: "Remote work and hospitality",
},
{
  name: "Mexico",
  description:
    "A vibrant destination with beach towns, digital nomad hubs, culture and sunshine year-round.",
  search: "Mexico",
  href: "/destinations/mexico",
  image:
    "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
  bestFor: "Long stays and remote work",
  weather: "Warm year-round",
  budget: "Medium",
  work: "Remote work and tourism",
},
{
  name: "Japan",
  description:
    "A unique destination for working holidays, city exploration, culture and long-term travel.",
  search: "Japan",
  href: "/destinations/japan",
  image:
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
  bestFor: "Working holidays and culture",
  weather: "Four seasons",
  budget: "Medium to high",
  work: "Working holidays and teaching",
},
{
  name: "Seychelles",
  description:
    "A premium island escape known for white-sand beaches, turquoise water, winter sun and slow tropical living.",
  search: "Seychelles",
  href: "/destinations/seychelles",
  image: "/images/destinations/seychelles.jpg",
  bestFor: "Luxury escapes and winter sun",
  weather: "Warm tropical climate",
  budget: "High",
  work: "Resorts, tourism and remote escape travel",
},
];

const relatedGuides = [
  {
    title: "Where is summer now?",
    href: "/guides/where-is-summer-now",
  },
  {
    title: "Where to travel in December from the UK",
    href: "/guides/where-to-travel-in-december-from-uk",
  },
  {
    title: "Best countries for digital nomads",
    href: "/guides/best-countries-for-digital-nomads",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Destinations
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Discover places worth following the sun for
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore destinations for sunny escapes, digital nomad lifestyles,
              work abroad opportunities and longer travel routes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {destination.name}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {destination.description}
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Best for
                      </p>
                      <p className="mt-1 text-slate-700">
                        {destination.bestFor}
                      </p>
                    </div>

                    <div className="rounded-xl bg-orange-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Weather
                      </p>
                      <p className="mt-1 text-slate-700">
                        {destination.weather}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Budget
                      </p>
                      <p className="mt-1 text-slate-700">
                        {destination.budget}
                      </p>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-4">
                      <p className="text-sm font-semibold text-blue-900">
                        Work
                      </p>
                      <p className="mt-1 text-slate-700">
                        {destination.work}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
  <Link
    href={destination.href}
    className="rounded-full bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
  >
    Read guide
  </Link>

  <Link
    href={`/search?destination=${destination.search}`}
    className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
  >
    Search travel
  </Link>

  <Link
    href="/route-generator"
    className="rounded-full border border-blue-900 px-5 py-3 text-center font-semibold text-blue-900 hover:bg-blue-50"
  >
    Plan route
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
              Travel styles
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-900 md:text-4xl">
              Find the destination that fits your path
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Digital nomad
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Bali, Lisbon and Thailand remain popular for remote workers
                  due to affordability, weather and coworking communities.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Working holiday
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Australia and Canada are popular with UK travellers looking to
                  work abroad while exploring.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900">
                  Winter sun
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dubai, Thailand and the Canary Islands are ideal escapes from
                  colder UK weather.
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
                Keep exploring
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
            {relatedGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900">
                  {guide.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  Read the Kuafu guide and find your next travel idea.
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-900 px-6 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">
              Build your own route around the world
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Use Kuafu’s route generator to compare destinations and plan your
              next sunny route.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/route-generator"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Try Route Generator
              </Link>

              <Link
                href="/guides"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Explore Guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}