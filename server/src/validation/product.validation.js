import mongoose from "mongoose";

export function validateProduct({ title, price, image }) {
  if (typeof title !== "string" || !title.trim()) {
    return { isValid: false, field: "title" };
  }

  if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
    return { isValid: false, field: "price" };
  }

  if (typeof image !== "string" || !image.trim()) {
    return { isValid: false, field: "image" };
  }

  return { isValid: true, field: null };
}

export function validateProductId(id) {
  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
    return { isValid: false, invalidId: "invalid product id" };
  }

  return { isValid: true, invalidId: null };
}
