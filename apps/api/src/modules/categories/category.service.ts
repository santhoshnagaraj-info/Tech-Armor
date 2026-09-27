import * as categoryRepo from "./category.repository";
import { CategoryDocument } from "./category.model";
import { CreateCategoryDTO, UpdateCategoryDTO } from "./category.types";
import { ApiError } from "../../utils/ApiError";

export const getCategories = async (): Promise<CategoryDocument[]> => {
  return categoryRepo.findAll();
};

export const getCategoryById = async (id: string): Promise<CategoryDocument> => {
  const category = await categoryRepo.findById(id);
  if (!category) {
    throw ApiError.notFound(`Category with ID '${id}' not found`);
  }
  return category;
};

export const createCategory = async (data: CreateCategoryDTO): Promise<CategoryDocument> => {
  const existing = await categoryRepo.findBySlug(data.slug);
  if (existing) {
    throw ApiError.conflict(`Category with slug '${data.slug}' already exists`);
  }
  return categoryRepo.create(data);
};

export const updateCategory = async (
  id: string,
  data: UpdateCategoryDTO
): Promise<CategoryDocument> => {
  const updated = await categoryRepo.update(id, data);
  if (!updated) {
    throw ApiError.notFound(`Category with ID '${id}' not found`);
  }
  return updated;
};

export const deleteCategory = async (id: string): Promise<void> => {
  const deleted = await categoryRepo.remove(id);
  if (!deleted) {
    throw ApiError.notFound(`Category with ID '${id}' not found`);
  }
};