import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-3 p-6 text-sm text-gray-600">
      
      {/* Clickable Logo */}
      <Link href="/">
        <img
          src="/kuafu-logo.png"
          alt="Kuafu - Chasing the Sun"
          className="h-10 w-auto opacity-80 hover:opacity-100 transition"
        />
      </Link>

      {/* Tagline */}
      <p className="text-xs tracking-wide text-gray-500">
  CHASING THE SUN
</p>

      {/* Copyright */}
      <p>© {new Date().getFullYear()} Kuafu</p>

<p className="text-xs text-gray-400 mt-2">
  Kuafu may earn commission from links to travel and job partners.
</p>

    </footer>
  );
  
}
