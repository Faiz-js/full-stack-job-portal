const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  checkExistingEmailOrMobileNumber,
  insertUser,
  checkExistingEmail,
} = require("../models/user.model");

const signup = async (req, res) => {
  try {
    const { fullname, email, mobileNumber, password } = req.body;

    if (!fullname || !email || !mobileNumber || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }

    const isExisting = await checkExistingEmailOrMobileNumber(
      email,
      mobileNumber,
    );

    if (isExisting) {
      return res.status(400).json({
        success: false,
        message: "User with these email or mobile number already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await insertUser(fullname, email, mobileNumber, hashedPassword);

    return res
      .status(200)
      .json({ success: true, message: "Signup successful!" });
  } catch (error) {
    console.error("❌ Error in signup function: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }

    const userInDB = await checkExistingEmail(email);

    if (!userInDB) {
      return res.status(404).json({ success: false, message: "No such user" });
    }

    const isPassMatch = await bcrypt.compare(password, userInDB.password);

    if (!isPassMatch) {
      return res.status(400).json({ success: false, message: "No such user" });
    }

    const token = jwt.sign(
      { userID: userInDB._id, email: userInDB.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ success: true, message: "Login successful!" });
  } catch (error) {
    console.error("❌ error in login function: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { signup, login };
