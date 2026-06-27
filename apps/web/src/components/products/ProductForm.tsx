// src/components/product/ProductForm.tsx    

"use client";

import useProducts from "@/src/hooks/useProducts";
import ProductCard from "@/src/components/product/ProductCard";



export default function ProductsPage() {
  const products = useProducts();

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price} 
          categories = {product.categories}
          imageUrl= {product.imageUrl}
          description = {product.description}
        />
      ))}
    </div>
  );
}


