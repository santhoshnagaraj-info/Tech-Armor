"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/src/services/product.service";
import { Product } from "../types/product";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return products;
}


