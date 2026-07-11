import app from "./app";
import connectDB from "./database/mongodb";
import { env } from "./config/env";

connectDB();

app.listen(env.PORT , () => {
  console.log(`Server running on port ${env.PORT}`);
});

