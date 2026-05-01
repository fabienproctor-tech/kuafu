import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Where to Travel in December from the UK | Kuafu",
  description:
    "Discover the best sunny destinations in December for UK travellers. Find flights, hotels and jobs abroad with Kuafu.",
};

export default function DecemberGuidePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Header />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-orange-600">
          Kuafu Guide
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Where to travel in December from the UK
        </h1>

        <p className="mt-5 text-xl leading-8 text-slate-600">
          December is the perfect time to escape the cold UK weather and follow the sun.
          Whether you are looking for beaches, remote work or seasonal jobs abroad,
          these destinations offer the best mix of sunshine, travel opportunities and lifestyle.
        </p>

        {/* DESTINATIONS */}
        <section className="mt-10 space-y-8">

          {/* Australia */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Sydney, Australia</h2>
            <p className="mt-3 text-slate-600">
              One of the best destinations for December, Sydney offers peak summer weather,
              strong working holiday visa options and plenty of hospitality jobs.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/search?destination=Sydney"
                className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-5 py-3 font-bold text-white"
              >
                Search flights
              </Link>

              <Link
                href="/search?destination=Sydney"
                className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white"
              >
                Find hotels
              </Link>

              <Link
                href="/search?destination=Sydney"
                className="rounded-2xl border px-5 py-3 font-bold"
              >
                Find jobs
              </Link>
            </div>
          </div>

          {/* Bali */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Bali, Indonesia</h2>
            <p className="mt-3 text-slate-600">
              Bali is ideal for remote workers and budget travellers. It offers warm weather,
              affordable living and a strong digital nomad community.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Bali" className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Bali" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Bali" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          {/* Thailand */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Thailand</h2>
            <p className="mt-3 text-slate-600">
              Thailand offers great weather, low costs and plenty of seasonal opportunities
              in tourism, making it a top choice for UK travellers.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Thailand" className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Thailand" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Thailand" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

          {/* Canary Islands */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-black">Canary Islands, Spain</h2>
            <p className="mt-3 text-slate-600">
              If you want winter sun without long-haul travel, the Canary Islands
              are one of the best options from the UK.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/search?destination=Canary Islands" className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-5 py-3 font-bold text-white">
                Search flights
              </Link>
              <Link href="/search?destination=Canary Islands" className="rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white">
                Find hotels
              </Link>
              <Link href="/search?destination=Canary Islands" className="rounded-2xl border px-5 py-3 font-bold">
                Find jobs
              </Link>
            </div>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-white p-6 shadow-lg text-center">
          <h2 className="text-3xl font-black">
            Plan your route and follow the sun
          </h2>

          <p className="mt-3 text-slate-600">
            Use Kuafu to build your own travel plan across multiple destinations.
          </p>

          <div className="mt-6">
            <Link
              href="/route-generator"
              className="rounded-2xl bg-orange-500 hover:bg-orange-600 transition px-6 py-4 font-bold text-white"
            >
              Try the Route Generator
            </Link>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}