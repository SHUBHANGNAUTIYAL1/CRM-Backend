import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import contactRoute from "./routes/Contact.js";
import popupRoute from "./routes/popup.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://someshrocks144:somesh2004@cluster0.5yfptoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/popup", popupRoute);

app.listen(8100, () => {
  connect();
  console.log("Server Running");
});
