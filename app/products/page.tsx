import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/ProductCard";

type Params = Promise<{ category?: string; sale?: string }>;

// Fetches data, so it sits inside <Suspense> below
async function ProductGrid({ searchParams }: { searchParams: Params }) {
  const { category, sale } = await searchParams;
  const supabase = await createClient();

  // !inner lets us filter by the category slug
  let query = supabase
    .from("products")
    .select("id,name,price,discount_price,images,categories!inner(slug)")
    .order("created_at", { ascending: false });

  if (category) query = query.eq("categories.slug", category);
  if (sale) query = query.not("discount_price", "is", null);

  const { data: products, error } = await query;

  if (error) return <p>Error: {error.message}</p>;
  if (!products?.length) return <p>No products found.</p>;

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}

export default function ProductsPage({ searchParams }: { searchParams: Params }) {
  return (
    <>
      {/* Wine band keeps the white navbar text readable */}
      <div className="bg-wine pb-10 pt-28 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl">Shop</h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <Suspense fallback={<p>Loading...</p>}>
          <ProductGrid searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
}