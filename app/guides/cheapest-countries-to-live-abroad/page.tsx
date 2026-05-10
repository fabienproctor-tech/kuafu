import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cheapest Countries to Live Abroad | Kuafu",
  description:
    "Discover some of the cheapest countries to live abroad for UK travellers, digital nomads, students and remote workers.",
};

const countries = [
  {
    name: "Thailand",
    image: "/images/guides/cheapest-countries-live-abroad/thailand.jpg",
    budget: "£800–£1,500/month",
    bestFor: "Budget travel, beaches and city life",
    cities: "Chiang Mai, Bangkok, Phuket",
    text: "Thailand is one of the most popular affordable destinations for long-term travellers thanks to low living costs, great food, beaches and strong digital nomad communities.",
  },
  {
    name: "Bali, Indonesia",
    image: "/images/guides/cheapest-countries-live-abroad/bali.jpg",
    budget: "£900–£1,700/month",
    bestFor: "Remote workers, wellness and creative lifestyle",
    cities: "Canggu, Ubud, Seminyak",
    text: "Bali offers tropical living, coworking cafés and a strong remote work scene, making it popular with digital nomads and creators.",
  },
  {
    name: "Vietnam",
    image: "/images/guides/cheapest-countries-live-abroad/vietnam.jpg",
    budget: "£700–£1,300/month",
    bestFor: "Low costs, food culture and adventure",
    cities: "Da Nang, Hanoi, Ho Chi Minh City",
    text: "Vietnam is one of Asia’s best-value destinations, with affordable accommodation, vibrant cities, coastal towns and strong travel appeal.",
  },
  {
    name: "Portugal",
    image: "/images/guides/cheapest-countries-live-abroad/portugal.jpg",
    budget: "£1,300–£2,200/month",
    bestFor: "Europe, sunshine and remote work",
    cities: "Lisbon, Porto, Lagos, Madeira",
    text: "Portugal is not the cheapest option globally, but it remains one of Europe’s better-value choices for sunshine, lifestyle and remote work culture.",
  },
  {
    name: "Spain",
    image: "/images/guides/cheapest-countries-live-abroad/spain.jpg",
    budget: "£1,500–£2,600/month",
    bestFor: "Beach cities, nightlife and culture",
    cities: "Valencia, Malaga, Barcelona",
    text: "Spain offers strong lifestyle value, especially outside the most expensive city centres, with warm weather, food culture and excellent transport links.",
  },
  {
    name: "Mexico",
    image: "/images/guides/cheapest-countries-live-abroad/mexico.jpg",
    budget: "£1,000–£2,000/month",
    bestFor: "Warm weather, beaches and digital nomads",
    cities: "Mexico City, Playa del Carmen, Oaxaca",
    text: "Mexico is popular with remote workers and long-term travellers thanks to its climate, food, culture, beaches and relatively affordable lifestyle.",
  },
];

export default function CheapestCountriesToLiveAbroadPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Living Abroad Guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Cheapest Countries to Live Abroad
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Discover affordable countries for long-term travel, remote work,
              digital nomad life and building your next chapter abroad.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-lg leading-8 text-slate-700">
            Living abroad does not have to be expensive. For UK travellers,
            students, remote workers and digital nomads, choosing the right
            country can make long-term travel much more realistic.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The best affordable countries combine lower living costs with good
            accommodation options, strong lifestyle appeal, reliable internet and
            travel opportunities.
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
                  alt={`${country.name} affordable place to live abroad`}
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
                  <p className="text-sm font-semibold text-blue-900">
                    Monthly budget
                  </p>
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
                    Popular places
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
                  <th className="p-4">Monthly Budget</th>
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
          <h2 className="text-3xl font-bold text-blue-900">
            What to consider before moving abroad
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Cost of living is only one part of choosing where to live abroad.
            You should also consider visa rules, healthcare, internet quality,
            safety, accommodation options and whether the destination suits your
            work or study plans.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Some countries may look cheap on paper but become expensive in
            tourist areas. Always research local neighbourhoods, seasonal price
            changes and longer-stay accommodation before committing.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                What is the cheapest country to live abroad?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Thailand, Vietnam and Bali are often among the most affordable
                destinations for long-term travellers and remote workers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Which country is best for digital nomads on a budget?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Thailand, Bali, Vietnam and Portugal are popular options because
                they combine lifestyle, internet access and international
                communities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Is Europe affordable for living abroad?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Some parts of Europe can be affordable, especially outside major
                capital cities. Portugal and Spain can offer good value compared
                with many other Western European destinations.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Related guides</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/best-countries-for-digital-nomads"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best Countries for Digital Nomads
              </h3>
              <p className="mt-3 text-slate-600">
                Explore sunny remote-work destinations.
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
          </div>
        </section>

        <section className="bg-blue-900 px-6 py-14 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">
              Ready to plan life abroad?
            </h2>

            <p className="mt-4 text-blue-100">
              Explore destinations, search travel options and discover work
              abroad inspiration with Kuafu.
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