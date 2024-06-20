// const mongoose = require("mongoose");

// const DbConnection = async () => {
//   try {
//     if (mongoose.connection.readyState != 1) {
//       await mongoose.connect("mongodb+srv://vikashsinghs5530:Vikash5530@cluster0.g8qewko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//       console.log("Database connected successfully");
//     } else {
//       console.log("Database already connected");
//     }
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// module.exports = { DbConnection };

const mongoose = require("mongoose");

const mongodbUrl =
  "mongodb+srv://vikashsinghs5530:Vikash5530@cluster0.g8qewko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = { connectDb };
