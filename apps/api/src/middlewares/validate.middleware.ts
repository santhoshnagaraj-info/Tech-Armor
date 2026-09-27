import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodSchema, ZodError } from "zod";
import { HttpStatus } from "../constants/httpStatusCodes";

export interface RequestValidationSchemas {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
}

export const validate = (
  schemaOrSchemas: ZodSchema | RequestValidationSchemas
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      if ("parse" in schemaOrSchemas && typeof (schemaOrSchemas as ZodSchema).parse === "function") {
        const result = (schemaOrSchemas as ZodSchema).safeParse(req.body);
        if (!result.success) {
          res.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            message: "Validation failed",
            errors: result.error.flatten().fieldErrors,
          });
          return;
        }
        req.body = result.data;
      } else {
        const schemas = schemaOrSchemas as RequestValidationSchemas;

        if (schemas.body) {
          const bodyResult = schemas.body.safeParse(req.body);
          if (!bodyResult.success) {
            res.status(HttpStatus.BAD_REQUEST).json({
              success: false,
              message: "Invalid request body",
              errors: bodyResult.error.flatten().fieldErrors,
            });
            return;
          }
          req.body = bodyResult.data;
        }

        if (schemas.params) {
          const paramsResult = schemas.params.safeParse(req.params);
          if (!paramsResult.success) {
            res.status(HttpStatus.BAD_REQUEST).json({
              success: false,
              message: "Invalid URL parameters",
              errors: paramsResult.error.flatten().fieldErrors,
            });
            return;
          }
          req.params = paramsResult.data as Record<string, string>;
        }

        if (schemas.query) {
          const queryResult = schemas.query.safeParse(req.query);
          if (!queryResult.success) {
            res.status(HttpStatus.BAD_REQUEST).json({
              success: false,
              message: "Invalid query parameters",
              errors: queryResult.error.flatten().fieldErrors,
            });
            return;
          }
          req.query = queryResult.data as Record<string, string>;
        }
      }

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "Validation failed",
          errors: err.flatten().fieldErrors,
        });
        return;
      }
      next(err);
    }
  };
};