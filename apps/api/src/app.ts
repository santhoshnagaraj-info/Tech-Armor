import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env";
import apiRouter from "./routes";
import { notFound } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { requestLogger } from "./middlewares/requestLogger.middleware";

export const createApp = (): Application => {
  const app: Application = express();

  // 1. Security headers
  app.use(helmet());

  // 2. CORS configuration
  app.use(
    cors({
      origin: env.ALLOWED_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

  // 3. Body parsers
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  // 4. Request logging
  app.use(requestLogger);

  // 5. Mount API routes
  app.use("/api", apiRouter);

  // 6. 404 handler
  app.use(notFound);

  // 7. Centralized error handling
  app.use(errorMiddleware);

  return app;
};

export default createApp();
