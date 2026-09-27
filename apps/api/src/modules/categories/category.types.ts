import { Types } from "mongoose";

export interface ICategory {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCategoryDTO {
  name: string;
  slug: string;
}

export interface UpdateCategoryDTO {
  name?: string;
  slug?: string;
}
