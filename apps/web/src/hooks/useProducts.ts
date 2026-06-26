"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/src/services/product.service";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return products;
}