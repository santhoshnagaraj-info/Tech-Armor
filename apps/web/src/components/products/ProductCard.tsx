// src/components/product/ProductCard.tsx   

import { Product } from "@/src/types/product";
import Image from "next/image";

export default function ProductCard({ _id, name, categories, image, description, price }: Product) {
  return (
    <div key={_id} className="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:border-white/70 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      {/* Structural Image Container matching the high-end showcase style */}
      <div className="h-64 relative bg-gray-50 flex items-center justify-center p-0 overflow-hidden">
        <Image  src={image}  alt={name}  width={800}  height={400} priority className="object-contain transition-transform duration-500 group-hover:scale-105"/>
         
        {/* Absolute Badge Format */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/80 border border-slate-200 backdrop-blur-sm text-blue-600 text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider"> {categories} </span>
        </div>
      </div>

      {/* Info Body Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate">{name}</h2>
        <p className="text-gray-600 font-normal text-sm mb-4 line-clamp-1">{description}</p>

        {/* Unified Bottom Row Grid Structure */}
        <div className="mt-auto pt-2">
          <div className="flex items-center justify-between mb-4"> <span className="text-2xl font-black text-green-600 tracking-tighter"> ₹{price} </span> </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-slate-50 border border-slate-200 text-gray-700 font-medium py-2.5 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all active:scale-95 text-xs uppercase tracking-wider">
              Details
            </button>
            <button className="bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all active:scale-95 text-xs uppercase tracking-wider">
              Add To Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}