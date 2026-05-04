import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-5 shadow-md rounded-b-2xl">
      
      {/* Clickable Logo */}
      <Link href="/">
        <img
          src="/kuafu-logo.png"
          alt="Kuafu - Chasing the Sun"
          className="h-14 w-auto cursor-pointer"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex gap-4">
        <Link href="/search">Search</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/guides">Guides</Link>
        <Link href="/route-generator">Route Generator</Link>
      </nav>
      
    </header>
  );
}