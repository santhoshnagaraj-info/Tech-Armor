// src/components/product/ProductCard.tsx   

import { Product } from "@/src/types/product";
import Image from "next/image";

export default function ProductCard({ _id, name, categories, imageUrl, description, price }: Product) {

  return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-8 text-center text-4xl font-bold text-gray-800"> Products </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">

        <div key={_id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-xl">

          <Image src={imageUrl} alt={name} className="h-56 w-full object-cover"/>

          <div className="p-5">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800"> {name} </h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"> {categories} </span>
            </div>

            <p className="mb-4 line-clamp-3 text-gray-600">
              {description}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-green-600">
                ₹{price}
              </p>

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </div>

    </div>
  </div>
);
}