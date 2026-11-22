import Link from "next/link";

export default function Home() {
  return (
    // 2 columns on desktop (text | image), stacked on mobile
    <section className="grid items-center gap-10 py-10 md:min-h-[70vh] md:grid-cols-2">
      {/* Left: text */}
      <div>
        {/* font-serif gives the editorial look from your reference */}
        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Winter Collection.
        </h1>
        <p className="mt-4 text-lg">Up to 40% off select styles.</p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-black px-10 py-4 text-sm text-white hover:bg-gray-800"
        >
          Shop now
        </Link>
      </div>

      {/* Right: image slot. Replace this div with <Image> when you have the photo */}
      <div className="aspect-square w-full" />
    </section>
  );
}