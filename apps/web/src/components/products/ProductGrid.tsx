"use client";

// src/components/product/ProductGrid.tsx    

import ProductCard from "./ProductCard";
import { useProducts } from "@/src/hooks/useProducts";

export default function ProductGrid() {
  const { data: products = [], isLoading } = useProducts();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="products" className="min-h-screen bg-gray-100 text-center px-15 py-7">
          <div className="grid grid-cols-5 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          {...product}
        />
      ))}
    </div>
    </div>
  );
}