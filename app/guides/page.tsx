import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const guides = [
  "Where is summer now?",
  "Best countries for UK students to work abroad",
  "How to plan a work and travel year",
  "Remote work abroad checklist",
  "Cheap flights from the UK to sunny destinations",
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-orange-600">
          Guides
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Travel guides built for SEO
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          These guide ideas can help Kuafu attract organic Google traffic and AI search traffic.
        </p>

        <div className="mt-10 grid gap-6">
          {guides.map((guide) => (
            <div key={guide} className="rounded-3xl bg-white p-6 shadow-lg">
              {guide === "Where is summer now?" ? (
  <Link href="/guides/where-is-summer-now">
    <h2 className="text-2xl font-black text-orange-600 hover:underline">
      {guide}
    </h2>
  </Link>
) : (
  <h2 className="text-2xl font-black">{guide}</h2>
)}
              <p className="mt-2 text-slate-600">
                Turn this into a long-form article with FAQs, destination links and affiliate modules.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}