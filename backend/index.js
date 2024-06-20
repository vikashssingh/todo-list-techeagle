/* importing express */
require("dotenv").config();

var cookieParser = require("cookie-parser");
var cors = require("cors");
const express = require("express");
const bcrypt = require('bcryptjs'); // if switched to bcryptjs
const { startServer } = require("./utils/server_start");
const { userRouter } = require("./routes/user_route");
const { productRouter } = require("./routes/product_route");
const { cartRouter } = require("./routes/cart_route");
const { orderRouter } = require("./routes/order_route");
const app = express();
const port = 5000;
const { connectDb } = require("./database config/db")

/* Using Middleware */

app.use(cors());
app.use(express.json());
app.use(cookieParser());
/* Routes */

/*  Home route */
app.get("/", (req, res) => {
  console.log("enter res");
  res.send("Welcome to the home page!");
});

/* User Route */
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

/* Listening to server */

app.listen(port, () => {
  console.log("port is running")

});
