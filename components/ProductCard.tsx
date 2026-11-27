import Link from "next/link";

type Props = {
  id: string;
  name: string;
  price: number;
  discount_price: number | null;
  images: string[];
};

export default function ProductCard({ id, name, price, discount_price, images }: Props) {
  return (
    <Link href={`/products/${id}`} className="group block">
      {/* Grey box until you add real images */}
      <div className="aspect-[3/4] overflow-hidden bg-stone-200">
        {images[0] && (
          <img
            src={images[0]}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-sm font-semibold">{name}</p>
      <p className="text-sm text-gray-700">
        ₹{discount_price ?? price}
        {discount_price && (
          <span className="ml-2 text-gray-400 line-through">₹{price}</span>
        )}
      </p>
    </Link>
  );
}