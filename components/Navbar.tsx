import Link from "next/link";
import AuthButton from "@/components/AuthButton";

const links = [
  { name: "New Arrivals", href: "/products?sort=new" },
  { name: "Men", href: "/products?category=men" },
  { name: "Women", href: "/products?category=women" },
  { name: "Kids", href: "/products?category=kids" },
  { name: "Sale", href: "/products?sale=true", red: true },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-[0.25em]">
          AUREN
        </Link>

        {/* Center links: mx-auto pushes them to the middle */}
        <div className="mx-auto hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative text-xs font-medium uppercase tracking-wider transition-colors ${
                link.red ? "text-red-300" : "text-white/85 hover:text-white"
              }`}
            >
              {link.name}
              {/* Underline that grows on hover */}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right side: login + cart (ml-auto keeps it right on mobile, where links are hidden) */}
        <div className="ml-auto flex items-center gap-6 text-xs font-medium uppercase tracking-widest md:ml-0">
          <AuthButton />
          <Link href="/cart" className="transition-colors hover:text-white/60">
            Cart (0)
          </Link>
        </div>
      </nav>
    </header>
  );
}