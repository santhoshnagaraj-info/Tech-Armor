import api from "@/src/lib/axios";

export const getCategories = () =>
  api.get("/categories");