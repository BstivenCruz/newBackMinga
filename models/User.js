import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    mail: { type: String, required : true },
    password: { type: String, required : true },
    photo: { type: String, required : true },
    role : { type : Number, required : true},
    is_online: { type: Boolean, required : true },
    is_verified: { type: Boolean, required : true },
    verify_code: { type: String, required : true },
  },
  { timestamps: true }
);

export const User = mongoose.model(schema, "users");
