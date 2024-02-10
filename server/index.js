const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://lostproperty6:bOdPkds0XGveLHOA@cluster0.tp87vge.mongodb.net/employedatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const app = express();
const router = require("./router/auth");

app.use(
  cors({
    origin: ["https://employee-client-ten.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Sever running `);
});
