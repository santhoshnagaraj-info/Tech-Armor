// src/services/product.service.ts

import api from "@/src/libs/axios";
import { ProductsResponse } from "@/src/types/product"; // 🚀 WHERE TO IMPORT IT


export const getProducts = async (): Promise<ProductsResponse["data"]> => {
  // 🚀 HOW TO SET IT: Type the Axios network fetch response
  const response = await api.get<ProductsResponse>("/products");

  // response.data now correctly knows it contains { success, data }
  return response.data.data; 
};


