"use client"; // needed because the tabs use useState (browser-only state)

import { useState } from "react";
import Link from "next/link";

type Item = { name: string; type: string; price: number; oldPrice?: number };

// Mock data per tab. Later this comes from the product data (Step 2)
const data: Record<string, Item[]> = {
  Women: [
    { name: "Wool Blend Coat", type: "Women's", price: 4999 },
    { name: "Knit Cardigan", type: "Women's", price: 2499, oldPrice: 3299 },
    { name: "High-Rise Jeans", type: "Women's", price: 1999 },
    { name: "Satin Dress", type: "Women's", price: 3499 },
    { name: "Puffer Jacket", type: "Women's", price: 3999, oldPrice: 5499 },
  ],
  Men: [
    { name: "Flannel Shirt", type: "Men's", price: 1799 },
    { name: "Bomber Jacket", type: "Men's", price: 3999, oldPrice: 4999 },
    { name: "Slim Chinos", type: "Men's", price: 1999 },
    { name: "Crew Sweater", type: "Men's", price: 2299 },
    { name: "Denim Jacket", type: "Men's", price: 3299 },
  ],
  Kids: [
    { name: "Hoodie Set", type: "Kids'", price: 1499 },
    { name: "Winter Jacket", type: "Kids'", price: 2499, oldPrice: 2999 },
    { name: "Joggers", type: "Kids'", price: 899 },
    { name: "Printed Tee", type: "Kids'", price: 599 },
    { name: "Woolen Cap", type: "Kids'", price: 399 },
  ],
};

const tabs = Object.keys(data);

export default function HolidayGifts() {
  // which tab is active; the grid below re-renders when this changes
  const [active, setActive] = useState("Women");

  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-2xl font-semibold">Holiday Gifts</h2>

      {/* Tab switcher */}
      <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 rounded-md bg-gray-100 p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded py-3 text-sm font-medium transition ${
              active === t ? "bg-white shadow-sm" : "text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* overflow-x-auto = sideways scroll; snap-x makes cards click into place */}
      <div className="mt-8 flex snap-x gap-1 overflow-x-auto">
        {data[active].map((p) => (
          <div key={p.name} className="w-72 shrink-0 snap-start">
            {/* Soft grey box = image slot. Swap for <Image> later */}
            <div className="aspect-square bg-stone-100" />
            <div className="px-4 pb-6 pt-4 text-sm">
              <p className="font-semibold">{p.name}</p>
              <p className="text-gray-500">{p.type}</p>
              <p className="mt-1 text-gray-600">₹{p.price}</p>
              {/* line-through only shows when there's a sale price */}
              {p.oldPrice && (
                <p className="text-gray-400 line-through">₹{p.oldPrice}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link href="/products" className="text-sm font-medium underline">
          Shop all
        </Link>
      </div>
    </section>
  );
}