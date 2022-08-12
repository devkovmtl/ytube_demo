import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

dotenv.config();

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE } =
  process.env;

const app = express();

const connect = () => {
  // Setup mongoose db
  const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`;
  const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose
    .connect(MONGO_URL, MONGO_OPTIONS)
    .then(() => {
      console.log("Connect to DB");
    })
    .catch((err) => {
      console.log("Error");
    });
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connect();
  console.log("Server started");
});
