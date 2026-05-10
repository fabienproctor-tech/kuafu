import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Working Holiday Visas Explained | Kuafu",
  description:
    "Learn how working holiday visas work, which countries offer them and how UK travellers can use them to work and travel abroad.",
};

const visaCountries = [
  {
    name: "Australia",
    image: "/images/guides/working-holiday-visas/australia.jpg",
    duration: "Usually up to 12 months",
    bestFor: "Hospitality, farm work, tourism and long-term travel",
    jobs: "Hospitality, retail, events, admin and seasonal work",
    text: "Australia is one of the most popular working holiday destinations for UK travellers thanks to its strong job market, beaches, cities and outdoor lifestyle.",
  },
  {
    name: "Canada",
    image: "/images/guides/working-holiday-visas/canada.jpg",
    duration: "Usually up to 24 months",
    bestFor: "Ski seasons, tourism and outdoor adventure",
    jobs: "Ski resorts, hospitality, tourism, retail and seasonal roles",
    text: "Canada is a strong choice for travellers who want seasonal work, mountain towns, city life and outdoor adventure.",
  },
  {
    name: "New Zealand",
    image: "/images/guides/working-holiday-visas/new-zealand.jpg",
    duration: "Usually up to 23 months",
    bestFor: "Outdoor lifestyle, adventure travel and seasonal work",
    jobs: "Hospitality, agriculture, tourism and seasonal roles",
    text: "New Zealand is ideal for travellers who want nature, adventure and a slower pace while working abroad.",
  },
  {
    name: "Japan",
    image: "/images/guides/working-holiday-visas/japan.jpg",
    duration: "Usually up to 12 months",
    bestFor: "Culture, city life and teaching-related opportunities",
    jobs: "Hospitality, tourism, language support and short-term roles",
    text: "Japan can be a great option for travellers interested in culture, cities, food and a very different work abroad experience.",
  },
];

export default function WorkingHolidayVisasExplainedPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Work Abroad Guide
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Working Holiday Visas Explained
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Learn how working holiday visas can help UK travellers work
              abroad, travel for longer and build life experience overseas.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-lg leading-8 text-slate-700">
            A working holiday visa allows eligible travellers to live and work
            in another country for a temporary period. It is designed for people
            who want to fund their travels, gain international experience and
            explore a country more deeply than a short holiday allows.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            For UK travellers, working holiday visas can be especially useful
            for gap years, post-university travel, career breaks and long-term
            work abroad plans.
          </p>
        </section>

        <section className="mx-auto max-w-5xl space-y-8 px-6 pb-12">
          {visaCountries.map((country, index) => (
            <article
              key={country.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 h-64 overflow-hidden rounded-2xl md:h-80">
                <Image
                  src={country.image}
                  alt={`${country.name} working holiday destination`}
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
                    Typical duration
                  </p>
                  <p className="mt-1 text-slate-700">{country.duration}</p>
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Best for
                  </p>
                  <p className="mt-1 text-slate-700">{country.bestFor}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-blue-900">
                    Common jobs
                  </p>
                  <p className="mt-1 text-slate-700">{country.jobs}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Who are working holiday visas best for?
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Working holiday visas are often best for students, graduates, gap
            year travellers, career breakers and young professionals who want to
            travel for longer without relying only on savings.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            They are especially useful if you want flexibility, are open to
            temporary work and want to experience a country beyond a normal
            holiday.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Things to check before applying
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">Age limits</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Most working holiday visas have age limits, often aimed at young
                adults.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="font-bold text-blue-900">Savings requirements</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Some countries ask applicants to show proof of funds before
                arrival.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-blue-900">Work restrictions</h3>
              <p className="mt-2 leading-7 text-slate-700">
                Some visas limit how long you can work for one employer or what
                work you can do.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-900">Health insurance</h3>
              <p className="mt-2 leading-7 text-slate-700">
                You may need travel or health insurance before entering the
                country.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="text-3xl font-bold text-blue-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Can UK citizens get working holiday visas?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Yes, UK citizens can apply for working holiday visas in several
                countries, subject to eligibility rules, age limits and visa
                conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                What age can you apply for a working holiday visa?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Age limits vary by country. Many working holiday visas are aimed
                at young adults, so you should always check official government
                guidance before applying.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Which country is easiest for a working holiday?
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Australia, Canada and New Zealand are among the most popular
                choices for UK travellers because they have established working
                holiday routes and strong travel infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-blue-900">Related guides</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Link
              href="/guides/best-countries-to-work-abroad-uk"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best Countries to Work Abroad
              </h3>
              <p className="mt-3 text-slate-600">
                Compare destinations for work abroad.
              </p>
            </Link>

            <Link
              href="/guides/cheapest-countries-to-live-abroad"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Cheapest Countries to Live Abroad
              </h3>
              <p className="mt-3 text-slate-600">
                Explore affordable long-term travel options.
              </p>
            </Link>

            <Link
              href="/guides/best-countries-for-digital-nomads"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-900">
                Best Countries for Digital Nomads
              </h3>
              <p className="mt-3 text-slate-600">
                Discover remote work destinations.
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-blue-900 px-6 py-14 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">
              Ready to plan your work abroad journey?
            </h2>

            <p className="mt-4 text-blue-100">
              Explore destinations, travel options and work abroad ideas with
              Kuafu.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/search"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Start searching
              </Link>

              <Link
                href="/jobs"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                Explore work abroad
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