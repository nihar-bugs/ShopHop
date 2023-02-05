const express = require("express");
const app = express();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_CONNECT_URL, { dbName: "ShopHop" })
  .then(() => console.log("DB Connected!!"))
  .catch((err) =>
    console.log("DB Connection Failed! Please Check. Error Message:", err)
  );

//mongoose.connection.useDb("ShopHop");

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log("Backend is running on", process.env.PORT)
);
