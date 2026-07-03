import * as repository from "./category.repository";

export const getCategories = async () => {
  return repository.getCategories();
};