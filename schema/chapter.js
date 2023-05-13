import Joi from "joi-oid";

export const schema = Joi.object({
  manga_id: Joi.objectId().required(),
  title: Joi.string().required().min(1).max(200).messages({
    "any.required": "The title is required! Please enter data",
    "string.empty": "Title empty! Please complete",
    "string.min": "Minimun 1 characters",
    "string.max": "Maximun 200 characters",
  }),
  cover_photo: Joi.string().uri().required(),
  pages: Joi.array().items(Joi.string().uri()).required().min(1).messages({
    "any.required": "This field is empty! please complete",
  }),
  order: Joi.number(),
});
