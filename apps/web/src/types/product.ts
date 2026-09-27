// src/types/product.ts

export interface Product {
  _id?: string;
  name: string;
  category?: string | { _id: string; name: string; slug?: string };
  categories?: string; // UI backward compatibility
  description: string;
  image: string;
  price: number;
  brand?: string;
  rating?: number;
  discount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export type ProductsResponse = ApiResponse<Product[]>;
export type SingleProductResponse = ApiResponse<Product>;