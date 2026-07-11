// src/services/product.service.ts

import api from "@/src/lib/axios";
import { Product, ProductsResponse } from "@/src/types/product";      // 🚀 WHERE TO IMPORT IT


export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>("/products");

  return response.data.data;
};

export const getProduct = async (
  id: string
): Promise<Product> => {
  const response = await api.get(`/products/${id}`);

  return response.data.data;
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