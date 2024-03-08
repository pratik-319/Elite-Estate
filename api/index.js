import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
// <<<<<<< HEAD
import listingRouter from './routes/listing.route.js';
import cookieParser from "cookie-parser";
// =======
// import cookieParser from 'cookie-parser';
// >>>>>>> dbed62f7568675b67d3ae188ca1f4520b5ee8ebe

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongo congrates");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is running /");
});

app.use("/api/user", userRouter); //.use method to use external routes
app.use("/api/auth", authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
