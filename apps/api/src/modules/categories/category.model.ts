import mongoose, { Schema, Document } from "mongoose";
import { ICategory } from "./category.types";

export interface CategoryDocument extends Omit<ICategory, "_id">, Document {}

const categorySchema = new Schema<CategoryDocument>(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      minlength: [2, "Category name must be at least 2 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, "Slug must only contain lowercase letters, numbers, and hyphens"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete (ret as { __v?: unknown }).__v;
        return ret;
      },
    },
  }
);

export const CategoryModel = mongoose.model<CategoryDocument>("Category", categorySchema);
