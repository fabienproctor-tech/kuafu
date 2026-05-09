import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <Link href="/">
            <img
              src="/kuafu-logo.png"
              alt="Kuafu - Follow the light. Find your path."
              className="h-14 w-auto transition hover:opacity-90"
            />
          </Link>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Kuafu helps travellers discover sunny destinations, work abroad
            opportunities and smarter travel routes.
          </p>

          <p className="mt-4 text-sm font-medium text-blue-900">
            Follow the light. Find your path.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
            Explore
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/search" className="hover:text-blue-600">
              Search
            </Link>

            <Link href="/destinations" className="hover:text-blue-600">
              Destinations
            </Link>

            <Link href="/guides" className="hover:text-blue-600">
              Guides
            </Link>

            <Link href="/route-generator" className="hover:text-blue-600">
              Route Generator
            </Link>

            <Link href="/privacy" className="hover:text-blue-600">
  Privacy & Cookies
</Link>
          </div>
        </div>

        {/* Work Abroad */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
            Work Abroad
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>

            <Link
              href="/guides/best-countries-to-work-abroad-uk"
              className="hover:text-blue-600"
            >
              Best Countries to Work Abroad
            </Link>

            <Link
              href="/guides/best-countries-for-digital-nomads"
              className="hover:text-blue-600"
            >
              Digital Nomad Guide
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
            Follow Kuafu
          </h3>

          <div className="mt-4 flex gap-4 text-blue-900">
            <a
              href="https://www.instagram.com/kuafutravel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-orange-500"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/kuafutravel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition hover:text-orange-500"
            >
              <FaFacebook size={22} />
            </a>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600">
            Travel inspiration, destination guides and work abroad ideas for UK
            travellers.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Kuafu. All rights reserved.</p>

          <p>
            Kuafu may earn commission from links to travel and affiliate
            partners.
          </p>
        </div>
      </div>
    </footer>
  );
}