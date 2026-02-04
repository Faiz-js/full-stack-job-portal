const { Pool } = require("pg");

const psql = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

psql.on("connect", () => {
  console.log("✅ connected to database successfully!!");
});

psql.on("error", () => {
  console.error("❌ connection to database failed!!");
});

module.exports = psql;
