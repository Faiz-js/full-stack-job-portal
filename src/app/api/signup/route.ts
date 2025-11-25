import { NextResponse } from "next/server";
import User from "@/models/user-model";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await connectDB();

    const { name, email, mob_num, password } = await request.json();

    if (!name || !email || !mob_num || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all fields",
        },
        { status: 400 }
      );
    }

    const isExisting = await User.findOne({
      $or: [{ email }, { mobileNumber: mob_num }],
    });

    if (isExisting) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname: name,
      email: email,
      mobileNumber: mob_num,
      password: hashedPassword,
    });

    return NextResponse.json(
      { success: true, message: "signup successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while processing your signup.",
      },
      { status: 500 }
    );
  }
}
