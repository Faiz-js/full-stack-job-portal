const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Failed to connect to database: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
