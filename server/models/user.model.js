const psql = require("../config/dbConnection.js");

const checkExistingEmailOrMobileNumber = async (email, mobile_number) => {
  try {
    const query = await psql.query(
      `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = $1 OR mobile_number = $2`,
      [email, mobile_number],
    );

    return query.rows[0] || null;
  } catch (error) {
    console.error("❌ error in checking email/mobile number: ", error);
    return null;
  }
};

const insertUser = async (user_name, email, mobile_number, passowrd) => {
  try {
    await psql.query(
      `INSERT INTO ${process.env.USERS_TABLE} (user_name, email, mobile_number, password) VALUES ($1, $2, $3, $4)`,
      [user_name, email, mobile_number, passowrd],
    );
  } catch (error) {
    console.error("❌ error in inserting in users table: ", error);
  }
};

const checkExistingEmail = async (email) => {
  try {
    const query = await psql.query(
      `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = $1`,
      [email],
    );

    return query.rows[0] || null;
  } catch (error) {
    console.error("❌ error in checking existing email: ", error);
    return null;
  }
};

module.exports = {
  checkExistingEmailOrMobileNumber,
  insertUser,
  checkExistingEmail,
};
