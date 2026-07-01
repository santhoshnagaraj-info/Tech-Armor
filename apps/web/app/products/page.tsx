




// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getProducts } from "@/src/services/product.service";
// import { Product } from "@/src/types/product";



// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data = await getProducts();
//         console.log("Data check: ",data);
//         setProducts(data.data);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
  
//     fetchProducts();
//   }, []);

//   return (
//   <div className="min-h-screen bg-gray-100 p-8">
//     <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
//       Products
//     </h1>

//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//       {products.map((product) => (
//         <div
//           key={product._id}
//           className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl"
//         >
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             className="h-56 w-full object-cover"
//           />

//           <div className="p-5">
//             <div className="mb-2 flex items-center justify-between">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {product.name}
//               </h2>

//               <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
//                 {product.categories}
//               </span>
//             </div>

//             <p className="mb-4 line-clamp-3 text-gray-600">
//               {product.description}
//             </p>

//             <div className="flex items-center justify-between">
//               <p className="text-2xl font-bold text-green-600">
//                 ₹{product.price}
//               </p>

//               <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//     </div>
//   </div>
// );
// }