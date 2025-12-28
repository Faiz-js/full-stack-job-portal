const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { fullname, email, mobileNumber, password } = req.body;

    if (!fullname || !email || !mobileNumber || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }

    const isExisting = await User.findOne({
      $or: [{ email }, { mobileNumber }],
    });

    if (isExisting) {
      return res.status(409).json({
        success: false,
        message: "User with these email or mobile number already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    return res
      .status(200)
      .json({ success: true, message: "Signup successful!" });
  } catch (error) {
    console.error("Error in signup: ", error);
    return res.json(
      {
        success: false,
        message: "Something went wrong while processing your signup.",
      },
      { stauts: 500 }
    );
  }
};

module.exports = { signup };
