// apps/api/src/modules/products/product.routes.ts


import { Router } from "express";

import * as controller from "./product.controller";

import { validate } from "../../middlewares/validate.middleware";

import { productSchema } from "./product.validation";

const router = Router();

router.post("/", validate(productSchema), controller.createProduct);

router.get("/", controller.getProducts);

router.get("/:id", controller.getProductById);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

export default router;


