// src/components/product/ProductForm.tsx    

"use client";

import useProducts from "@/src/hooks/useProducts";
import ProductCard from "@/src/components/products/ProductCard";


export default function ProductsPage() {
  
  const products = useProducts();
  console.log("Products list: ",products);

  return (
  <div className="min-h-screen bg-gray-100 text-center px-15 py-7">
    {/* <h1 className="p-5 text-4xl font-bold text-gray-800"> Products </h1> */}
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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








// "use client";

// import { useState } from "react";
// import { createProduct } from "@/src/services/product.service";

// export default function ProductForm() {

//   const [name, setName] = useState("");

//   const [price, setPrice] = useState(0);

//   const [description, setDescription] =
//     useState("");

//   const handleSubmit = async (
//     e: React.FormEvent
//   ) => {

//     e.preventDefault();

//     await createProduct({
//       name,
//       price,
//       description,
//     });

//     setName("");
//     setPrice(0);
//     setDescription("");

//     alert("Created");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4"
//     >

//       <input
//         className="border p-2 w-full"
//         placeholder="Name"
//         value={name}
//         onChange={(e) =>
//           setName(e.target.value)
//         }
//       />

//       <input
//         className="border p-2 w-full"
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) =>
//           setPrice(Number(e.target.value))
//         }
//       />

//       <textarea
//         className="border p-2 w-full"
//         placeholder="Description"
//         value={description}
//         onChange={(e) =>
//           setDescription(e.target.value)
//         }
//       />

//       <button
//         className="bg-blue-600 text-white px-5 py-2 rounded"
//       >
//         Save
//       </button>

//     </form>
//   );
// }