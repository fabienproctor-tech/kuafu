import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Countries for Digital Nomads in 2026 | Kuafu",
  description:
    "Discover the best countries for digital nomads in 2026 including Portugal, Spain, Bali, Thailand and Australia. Explore remote work destinations, cost of living, weather and work abroad opportunities.",
};

const countries = [
  {
    name: "Portugal",
    image: "/images/guides/digital-nomads/portugal.jpg",
    budget: "£1,300–£2,200/month",
    bestFor: "Remote workers, café culture and coastal living",
    cities: "Lisbon, Porto, Lagos, Madeira",
    text: "Portugal has become one of Europe’s top digital nomad destinations thanks to its warm climate, remote work culture and strong international community.",
  },
  {
    name: "Spain",
    image: "/images/guides/digital-nomads/spain.jpg",
    budget: "£1,500–£2,600/month",
    bestFor: "Beach lifestyle, city energy and social travellers",
    cities: "Barcelona, Valencia, Madrid, Malaga",
    text: "Spain offers sunshine, culture, beaches and vibrant cities, making it ideal for remote workers who want lifestyle and energy.",
  },
  {
    name: "Thailand",
    image: "/images/guides/digital-nomads/thailand.jpg",
    budget: "£800–£1,800/month",
    bestFor: "Budget travel, adventure and tropical living",
    cities: "Chiang Mai, Bangkok, Phuket, Koh Samui",
    text: "Thailand remains a favourite for digital nomads thanks to its affordability, food, tropical climate and long-established traveller community.",
  },
  {
    name: "Bali, Indonesia",
    image: "/images/guides/digital-nomads/bali.jpg",
    budget: "£900–£2,000/month",
    bestFor: "Creatives, entrepreneurs and wellness lifestyle",
    cities: "Canggu, Ubud, Seminyak, Uluwatu",
    text: "Bali is known for coworking cafés, tropical scenery, wellness culture and a strong community of creators and remote workers.",
  },
  {
    name: "Australia",
    image: "/images/guides/digital-nomads/australia.jpg",
    budget: "£2,000–£4,000/month",
    bestFor: "Working holidays, young professionals and outdoor lifestyle",
    cities: "Sydney, Melbourne, Brisbane, Perth",
    text: "Australia is perfect for UK travellers who want beaches, modern cities, work opportunities and a long-term travel experience.",
  },
];

export default function BestCountriesForDigitalNomadsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Work Abroad Guide
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Best Countries for Digital Nomads in 2026
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Discover sunny destinations with great weather, remote work culture
              and flexible lifestyles for digital nomads and long-term
              travellers.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-lg leading-8 text-slate-700">
            Remote work has changed the way people travel. More professionals
            are now combining work and travel to live abroad, explore new
            cultures and experience a more flexible lifestyle.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            From beach cafés in Bali to rooftop workspaces in Lisbon, these are
            some of the best countries for digital nomads in 2026.
          </p>
        </section>

        <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
          {countries.map((country, index) => (
            <article
              key={country.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
                <Image
                  src={country.image}
                  alt={`${country.name} digital nomad destination`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900">
                {country.name}
              </h2>

              <p className="mt-4 leading-7 text-slate-700">{country.text}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">Budget</p>
                  <p className="mt-1 text-slate-700">{country.budget}</p>
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Best for
                  </p>
                  <p className="mt-1 text-slate-700">{country.bestFor}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Best places
                  </p>
                  <p className="mt-1 text-slate-700">{country.cities}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Quick comparison
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4">Country</th>
                  <th className="p-4">Budget</th>
                  <th className="p-4">Best For</th>
                </tr>
              </thead>

              <tbody>
                {countries.map((country) => (
                  <tr key={country.name} className="border-t">
                    <td className="p-4 font-semibold">{country.name}</td>
                    <td className="p-4">{country.budget}</td>
                    <td className="p-4">{country.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Final thoughts</h2>

          <p className="mt-4 leading-7 text-slate-700">
            The best digital nomad destination depends on the lifestyle you
            want. Some travellers prioritise affordability, others want beaches,
            nightlife, coworking spaces or long-term visa options.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Whether you are planning a few months abroad or a complete lifestyle
            change, there has never been a better time to combine travel and
            remote work.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                What is the best country for digital nomads?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Portugal, Spain, Thailand and Bali are among the most popular
                digital nomad destinations due to their weather, affordability
                and remote work communities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Which country is cheapest for digital nomads?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Thailand and Bali are generally among the most affordable
                destinations for digital nomads, especially for long-term stays.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                What country has the best weather for remote work?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Portugal, Spain, Bali and Australia are all known for warm
                climates, sunshine and outdoor lifestyles that appeal to remote
                workers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can UK citizens work remotely abroad?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                This depends on the visa rules of each country. Many countries
                now offer digital nomad visas or working holiday visas designed
                for remote workers and long-term travellers.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Related guides</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/january-winter-sun-destinations"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                January Winter Sun Destinations
              </h3>

              <p className="mt-3 text-slate-600">
                Escape the UK winter and follow the sun.
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
                Follow the sun throughout the year.
              </p>
            </Link>

            <Link
              href="/guides/best-countries-to-work-abroad-uk"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best Countries to Work Abroad
              </h3>

              <p className="mt-3 text-slate-600">
                Compare work abroad destinations.
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-blue-900 px-6 py-14 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">
              Ready to plan your next chapter?
            </h2>

            <p className="mt-4 text-blue-100">
              Explore flights, hotels and work abroad opportunities with Kuafu.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/search"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Start searching
              </Link>

              <Link
                href="/destinations"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Explore destinations
              </Link>
            </div>

            <p className="mt-8 text-sm text-blue-100">
              Follow the light. Find your path.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}