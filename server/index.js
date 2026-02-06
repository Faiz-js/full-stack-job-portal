const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/dbConnection.js");
const authRoutes = require("./routes/auth.routes.js");

dotenv.config();
connectDb();
const jobRoutes = require("./routes/job.routes.js");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
