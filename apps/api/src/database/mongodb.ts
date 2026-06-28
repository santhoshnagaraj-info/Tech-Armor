import mongoose from "mongoose";
import { env } from "node:process";

const connectDB = async () => {
  
  try {
    await mongoose.connect(env.MONGO_URI as string);
    console.log("MongoDB Connected");

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;


