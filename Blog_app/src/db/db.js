import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set in environment variables");
}

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Failed to connect to DB:", err);
    throw err;
  }
}

export default connectDB;