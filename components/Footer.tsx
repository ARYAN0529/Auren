import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

        <Link
          href="/"
          className="text-xl font-bold tracking-[0.25em]"
        >
          AUREN
        </Link>

        <p className="text-xs tracking-wide text-gray-500">
          © 2026 AUREN. All rights reserved.
        </p>

        <p className="text-xs uppercase tracking-widest text-gray-400">
          Designed for everyday living.
        </p>

      </div>
    </footer>
  );
}