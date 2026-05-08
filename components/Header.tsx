import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md md:p-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="/kuafu-logo.png"
            alt="Kuafu - Chasing the Sun"
            className="h-16 w-auto max-w-[180px] object-contain md:h-14"
          />
        </Link>

        <nav className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-700 md:gap-4">
          <Link href="/search">Search</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/jobs">Work Abroad</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/route-generator">Route Generator</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}