import { Types } from "mongoose";
import { ICategory } from "../categories/category.types";

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  category: Types.ObjectId | ICategory;
  description: string;
  image: string;
  price: number;
  brand?: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductDTO {
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  brand?: string;
  rating?: number;
}

export interface UpdateProductDTO {
  name?: string;
  category?: string;
  description?: string;
  image?: string;
  price?: number;
  brand?: string;
  rating?: number;
}

export interface ProductQueryParams {
  category?: string;
  search?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "price_asc" | "price_desc" | "rating" | "latest";
  page?: number;
  limit?: number;
}
