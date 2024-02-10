const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./router/auth");

require("./db/conn");

app.use(
  cors({
    origin: ["https://employee-client-xi.vercel.app"],
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
