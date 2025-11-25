import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number
}

const connection: ConnectionObject = {};

const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    console.log(db);

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Failed to connect to database: ", error);
    process.exit(1);
  }
}

export default connectDB;