import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("Title is required")
      .isLength({ min: 5 })
      .withMessage("Min title length required is 5"),
    body("rating").isNumeric().withMessage("Rating must be a number"),
    body("description").isString().withMessage("Description is required"),
  ];
};
