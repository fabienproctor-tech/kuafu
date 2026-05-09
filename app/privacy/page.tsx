import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Kuafu",
  description:
    "Read Kuafu's privacy and cookie policy, including how analytics cookies are used.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-300">
              Privacy
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Privacy & Cookie Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              How Kuafu uses cookies, analytics and basic website data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Who we are
            </h2>
            <p className="leading-7 text-slate-700">
              Kuafu is a travel and work abroad discovery website. Our website
              address is https://www.kuafu.co.uk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Analytics cookies
            </h2>
            <p className="leading-7 text-slate-700">
              We use Google Analytics to understand how visitors use Kuafu, such
              as which pages are visited, which content is useful and how the
              website can be improved.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Analytics cookies are only used if you accept analytics cookies
              through our cookie banner.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              What information we collect
            </h2>
            <p className="leading-7 text-slate-700">
              We may collect anonymous or aggregated website usage information,
              such as page views, device type, browser type, approximate
              location and referral source.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Kuafu does not currently require users to create accounts or
              submit personal information to use the website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Affiliate and external links
            </h2>
            <p className="leading-7 text-slate-700">
              Kuafu may link to external travel, hotel, flight, job or affiliate
              partners. If you click an external link, you will leave Kuafu and
              the third-party website may use its own cookies and privacy
              practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Managing cookies
            </h2>
            <p className="leading-7 text-slate-700">
              You can accept or reject analytics cookies using the cookie banner.
              You can also clear cookies through your browser settings at any
              time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Contact
            </h2>
            <p className="leading-7 text-slate-700">
              If you have questions about this policy, please contact Kuafu
              through the social links shown in the website footer.
            </p>
          </section>

          <p className="mt-2 text-sm text-slate-500">
            Last updated: May 2026
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}