import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "./product.types";

export interface ProductDocument extends Omit<IProduct, "_id">, Document {}

const productSchema = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product name must be at least 3 characters"],
      index: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Product category is required"],
      index: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      minlength: [5, "Description must be at least 5 characters"],
    },
    image: {
      type: String,
      required: [true, "Product image URL is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be non-negative"],
      index: true,
    },
    brand: {
      type: String,
      trim: true,
      default: "Generic",
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be greater than 5"],
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

// Compound text index for search
productSchema.index({ name: "text", description: "text", brand: "text" });

export const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);