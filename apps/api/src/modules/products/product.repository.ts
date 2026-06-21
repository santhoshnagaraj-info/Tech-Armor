import Product from "./product.model";

export const createProduct = async (data: any) => {
  return Product.create(data);
};

export const getProducts = async () => {
  return Product.find();
};

export const getProductById = async (id: string) => {
  return Product.findById(id);
};

export const updateProduct = async (id: string, data: any) => {
  return Product.findByIdAndUpdate(id, data, {new: true,});
};

export const deleteProduct = async (id: string) => {
  return Product.findByIdAndDelete(id);
};


