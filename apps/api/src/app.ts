import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./database/mongodb";
import productRoutes from "./modules/products/product.routes";
import { notFound } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorMiddleware);

export default app;