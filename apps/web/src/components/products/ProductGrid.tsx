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
    <div id="products" className="p-15 text-center min-h-screen bg-gray-100 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
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

