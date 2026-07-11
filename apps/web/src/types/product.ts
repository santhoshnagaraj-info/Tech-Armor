// src/types/product.ts 

export interface Product {
  _id?: string;
  name: string;
  description: string;
  categories: string;    // change to catagories if that's what your API returns
  image: string;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
}


export interface ProductsResponse {
  success: boolean;
  data: Product[];
}