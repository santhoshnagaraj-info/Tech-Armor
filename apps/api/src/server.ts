import app from "./app";
import connectDB from "./database/mongodb";
import { env } from "node:process";

connectDB();

app.listen(env.PORT , () => {
  console.log(`Server running on port ${env.PORT}`);
});

