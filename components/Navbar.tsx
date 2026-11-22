import Link from "next/link";

const links = [
  { name: "New", href: "/products?sort=new" },
  { name: "Men", href: "/products?category=men" },
  { name: "Women", href: "/products?category=women" },
  { name: "Kids", href: "/products?category=kids" },
  { name: "Sale", href: "/products?sale=true", red: true },
];

export default function Navbar() {
  return (
    // No border/background of its own: it blends into the beige page
    <header className="sticky top-0 z-50 bg-sand">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-10 px-4">
        <Link href="/" className="text-2xl font-bold tracking-widest text-wine">
          AUREN
        </Link>

        {/* Links sit next to the logo; hidden on mobile for now */}
        <div className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className={l.red ? "text-red-600" : "hover:text-wine"}
            >
              {l.name}
            </Link>
          ))}
        </div>

        {/* ml-auto pushes the cart to the far right */}
        <Link href="/cart" className="ml-auto text-sm hover:text-wine">
          Cart (0)
        </Link>
      </nav>
    </header>
  );
}