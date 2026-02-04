const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
// const psql = require("./config/dbConnection.js");

// (async () => {
//   try {
//     const test = await psql.query("SELECT version()");
//     console.log("try block", test);
//   } catch (error) {
//     console.error("catch block");
//   }
// })();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
