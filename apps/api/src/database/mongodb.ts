import mongoose from "mongoose";
import { env } from "../config/env";
import { logger } from "../utils/logger";

export const connectDB = async (): Promise<typeof mongoose> => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(env.MONGO_URL);

    logger.info({
      msg: "MongoDB connected successfully",
      host: conn.connection.host,
      database: conn.connection.name,
    });

    mongoose.connection.on("error", (err) => {
      logger.error({ msg: "MongoDB connection error", error: err });
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn({ msg: "MongoDB connection disconnected" });
    });

    return conn;
  } catch (error) {
    logger.fatal({ msg: "Failed to connect to MongoDB", error });
    process.exit(1);
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
  logger.info({ msg: "MongoDB disconnected gracefully" });
};
