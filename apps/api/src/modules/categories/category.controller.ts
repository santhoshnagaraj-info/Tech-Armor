import { Request, Response } from "express";
import * as categoryService from "./category.service";
import { successResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { HttpStatus } from "../../constants/httpStatusCodes";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.validation";

export const getCategories = asyncHandler(
  async (_req: Request, res: Response) => {
    const categories = await categoryService.getCategories();
    res.status(HttpStatus.OK).json(successResponse(categories, "Categories retrieved successfully"));
  }
);

export const getCategoryById = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    const category = await categoryService.getCategoryById(req.params.id);
    res.status(HttpStatus.OK).json(successResponse(category, "Category retrieved successfully"));
  }
);

export const createCategory = asyncHandler(
  async (req: Request<Record<string, never>, unknown, CreateCategoryInput>, res: Response) => {
    const category = await categoryService.createCategory(req.body);
    res.status(HttpStatus.CREATED).json(successResponse(category, "Category created successfully"));
  }
);

export const updateCategory = asyncHandler(
  async (req: Request<{ id: string }, unknown, UpdateCategoryInput>, res: Response) => {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.status(HttpStatus.OK).json(successResponse(category, "Category updated successfully"));
  }
);

export const deleteCategory = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    await categoryService.deleteCategory(req.params.id);
    res.status(HttpStatus.OK).json(successResponse(null, "Category deleted successfully"));
  }
);