"use client";
// src/hooks/useProducts.ts   


import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/src/services/product.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};




