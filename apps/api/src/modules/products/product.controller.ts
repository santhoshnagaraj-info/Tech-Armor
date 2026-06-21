// apps/api/src/modules/products/product.controller.ts


import { Request, Response } from "express";
import * as service from "./product.service";


export const createProduct = async (req: Request, res: Response) => {
  const product = await service.createProduct(req.body);
  res.status(201).json(product);
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await service.getProducts();
  res.status(200).json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await service.getProductById(req.params.id);
  res.status(200).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await service.updateProduct(req.params.id, req.body);
  res.status(200).json(product);
};

export const deleteProduct = async ( req: Request, res: Response) => {
  await service.deleteProduct(req.params.id);
  res.status(200).json({message: "Deleted Successfully",});
};


