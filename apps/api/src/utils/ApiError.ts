import { HttpStatusCode, HttpStatus } from "../constants/httpStatusCodes";

export class ApiError extends Error {
  public readonly statusCode: HttpStatusCode;
  public readonly isOperational: boolean;
  public readonly errors?: Record<string, string[] | undefined> | unknown[];

  constructor(
    statusCode: HttpStatusCode = HttpStatus.INTERNAL_SERVER_ERROR,
    message: string = "Internal Server Error",
    errors?: Record<string, string[] | undefined> | unknown[],
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errors = errors;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public static badRequest(message: string, errors?: Record<string, string[] | undefined>): ApiError {
    return new ApiError(HttpStatus.BAD_REQUEST, message, errors);
  }

  public static notFound(message: string = "Resource not found"): ApiError {
    return new ApiError(HttpStatus.NOT_FOUND, message);
  }

  public static unauthorized(message: string = "Unauthorized"): ApiError {
    return new ApiError(HttpStatus.UNAUTHORIZED, message);
  }

  public static forbidden(message: string = "Forbidden"): ApiError {
    return new ApiError(HttpStatus.FORBIDDEN, message);
  }

  public static conflict(message: string): ApiError {
    return new ApiError(HttpStatus.CONFLICT, message);
  }

  public static internal(message: string = "Internal Server Error"): ApiError {
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, message, undefined, false);
  }
}