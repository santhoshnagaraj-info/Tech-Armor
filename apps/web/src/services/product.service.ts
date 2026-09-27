// src/services/product.service.ts

import api from "@/src/lib/axios";
import { Product, ProductsResponse, SingleProductResponse, ApiResponse } from "@/src/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>("/products");
  return response.data.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get<SingleProductResponse>(`/products/${id}`);
  return response.data.data;
};

export const createProduct = async (product: Partial<Product>): Promise<Product> => {
  const response = await api.post<SingleProductResponse>("/products", product);
  return response.data.data;
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await api.put<SingleProductResponse>(`/products/${id}`, product);
  return response.data.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete<ApiResponse<null>>(`/products/${id}`);
};