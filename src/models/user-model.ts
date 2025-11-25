import { Document, Schema, model, models } from "mongoose";

export interface UserSchema extends Document {
  fullname: string;
  email: string;
  mobileNumber: string;
  password: string;
}

const userSchema = new Schema<UserSchema>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.User || model<UserSchema>("User", userSchema);
