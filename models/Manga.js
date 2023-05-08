import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    author_id: { type: Types.ObjectId, ref: "authors", required: true },
    company_id: { type: Types.ObjectId, ref: "companies" },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: "categories", required: true },
  },
  { timestamps: true }
);
 export const Manga = mongoose.model(schema,"mangas")