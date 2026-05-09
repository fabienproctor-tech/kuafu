import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/kuafu-logo.png"
            alt="Kuafu - Chasing the Sun"
            className="h-14 w-auto object-contain transition duration-300 hover:scale-105 md:h-16"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <Link
            href="/search"
            className="transition hover:text-blue-600"
          >
            Search
          </Link>

          <Link
            href="/destinations"
            className="transition hover:text-blue-600"
          >
            Destinations
          </Link>

          <Link
            href="/jobs"
            className="transition hover:text-blue-600"
          >
            Work Abroad
          </Link>

          <Link
            href="/guides"
            className="transition hover:text-blue-600"
          >
            Guides
          </Link>

          <Link
            href="/route-generator"
            className="transition hover:text-blue-600"
          >
            Route Generator
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/search"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
          >
            Start Searching
          </Link>
        </div>
      </div>
    </header>
  );
}