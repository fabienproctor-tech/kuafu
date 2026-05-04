import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cheap Summer Destinations in Europe | Kuafu",
  description:
    "Discover affordable summer destinations in Europe for UK travellers, students and young professionals. Compare flights, stays and jobs with Kuafu.",
};

export default function CheapSummerEuropeGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is cheap to travel in Europe in summer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Affordable summer destinations in Europe can include Portugal, Spain, Croatia, Greece, Bulgaria and parts of Eastern Europe depending on flights and accommodation prices.",
        },
      },
      {
        "@type": "Question",
        name: "Where is best for students to travel in Europe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students often look for destinations with cheap flights, affordable hostels, good nightlife and seasonal jobs. Lisbon, Barcelona, Split, Budapest and Athens can be good options.",
        },
      },
      {
        "@type": "Question",
        name: "Can I work while travelling in Europe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the country, your nationality, visa rules and the type of work. Always check official work rights before accepting a job abroad.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-orange-50">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-orange-600">
          Kuafu Guide
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Cheap summer destinations in Europe
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-600">
          Europe is one of the easiest places for UK travellers to chase the sun
          without spending long-haul money. These destinations are strong starting
          points for students, graduates and young professionals looking for
          warm weather, affordable stays and work-travel potential.
        </p>

        <div className="mt-6">
          <Link
            href="/route-generator"
            className="inline-block rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white hover:bg-orange-600"
          >
            Generate a summer route
          </Link>
        </div>

        <section className="mt-10 space-y-8">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Lisbon, Portugal</h2>
            <p className="mt-2 text-slate-600">
              Lisbon is popular with students, remote workers and young
              professionals thanks to its warm weather, beaches, nightlife and
              strong digital nomad scene.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Hot | 💰 Budget: Medium | 💼 Jobs: Medium | ✈️ Flight: Short haul
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Lisbon" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Lisbon" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Lisbon" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Barcelona, Spain</h2>
            <p className="mt-2 text-slate-600">
              Barcelona combines beaches, city life and seasonal tourism work.
              It can be pricier in peak season, but cheap flights from the UK
              make it a strong option.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Hot | 💰 Budget: Medium | 💼 Jobs: High | ✈️ Flight: Short haul
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Barcelona" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Barcelona" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Barcelona" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Split, Croatia</h2>
            <p className="mt-2 text-slate-600">
              Split is ideal for island hopping, beach days and seasonal tourism
              roles. It is a strong summer option for travellers who want a mix
              of work, hostels and coastal lifestyle.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Hot | 💰 Budget: Medium | 💼 Jobs: Medium | ✈️ Flight: Short haul
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Split" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Split" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Split" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Budapest, Hungary</h2>
            <p className="mt-2 text-slate-600">
              Budapest is one of Europe’s best value city breaks, with lower
              accommodation costs than many Western European capitals and a
              strong student-friendly nightlife scene.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Warm | 💰 Budget: Low | 💼 Jobs: Medium | ✈️ Flight: Short haul
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Budapest" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Budapest" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Budapest" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-6 text-center shadow-lg">
          <h2 className="text-3xl font-black">
            Build a budget-friendly summer route
          </h2>
          <p className="mt-3 text-slate-600">
            Use Kuafu to combine cheap flights, affordable stays and work
            opportunities into one travel plan.
          </p>
          <div className="mt-6">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white hover:bg-orange-600"
            >
              Try the Route Generator
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">FAQs</h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-xl font-black">
                Where is cheap to travel in Europe in summer?
              </h3>
              <p className="mt-2 text-slate-600">
                Affordable summer destinations in Europe can include Portugal,
                Spain, Croatia, Greece, Bulgaria and parts of Eastern Europe
                depending on flights and accommodation prices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Where is best for students to travel in Europe?
              </h3>
              <p className="mt-2 text-slate-600">
                Students often look for cheap flights, affordable hostels, good
                nightlife and seasonal jobs. Lisbon, Barcelona, Split, Budapest
                and Athens can be good options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Can I work while travelling in Europe?
              </h3>
              <p className="mt-2 text-slate-600">
                It depends on the country, your nationality, visa rules and the
                type of work. Always check official work rights before accepting
                a job abroad.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}