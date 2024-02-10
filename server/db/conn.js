const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://lostproperty6:bOdPkds0XGveLHOA@cluster0.tp87vge.mongodb.net/employedatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((err) => console.log("Database Not Connected", err));
