import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Where Is Summer Now? | Kuafu Travel Guide",
  description:
    "Find where summer is happening now and discover sunny destinations for UK students, graduates and young professionals who want to work and travel abroad.",
};

export default function WhereIsSummerNowPage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is the best place for summer in December?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular winter-sun options for UK travellers include Australia, Thailand, Bali, South Africa and the Canary Islands."
      }
    },
    {
      "@type": "Question",
      "name": "Can I work while travelling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the country, visa rules and your type of work. You should always check work rights before applying for jobs abroad."
      }
    },
    {
      "@type": "Question",
      "name": "Is Kuafu only for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Kuafu is designed for UK students and young professionals first, but it can also help remote workers, gap-year travellers and anyone looking for sun-led travel ideas."
      }
    }
  ]
};
    return (
    <main className="min-h-screen bg-blue-50">
      <Header />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
      <article className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Kuafu Guide
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Where is summer now?
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-600">
          If you are travelling from the UK and want to follow the sun, the best
          places depend on the month. Kuafu helps you plan destinations where the
          weather, travel options and work opportunities line up.
        </p>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">Best sunny destinations by season</h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-xl font-black">June to August</h3>
              <p className="mt-2 text-slate-600">
                Europe is ideal during UK summer. Good options include Portugal,
                Spain, Croatia, Greece, France and Italy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">September to November</h3>
              <p className="mt-2 text-slate-600">
                Southern Europe can still be warm, while destinations such as the
                Canary Islands, Morocco and parts of the Middle East become more appealing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">December to February</h3>
              <p className="mt-2 text-slate-600">
                For winter sun, look further afield. Australia, Thailand, Bali,
                South Africa and parts of South America can be strong options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">March to May</h3>
              <p className="mt-2 text-slate-600">
                Spring is a good time to plan Mediterranean trips before peak
                prices. Portugal, Spain, Greece and Turkey are useful starting points.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">How Kuafu helps</h2>

          <p className="mt-4 text-slate-600 leading-7">
            Instead of only searching for a holiday, Kuafu combines three things:
            flights, places to stay and job opportunities. This makes it useful
            for students, graduates, remote workers and young professionals who
            want to travel for longer.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-5 py-3 font-bold text-white"
            >
              Try the route generator
            </Link>

            <Link
              href="/search?destination=Portugal"
              className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white"
            >
              Search Portugal
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-black">FAQs</h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-xl font-black">
                Where is the best place for summer in December?
              </h3>
              <p className="mt-2 text-slate-600">
                Popular winter-sun options for UK travellers include Australia,
                Thailand, Bali, South Africa and the Canary Islands.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Can I work while travelling?
              </h3>
              <p className="mt-2 text-slate-600">
                It depends on the country, visa rules and your type of work. You
                should always check work rights before applying for jobs abroad.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">
                Is Kuafu only for students?
              </h3>
              <p className="mt-2 text-slate-600">
                No. Kuafu is designed for UK students and young professionals
                first, but it can also help remote workers, gap-year travellers
                and anyone looking for sun-led travel ideas.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}