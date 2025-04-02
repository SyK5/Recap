import express from "express";
import userRoute from "./routes/UserRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from 'cors';

//privat data acces
dotenv.config();

// variable & start
const app = express();
await connectDB();
app.use(cors());
const PORT = process.env.PORT;

// compile json
app.use(express.json());

// routes
app.use("/api/users", userRoute);

// running
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
