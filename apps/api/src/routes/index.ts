import { Router } from "express";
import productRoutes from "../modules/products/product.routes";
import categoryRoutes from "../modules/categories/category.routes";
import healthRoutes from "../modules/health/health.routes";

const apiRouter = Router();

apiRouter.use("/health", healthRoutes);
apiRouter.use("/products", productRoutes);
apiRouter.use("/categories", categoryRoutes);

export default apiRouter;
