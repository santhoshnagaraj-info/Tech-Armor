import { Types } from "mongoose";
import { ProductModel, ProductDocument } from "./product.model";
import { CreateProductDTO, UpdateProductDTO, ProductQueryParams } from "./product.types";

export const find = async (params?: ProductQueryParams): Promise<ProductDocument[]> => {
  const query: Record<string, any> = {};

  if (params?.category) {
    query.category = new Types.ObjectId(params.category);
  }

  if (params?.brand) {
    query.brand = new RegExp(params.brand, "i");
  }

  if (params?.search) {
    query.$text = { $search: params.search };
  }

  if (params?.minPrice !== undefined || params?.maxPrice !== undefined) {
    query.price = {};
    if (params.minPrice !== undefined) query.price.$gte = params.minPrice;
    if (params.maxPrice !== undefined) query.price.$lte = params.maxPrice;
  }

  let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
  if (params?.sortBy === "price_asc") sortOption = { price: 1 };
  else if (params?.sortBy === "price_desc") sortOption = { price: -1 };
  else if (params?.sortBy === "rating") sortOption = { rating: -1 };

  const page = params?.page && params.page > 0 ? params.page : 1;
  const limit = params?.limit && params.limit > 0 ? params.limit : 50;
  const skip = (page - 1) * limit;

  return ProductModel.find(query)
    .populate("category", "name slug")
    .sort(sortOption)
    .skip(skip)
    .limit(limit)
    .exec();
};

export const findById = async (id: string): Promise<ProductDocument | null> => {
  return ProductModel.findById(id).populate("category", "name slug").exec();
};

export const create = async (data: CreateProductDTO): Promise<ProductDocument> => {
  const product = new ProductModel({
    ...data,
    category: new Types.ObjectId(data.category),
  });
  await product.save();
  return (await product.populate("category", "name slug")) as ProductDocument;
};

export const update = async (
  id: string,
  data: UpdateProductDTO
): Promise<ProductDocument | null> => {
  const updatePayload: Record<string, unknown> = { ...data };
  if (data.category) {
    updatePayload.category = new Types.ObjectId(data.category);
  }

  return ProductModel.findByIdAndUpdate(id, updatePayload, { new: true, runValidators: true })
    .populate("category", "name slug")
    .exec();
};

export const remove = async (id: string): Promise<ProductDocument | null> => {
  return ProductModel.findByIdAndDelete(id).exec();
};

export const count = async (params?: ProductQueryParams): Promise<number> => {
  const query: Record<string, any> = {};
  if (params?.category) query.category = new Types.ObjectId(params.category);
  if (params?.brand) query.brand = new RegExp(params.brand, "i");
  if (params?.search) query.$text = { $search: params.search };
  return ProductModel.countDocuments(query).exec();
};
