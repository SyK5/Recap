import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI, {});
    console.log(`✅ MongoDB Connected:\n${connect.connection.host}`);
  } catch (error) {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1); // Exit if DB connection fails
  }
};

export default connectDB;
