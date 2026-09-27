import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError";
import { HttpStatus } from "../constants/httpStatusCodes";
import { logger } from "../utils/logger";
import { env } from "../config/env";

export const errorMiddleware: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  // 1. ApiError domain exception
  if (err instanceof ApiError) {
    if (!err.isOperational) {
      logger.error({ err, path: req.path, method: req.method }, "Non-operational ApiError occurred");
    }

    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
      ...(env.NODE_ENV === "development" ? { stack: err.stack } : {}),
    });
    return;
  }

  // 2. Zod validation error
  if (err instanceof ZodError) {
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: "Validation failed",
      errors: err.flatten().fieldErrors,
    });
    return;
  }

  // 3. Mongoose CastError (e.g. invalid ObjectId format)
  if (err instanceof mongoose.Error.CastError) {
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: `Invalid ${err.path}: ${err.value}`,
    });
    return;
  }

  // 4. Mongoose ValidationError
  if (err instanceof mongoose.Error.ValidationError) {
    const errors: Record<string, string> = {};
    for (const [key, val] of Object.entries(err.errors)) {
      errors[key] = val.message;
    }
    res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      message: "Database validation error",
      errors,
    });
    return;
  }

  // 5. MongoDB duplicate key error (code 11000)
  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code: unknown }).code === 11000
  ) {
    const keyPattern = (err as { keyPattern?: Record<string, unknown> }).keyPattern;
    const field = keyPattern ? Object.keys(keyPattern)[0] : "field";
    res.status(HttpStatus.CONFLICT).json({
      success: false,
      message: `Duplicate value entered for unique field: '${field}'`,
    });
    return;
  }

  // 6. Generic unhandled error
  const standardError = err instanceof Error ? err : new Error(String(err));
  logger.error(
    {
      err: standardError,
      path: req.path,
      method: req.method,
      body: req.body,
    },
    "Unhandled server error"
  );

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: env.NODE_ENV === "production" ? "Internal Server Error" : standardError.message,
    ...(env.NODE_ENV === "development" ? { stack: standardError.stack } : {}),
  });
};