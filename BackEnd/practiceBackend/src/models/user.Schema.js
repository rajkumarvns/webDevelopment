import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    photo: {
      url: {
        type: String,
      },
      publicID: {
        type: String,
      },
    },
  },
  {
    timestamp: true,
  },
);
const User = mongoose.model(UserSchema, "User");
export default User;
