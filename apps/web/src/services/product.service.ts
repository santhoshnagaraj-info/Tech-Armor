// src/services/product.service.ts

import api from "@/src/libs/axios";

export const getProducts = async () => {
  const response = await api.get("/products");

  return response.data;
};