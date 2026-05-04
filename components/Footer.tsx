import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-3 bg-white p-6 text-sm text-slate-600">
      
      {/* Clickable Logo */}
      <Link href="/">
        <img
          src="/kuafu-logo.png"
          alt="Kuafu - Follow the light. Find your path."
          className="h-10 w-auto opacity-80 hover:opacity-100 transition"
        />
      </Link>

      {/* Tagline */}
      <p className="text-sm text-slate-600">
        Follow the light. Find your path.
      </p>

      {/* Copyright */}
      <p>© {new Date().getFullYear()} Kuafu</p>

      <p className="text-xs text-gray-400 mt-2">
        Kuafu may earn commission from links to travel and job partners.
      </p>

    </footer>
  );
}