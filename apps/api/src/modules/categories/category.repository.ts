import Category from "./category.model";

export const getCategories = async () => {
  return Category.find().sort({ name: 1 });
};


