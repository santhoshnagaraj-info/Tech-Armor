// apps/api/src/modules/products/product.routes.ts


import { Router } from "express";

import * as controller from "./product.controller";

const router = Router();

router.post("/", controller.createProduct);

router.get("/", controller.getProducts);

router.get("/:id", controller.getProductById);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

export default router;


