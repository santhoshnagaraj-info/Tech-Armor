// src/store/product.store.ts 


import { create } from "zustand";
import { Product } from "@/src/types/product";

interface ProductStore {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedProduct: null,

  setSelectedProduct: (product) =>
    set({
      selectedProduct: product,
    }),
}));



