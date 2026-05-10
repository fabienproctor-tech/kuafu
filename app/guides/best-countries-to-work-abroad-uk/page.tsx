import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Countries to Work Abroad from the UK | Kuafu",
  description:
    "Discover the best countries for UK students and young professionals to work abroad including Australia, Canada, Dubai and Spain. Compare lifestyle, jobs, weather and travel options.",
};

const countries = [
  {
    name: "Australia",
    image: "/images/guides/work-abroad/australia.jpg",
    bestFor: "Working holidays, hospitality and outdoor lifestyle",
    weather: "Warm and sunny",
    budget: "High cost, but strong earning potential",
    jobs: "Very high",
    text: "Australia is one of the most popular work abroad destinations for UK travellers. It offers strong working holiday visa options, high wages, beaches and a lifestyle that suits long-term travel.",
    search: "Australia",
  },
  {
    name: "Canada",
    image: "/images/guides/work-abroad/canada.jpg",
    bestFor: "Ski seasons, tourism and outdoor adventure",
    weather: "Cold winters and warm summers",
    budget: "Medium to high",
    jobs: "High seasonal demand",
    text: "Canada is ideal for UK travellers looking for seasonal work, especially in ski resorts, hospitality, tourism and outdoor adventure roles.",
    search: "Canada",
  },
  {
    name: "Dubai, UAE",
    image: "/images/guides/work-abroad/dubai.jpg",
    bestFor: "Hospitality, retail and corporate roles",
    weather: "Very hot and sunny",
    budget: "Medium to high",
    jobs: "High in service and corporate sectors",
    text: "Dubai offers strong work opportunities in hospitality, retail, events and corporate roles. It is a good option for travellers looking for modern city life and year-round sunshine.",
    search: "Dubai",
  },
  {
    name: "Spain & Europe",
    image: "/images/guides/work-abroad/spain.jpg",
    bestFor: "Hospitality, tourism and remote work",
    weather: "Warm Mediterranean climate",
    budget: "Low to medium",
    jobs: "Medium, depending on season",
    text: "Spain and parts of Europe are useful starting points for UK travellers who want shorter flights, summer jobs, tourism roles or remote work-friendly destinations.",
    search: "Spain",
  },
];

export default function WorkAbroadGuidePage() {
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
            Best countries to work abroad from the UK
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Discover countries where UK students, graduates and young
            professionals can combine travel, work experience and lifestyle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-lg leading-8 text-slate-700">
          Working abroad is one of the best ways to travel for longer, earn
          money and gain life experience. Whether you are a student, graduate or
          young professional, the right destination can help you build skills
          while exploring somewhere new.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          These countries offer a strong mix of job opportunities, lifestyle,
          travel potential and work abroad appeal for UK travellers.
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
                alt={`${country.name} work abroad destination`}
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

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Best for</p>
                <p className="mt-1 text-slate-700">{country.bestFor}</p>
              </div>

              <div className="rounded-xl bg-orange-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Weather</p>
                <p className="mt-1 text-slate-700">{country.weather}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Budget</p>
                <p className="mt-1 text-slate-700">{country.budget}</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-900">Jobs</p>
                <p className="mt-1 text-slate-700">{country.jobs}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/search?destination=${country.search}`}
                className="rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
              >
                Search travel
              </Link>

              <Link
                href="/jobs"
                className="rounded-full bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
              >
                Work abroad
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <h2 className="text-3xl font-bold text-blue-900">
          How to choose where to work abroad
        </h2>

        <p className="mt-4 leading-7 text-slate-700">
          The best country depends on what you want from the experience. Some
          travellers prioritise wages and job availability, while others want
          sunshine, travel freedom, nightlife, outdoor adventure or lower living
          costs.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Before making a decision, always check visa requirements, local work
          rights, accommodation costs and whether the job market matches your
          skills and travel goals.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              What are the best countries for UK citizens to work abroad?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Popular countries include Australia, Canada, Spain, Dubai and
              parts of Europe due to job opportunities, lifestyle appeal and
              travel infrastructure.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Can UK students work abroad?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Yes. UK students may be able to work abroad through working
              holiday visas, internships, seasonal jobs or hospitality roles,
              depending on the destination.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Do I need a visa to work abroad?
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              In most cases, yes. Visa requirements depend on the country, your
              nationality and the type of work. Always check official government
              guidance before travelling.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
  <h2 className="text-3xl font-bold text-blue-900">
    Related guides
  </h2>

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
            Ready to start your work abroad journey?
          </h2>

          <p className="mt-4 text-blue-100">
            Explore destinations, search travel options and discover work abroad
            opportunities with Kuafu.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/search"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Start searching
            </Link>

            <Link
              href="/route-generator"
              className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
            >
              Plan a route
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