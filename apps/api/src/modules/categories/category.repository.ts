import { CategoryModel, CategoryDocument } from "./category.model";
import { CreateCategoryDTO, UpdateCategoryDTO } from "./category.types";

export const findAll = async (): Promise<CategoryDocument[]> => {
  return CategoryModel.find().sort({ name: 1 }).exec();
};

export const findById = async (id: string): Promise<CategoryDocument | null> => {
  return CategoryModel.findById(id).exec();
};

export const findBySlug = async (slug: string): Promise<CategoryDocument | null> => {
  return CategoryModel.findOne({ slug }).exec();
};

export const create = async (data: CreateCategoryDTO): Promise<CategoryDocument> => {
  return CategoryModel.create(data);
};

export const update = async (
  id: string,
  data: UpdateCategoryDTO
): Promise<CategoryDocument | null> => {
  return CategoryModel.findByIdAndUpdate(id, data, { new: true, runValidators: true }).exec();
};

export const remove = async (id: string): Promise<CategoryDocument | null> => {
  return CategoryModel.findByIdAndDelete(id).exec();
};
