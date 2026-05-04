import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Best Countries to Work Abroad for UK Travellers | Kuafu",
  description:
    "Discover the best countries for UK students and young professionals to work abroad. Find jobs, flights and accommodation with Kuafu.",
};

export default function WorkAbroadGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the best countries for UK citizens to work abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular countries include Australia, Canada, New Zealand, the UAE and parts of Europe due to strong job markets and accessible visa options.",
        },
      },
      {
        "@type": "Question",
        name: "Can UK students work abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, UK students can work abroad through working holiday visas, internships or seasonal roles depending on the country.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a visa to work abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. Visa requirements depend on the country and type of work, so it is important to check official government guidance.",
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
          Best countries to work abroad from the UK
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-600">
          Working abroad is one of the best ways to travel, earn money and gain
          life experience. Whether you are a student, graduate or young
          professional, these countries offer strong job opportunities and
          great lifestyles.
        </p>

        {/* INTRO CTA */}
        <div className="mt-6">
          <Link
            href="/route-generator"
            className="inline-block rounded-2xl bg-orange-500 hover:bg-orange-600 px-6 py-4 font-bold text-white"
          >
            Generate your work & travel route
          </Link>
        </div>

        {/* DESTINATIONS */}
        <section className="mt-10 space-y-8">

          {/* Australia */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Australia</h2>
            <p className="mt-2 text-slate-600">
              One of the most popular destinations for UK travellers, Australia
              offers strong working holiday visa options, high wages and a great lifestyle.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Hot | 💰 Budget: High | 💼 Jobs: Very high | ✈️ Flight: Long haul
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/search?destination=Australia" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Australia" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Australia" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          {/* Canada */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Canada</h2>
            <p className="mt-2 text-slate-600">
              Canada is ideal for UK travellers looking for seasonal work,
              especially in ski resorts and tourism roles.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              ❄️ Weather: Cold | 💰 Budget: Medium | 💼 Jobs: High | ✈️ Flight: Long haul
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/search?destination=Canada" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Canada" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Canada" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          {/* UAE */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Dubai, UAE</h2>
            <p className="mt-2 text-slate-600">
              Dubai offers tax-free income and strong opportunities in hospitality,
              retail and corporate roles.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Very hot | 💰 Budget: Medium | 💼 Jobs: High | ✈️ Flight: Medium haul
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/search?destination=Dubai" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Dubai" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Dubai" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          {/* Europe */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Spain & Europe</h2>
            <p className="mt-2 text-slate-600">
              Europe offers easier access for UK travellers, with opportunities
              in hospitality, tourism and remote work.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              🌞 Weather: Warm | 💰 Budget: Low–Medium | 💼 Jobs: Medium | ✈️ Flight: Short haul
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <Link href="/search?destination=Spain" className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Spain" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Spain" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg text-center">
          <h2 className="text-3xl font-black">
            Start planning your work abroad journey
          </h2>

          <p className="mt-3 text-slate-600">
            Use Kuafu to find flights, accommodation and jobs in one place.
          </p>

          <div className="mt-6">
            <Link
              href="/search"
              className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white"
            >
              Start searching
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">FAQs</h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-xl font-black">
                What are the best countries for UK citizens to work abroad?
              </h3>
              <p className="mt-2 text-slate-600">
                Popular countries include Australia, Canada, New Zealand, the UAE and parts of Europe.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Can UK students work abroad?
              </h3>
              <p className="mt-2 text-slate-600">
                Yes, through working holiday visas, internships or seasonal jobs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Do I need a visa to work abroad?
              </h3>
              <p className="mt-2 text-slate-600">
                In most cases yes, depending on the country and type of work.
              </p>
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}