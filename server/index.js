const express = require("express");
const app = express();
const mongoose= require("mongoose")
const dotenv = require("dotenv");
const employeeRoute = require("./routes/employee");
const cors = require("cors");


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(express.json());

  app.use("/api/employee", employeeRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });