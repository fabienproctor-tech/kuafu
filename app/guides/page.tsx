import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const guides = [
   {
    title: "Best Countries for Digital Nomads in 2026",
    href: "/guides/best-countries-for-digital-nomads",
  },
  {
    title: "Where is summer now?",
    href: "/guides/where-is-summer-now",
  },
  {
    title: "Where to travel in December from the UK",
    href: "/guides/where-to-travel-in-december-from-uk",
  },
  {
    title: "Best countries to work abroad from the UK",
    href: "/guides/best-countries-to-work-abroad-uk",
  },
  {
    title: "Cheap summer destinations in Europe",
    href: "/guides/cheap-summer-destinations-europe",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Guides
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Travel guides built for SEO
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          These guide ideas can help Kuafu attract organic Google traffic and AI search traffic.
        </p>

        <div className="mt-10 grid gap-6">
          {guides.map((guide) =>
  guide.href === "#" ? (
    <div
      key={guide.title}
      className="rounded-3xl bg-white p-6 shadow-lg opacity-70"
    >
      <h2 className="text-2xl font-black">{guide.title}</h2>
      <p className="mt-2 text-slate-600">
        Coming soon.
      </p>
    </div>
  ) : (
    <Link key={guide.title} href={guide.href}>
      <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">
        <h2 className="text-2xl font-black text-blue-600">
          {guide.title}
        </h2>
        <p className="mt-2 text-slate-600">
          Turn this into a long-form article with FAQs, destination links and affiliate modules.
        </p>
      </div>
    </Link>
  )
)}
        </div>
      </section>

      <Footer />
    </main>
  );
}