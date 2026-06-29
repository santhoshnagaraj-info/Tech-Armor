// src/components/product/ProductForm.tsx    

"use client";

import useProducts from "@/src/hooks/useProducts";
import ProductCard from "./ProductCard";


export default function ProductsPage() {
  
  const products = useProducts();
  console.log("Products list: ",products);

  return (
  <div className="min-h-screen bg-gray-100 text-center p-8">
    <h1 className="mb-8 text-4xl font-bold text-gray-800"> Products </h1>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price} 
          categories = {product.categories}
          image= {product.image}
          description = {product.description}
        />
      ))}
    </div>
  </div>
);
}




// import useProducts from "@/src/hooks/useProducts";
// import ProductCard from "@/src/components/products/ProductCard";



// export default function ProductsPage() {
//   const products = useProducts();

//   return (
//     <div className="grid gap-4">
//       {products.map((product) => (
//         <ProductCard
//           key={product._id}
//           name={product.name}
//           price={product.price} 
//           categories = {product.categories}
//           imageUrl= {product.imageUrl}
//           description = {product.description}
//         />
//       ))}
//     </div>
//   );
// }


