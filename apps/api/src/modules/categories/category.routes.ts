import { Router } from "express";
import * as controller from "./category.controller";
import { validate } from "../../middlewares/validate.middleware";
import {
  createCategorySchema,
  updateCategorySchema,
  categoryIdParamSchema,
} from "./category.validation";

const router = Router();

router.get("/", controller.getCategories);

router.get(
  "/:id",
  validate({ params: categoryIdParamSchema }),
  controller.getCategoryById
);

router.post(
  "/",
  validate({ body: createCategorySchema }),
  controller.createCategory
);

router.put(
  "/:id",
  validate({ params: categoryIdParamSchema, body: updateCategorySchema }),
  controller.updateCategory
);

router.delete(
  "/:id",
  validate({ params: categoryIdParamSchema }),
  controller.deleteCategory
);

export default router;
