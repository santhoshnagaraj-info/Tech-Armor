import { Request, Response } from "express";
import mongoose from "mongoose";
import { successResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import { HttpStatus } from "../../constants/httpStatusCodes";

export const getHealth = asyncHandler(
  async (_req: Request, res: Response) => {
    const isDbConnected = mongoose.connection.readyState === 1;

    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: isDbConnected ? "connected" : "disconnected",
    };

    res.status(HttpStatus.OK).json(successResponse(healthData, "Service is healthy"));
  }
);
