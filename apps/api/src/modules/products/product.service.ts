import * as repository from "./product.repository";

export const createProduct = async (data: any) => {
  return repository.createProduct(data);
};

export const getProducts = async () => {
  return repository.getProducts();
};

export const getProductById = async (id: string) => {
  return repository.getProductById(id);
};

export const updateProduct = async (
  id: string,
  data: any
) => {
  return repository.updateProduct(id, data);
};

export const deleteProduct = async (id: string) => {
  return repository.deleteProduct(id);
};