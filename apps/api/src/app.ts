import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import productRoutes from "./modules/products/product.routes";
import categoryRoutes from "./modules/categories/category.routes";
import { notFound } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use(notFound);
app.use(errorMiddleware);

export default app;