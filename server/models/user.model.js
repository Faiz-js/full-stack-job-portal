const psql = require("../config/dbConnection.js");

class UserModel {
  async checkExistingEmailOrMobileNumber(email, mobile_number) {
    try {
      const query = await psql.query(
        `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = $1 OR mobile_number = $2`,
        [email, mobile_number],
      );

      return query.rows[0] || null;
    } catch (error) {
      console.error("❌ error in checking email/mobile number: ", error);
      throw error;
    }
  }

  async insertUser(user_name, email, mobile_number, password) {
    try {
      await psql.query(
        `INSERT INTO ${process.env.USERS_TABLE} (user_name, email, mobile_number, password) VALUES ($1, $2, $3, $4)`,
        [user_name, email, mobile_number, password],
      );
    } catch (error) {
      console.error("❌ error in inserting in users table: ", error);
      throw error;
    }
  }

  async checkExistingEmail(email) {
    try {
      const query = await psql.query(
        `SELECT * FROM ${process.env.USERS_TABLE} WHERE email = $1`,
        [email],
      );

      return query.rows[0] || null;
    } catch (error) {
      console.error("❌ error in checking existing email: ", error);
      throw error;
    }
  }
}

module.exports = new UserModel();
