import Image from "next/image";
import Link from "next/link";
import HolidayGifts from "@/components/HolidayGifts";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/christmas-new-year.jpg"
          alt="Winter collection"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className=" absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-white">
          <h1 className=" mt-50 font-serif text-5xl leading-tight md:text-7xl">
            Black Friday Sale.
          </h1>

          <p className="mt-3 text-lg">
            Up to 40% off select styles.
          </p>

          <Link
            href="/products"
            className="group mt-8 inline-flex items-center gap-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Shop now
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
             →
            </span>
          </Link>
        </div>
      </section>

      <HolidayGifts />
    </>
  );
}