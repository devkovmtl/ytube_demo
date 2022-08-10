require("dotenv").config();
const express = require("express");

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "OK",
    error: null,
    data: {
      body: "Hello world",
    },
  });
});

app.listen(PORT, () => console.log("Server started"));
