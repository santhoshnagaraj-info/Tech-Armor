import { Request, Response } from "express";
import * as productService from "./product.service";
import { successResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { HttpStatus } from "../../constants/httpStatusCodes";
import {
  CreateProductInput,
  UpdateProductInput,
  ProductQueryParamsInput,
} from "./product.validation";

export const getProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const query = req.query as unknown as ProductQueryParamsInput;
    const products = await productService.getProducts(query);
    res.status(HttpStatus.OK).json(successResponse(products, "Products retrieved successfully"));
  }
);

export const getProductById = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    const product = await productService.getProductById(req.params.id);
    res.status(HttpStatus.OK).json(successResponse(product, "Product retrieved successfully"));
  }
);

export const createProduct = asyncHandler(
  async (req: Request<Record<string, never>, unknown, CreateProductInput>, res: Response) => {
    const product = await productService.createProduct(req.body);
    res.status(HttpStatus.CREATED).json(successResponse(product, "Product created successfully"));
  }
);

export const updateProduct = asyncHandler(
  async (req: Request<{ id: string }, unknown, UpdateProductInput>, res: Response) => {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(HttpStatus.OK).json(successResponse(product, "Product updated successfully"));
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request<{ id: string }>, res: Response) => {
    await productService.deleteProduct(req.params.id);
    res.status(HttpStatus.OK).json(successResponse(null, "Product deleted successfully"));
  }
);
