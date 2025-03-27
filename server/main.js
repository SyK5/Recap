import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

await connectDB();



const app = express();


app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: process.env.CLIENT_URL, 
    credentials: true,              
  })
);

app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});