import { Router } from "express";
import * as controller from "./product.controller";
import { validate } from "../../middlewares/validate.middleware";
import {
  createProductSchema,
  updateProductSchema,
  productIdParamSchema,
  productQuerySchema,
} from "./product.validation";

const router = Router();

router.get(
  "/",
  validate({ query: productQuerySchema }),
  controller.getProducts
);

router.get(
  "/:id",
  validate({ params: productIdParamSchema }),
  controller.getProductById
);

router.post(
  "/",
  validate({ body: createProductSchema }),
  controller.createProduct
);

router.put(
  "/:id",
  validate({ params: productIdParamSchema, body: updateProductSchema }),
  controller.updateProduct
);

router.delete(
  "/:id",
  validate({ params: productIdParamSchema }),
  controller.deleteProduct
);

export default router;
