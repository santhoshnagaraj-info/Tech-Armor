import * as productRepo from "./product.repository";
import * as categoryRepo from "../categories/category.repository";
import { ProductDocument } from "./product.model";
import { CreateProductDTO, UpdateProductDTO, ProductQueryParams } from "./product.types";
import { ApiError } from "../../utils/ApiError";

export const getProducts = async (params?: ProductQueryParams): Promise<ProductDocument[]> => {
  return productRepo.find(params);
};

export const getProductById = async (id: string): Promise<ProductDocument> => {
  const product = await productRepo.findById(id);
  if (!product) {
    throw ApiError.notFound(`Product with ID '${id}' not found`);
  }
  return product;
};

export const createProduct = async (data: CreateProductDTO): Promise<ProductDocument> => {
  // Validate category existence
  const category = await categoryRepo.findById(data.category);
  if (!category) {
    throw ApiError.badRequest(`Category with ID '${data.category}' does not exist`);
  }

  return productRepo.create(data);
};

export const updateProduct = async (
  id: string,
  data: UpdateProductDTO
): Promise<ProductDocument> => {
  if (data.category) {
    const category = await categoryRepo.findById(data.category);
    if (!category) {
      throw ApiError.badRequest(`Category with ID '${data.category}' does not exist`);
    }
  }

  const updated = await productRepo.update(id, data);
  if (!updated) {
    throw ApiError.notFound(`Product with ID '${id}' not found`);
  }
  return updated;
};

export const deleteProduct = async (id: string): Promise<void> => {
  const deleted = await productRepo.remove(id);
  if (!deleted) {
    throw ApiError.notFound(`Product with ID '${id}' not found`);
  }
};
