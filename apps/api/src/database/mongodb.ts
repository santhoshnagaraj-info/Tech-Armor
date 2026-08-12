import mongoose from "mongoose";
import { env } from "../config/env";

const connectDB = async () => {
  
  try {
    await mongoose.connect(env.MONGO_URL as string);
    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.name);

    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;


