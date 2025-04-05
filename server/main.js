import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import userRoute from "./routes/UserRoutes.js";
import authRoute from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";

//privat data acces
dotenv.config();

// variable & start
const app = express();
await connectDB();
const PORT = process.env.PORT;

// cors für acces damit die anfragen vom frontend nicht blockiert werden. plus cookieparser damit der cookie auch im backend ankommt und nicht undefined ist.
app.use(cors({ origin: process.env.FRONTEND_URI, credentials: true }));
app.use(cookieParser());

// compile json
app.use(express.json());

// routess
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// running
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
