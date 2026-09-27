import { createApp } from "./app";
import { connectDB, disconnectDB } from "./database/mongodb";
import { env } from "./config/env";
import { logger } from "./utils/logger";

const bootstrap = async (): Promise<void> => {
  // 1. Connect to Database
  await connectDB();

  // 2. Initialize Express Application
  const app = createApp();

  // 3. Start Listening
  const server = app.listen(env.PORT, () => {
    logger.info({
      msg: `🚀 Tech-Armor API running successfully on port ${env.PORT}`,
      env: env.NODE_ENV,
      port: env.PORT,
      url: `http://localhost:${env.PORT}/api`,
    });
  });

  // 4. Graceful Shutdown Handlers
  const handleShutdown = async (signal: string): Promise<void> => {
    logger.info({ msg: `Received ${signal}. Shutting down gracefully...` });

    server.close(async () => {
      logger.info({ msg: "HTTP server closed" });
      await disconnectDB();
      process.exit(0);
    });

    // Force close after 10s if hung
    setTimeout(() => {
      logger.error({ msg: "Could not close connections in time, forcefully shutting down" });
      process.exit(1);
    }, 10000);
  };

  process.on("SIGTERM", () => handleShutdown("SIGTERM"));
  process.on("SIGINT", () => handleShutdown("SIGINT"));

  process.on("unhandledRejection", (reason: unknown) => {
    logger.fatal({ msg: "Unhandled Promise Rejection", reason });
    process.exit(1);
  });

  process.on("uncaughtException", (error: Error) => {
    logger.fatal({ msg: "Uncaught Exception", error });
    process.exit(1);
  });
};

void bootstrap();
