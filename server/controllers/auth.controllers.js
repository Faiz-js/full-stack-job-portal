const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
  //   const { fullname, email, mobileNumber, password } = req.body;

  //   if (!fullname || !email || !mobileNumber || !password) {
  //     return res
  //       .status(400)
  //       .json({ success: false, message: "Please fill all fields" });
  //   }

  //   const isExisting = await User.findOne({
  //     $or: [{ email }, { mobileNumber }],
  //   });

  //   if (isExisting) {
  //     return res.status(409).json({
  //       success: false,
  //       message: "User with these email or mobile number already exists",
  //     });
  //   }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   await User.create({
  //     fullname,
  //     email,
  //     mobileNumber,
  //     password: hashedPassword,
  //   });

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

const login = async (req, res) => {
  // const { email, password } = req.body;

  // if (!email || !password) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Please fill all fields" });
  // }

  // const userInDb = await User.findOne({ email });

  // if (!userInDb) {
  //   return res.status(404).json({ success: false, message: "No such user" });
  // }

  // const isPassMatch = await bcrypt.compare(password, userInDb.password);

  // if (!isPassMatch) {
  //   return res.status(400).json({ success: false, message: "No such user" });
  // }

  // const token = jwt.sign(
  //   { userID: userInDb._id, email: userInDb.email },
  //   process.env.JWT_SECRET,
  //   { expiresIn: "24h" }
  // );

  // res.cookie("token", token, {
  //   httpOnly: true,
  //   sameSite: "lax",
  //   maxAge: 24 * 60 * 60 * 1000,
  // });

  return res.status(200).json({ success: true, message: "Login successful!" });
};

module.exports = { signup, login };
