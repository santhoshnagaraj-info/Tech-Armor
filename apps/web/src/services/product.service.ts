// src/services/product.service.ts

import api from "@/src/lib/axios";
import { ProductsResponse } from "@/src/types/product"; // 🚀 WHERE TO IMPORT IT


export const getProducts = async (): Promise<ProductsResponse["data"]> => {
  // 🚀 HOW TO SET IT: Type the Axios network fetch response
  const response = await api.get<ProductsResponse>("/products");

  // response.data now correctly knows it contains { success, data }
  return response.data.data; 
};


export const getProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};


export const createProduct = async ( product: ProductsResponse ) => {
  const { data } = await api.post( "/products", product);
  return data;
};


export const updateProduct = async ( id: string, product: ProductsResponse ) => {
  const { data } = await api.put( `/products/${id}`, product);
  return data;
};


export const deleteProduct = async ( id: string ) => { 
  const { data } = await api.delete(`/products/${id}`);
  return data;
};