"use client";

// src/components/product/ProductCard.tsx   

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/src/types/product";

export default function ProductCard(product: Product) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:border-white/70 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      <Link href={`/products/${product._id}`}>
        <div className="h-64 relative bg-gray-50 cursor-pointer items-center justify-center p-0 overflow-hidden">
        <Image  src={product.image}  alt={product.name}  width={800}  height={400} priority className="object-contain transition-transform duration-500 group-hover:scale-105"/>
         
        {/* Absolute Badge Format */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/80 border border-slate-200 backdrop-blur-sm text-blue-600 text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider"> {product.categories} </span>
        </div>
      </div>

      {/* Info Body Container */}
      <div className="p-6 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate">{product.name}</h2>
        <p className="text-gray-600 font-normal text-sm mb-4 line-clamp-1">{product.description}</p>

        {/* Unified Bottom Row Grid Structure */}
        <div className="mt-auto pt-2 grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between m-1"> <span className="text-2xl font-black text-green-600 tracking-tighter"> ₹{product.price} </span> </div>

          {/* <div className="grid grid-cols-2 gap-3">
            <button className="bg-slate-50 border border-slate-200 text-gray-700 font-medium py-2.5 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 text-xs uppercase tracking-wider">
              Details
            </button> */}
            <button className="bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all active:scale-95 text-xs uppercase tracking-wider">
              Add To Cart
            </button>
          {/* </div> */}
        </div>
      </div>
    </Link>
    </div>
  );
}
