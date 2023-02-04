const userRoute = require("./routes/user");
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_CONNECT_URL)
  .then(() => console.log("DB Connected!!"))
  .catch((err) =>
    console.log("DB Connection Failed! Please Check. Error Message:", err)
  );

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log("Backend is running on", process.env.PORT)
);
