import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    manga_id: { type: Types.ObjectId, ref: "mangas", required: true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array, required: true },
    order: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Chapter = mongoose.model(schema,"chapters")