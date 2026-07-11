"use client";

import { useProducts } from "@/src/hooks/useProducts";
import ProductGallery from "./ProductGallery";

export default function ProductDetails({
  id,
}: {
  id: string;
}) {
  const { data: product, isLoading } =
    useProducts(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <div className="grid md:grid-cols-2 gap-10">

        <ProductGallery image={product.image} />

        <div>

          <span className="text-blue-600">
            {product.categories}
          </span>

          <h1 className="text-4xl font-bold mt-3">
            {product.name}
          </h1>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold mt-8">
            ₹{product.price}
          </h2>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
}