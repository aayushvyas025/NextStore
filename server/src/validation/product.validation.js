import mongoose from "mongoose";

export function validateProduct({ title, price, image }) {
  if (typeof title !== "string" || !title.trim()) {
    console.log(title, typeof title);
    return { isValid: false, field: "title" };
  }

  if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
    console.log(price, typeof price);
    return { isValid: false, field: "price" };
  }

  if (typeof image !== "string" || !image.trim()) {
    console.log(image, typeof image);
    return { isValid: false, field: "image" };
  }

  return { isValid: true, field: null };
}

export function validateProductId(id) {
  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
    return { isValid: false, message: "invalid product id" };
  }

  return { isValid: true, message: null };
}
