import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").trim(),
  category: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Category must be a valid 24-character ObjectId"),
  description: z.string().min(5, "Description must be at least 5 characters").trim(),
  image: z.string().url("Image must be a valid URL").trim(),
  price: z.number().positive("Price must be greater than 0"),
  brand: z.string().trim().optional(),
  rating: z.number().min(0).max(5).optional(),
});

export const updateProductSchema = createProductSchema.partial();

export const productIdParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Product ObjectId format"),
});

export const productQuerySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  brand: z.string().optional(),
  minPrice: z.string().optional().transform((val) => (val ? parseFloat(val) : undefined)),
  maxPrice: z.string().optional().transform((val) => (val ? parseFloat(val) : undefined)),
  sortBy: z.enum(["price_asc", "price_desc", "rating", "latest"]).optional(),
  page: z.string().optional().transform((val) => (val ? parseInt(val, 10) : 1)),
  limit: z.string().optional().transform((val) => (val ? parseInt(val, 10) : 50)),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductQueryParamsInput = z.infer<typeof productQuerySchema>;
