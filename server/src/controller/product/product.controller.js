import Product from "#models/product/product.model";
import {
  validateProduct,
  validateProductId,
} from "#validation/product.validation";

export const fetchProduct = async (_, response, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return response.status(200).json({
      success: true,
      message:
        products.length > 0
          ? `Products fetched successfully`
          : `No products found`,
      products,
    });
  } catch (error) {
    console.error(`Error, while fetching product ${error.message}`);
    next(error);
  }
};

export const fetchProductById = async (request, response, next) => {
  const { id } = request.params;
  const { isValid, invalidId } = validateProductId(id);

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: `Error, ${invalidId}` });
  }
  try {
    const product = await Product.findById(id);

    if (!product) {
      return response
        .status(404)
        .json({ success: false, message: `Error, product doesn't exist` });
    }

    return response.status(200).json({
      success: true,
      message: `Product by id fetched successfully`,
      product,
    });
  } catch (error) {
    console.log(`Error, while fetching product by id: ${error.message}`);
    next(error);
  }
};

export const createProduct = async (request, response, next) => {
  const { title, price, image } = request.body;
  const { isValid, field } = validateProduct({ title, price, image });

  if (!isValid) {
    return response
      .status(400)
      .json({ success: false, message: `Error, ${field} required` });
  }

  try {
    const existingProduct = await Product.findOne({ title });

    if (existingProduct) {
      return response
        .status(409)
        .json({ success: false, message: `Error, product already exist` });
    }

    const product = new Product({
      title,
      price,
      image,
    });

    await product.save();
    return response.status(201).json({
      success: true,
      message: `Product created successfully`,
      newProduct: product,
    });
  } catch (error) {
    console.error(`Error, while creating product: ${error.message}`);
    next(error);
  }
};

export const updateProduct = async (request, response, next) => {
  const { id } = request.params;
  const { title, price, image } = request.body;
  const validateId = validateProductId(id);
  const validateParams = validateProduct({ title, price, image });

  if (!validateId.isValid) {
    return response
      .status(400)
      .json({ success: false, message: `Error, ${validateId.invalidId}` });
  }

  if (!validateParams.isValid) {
    return response.status(400).json({
      success: false,
      message: `Error, ${validateParams.field} required`,
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        title: title,
        price,
        image: image,
      },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return response
        .status(404)
        .json({ success: false, message: `Error, product doesn't exist` });
    }

    return response.status(200).json({
      success: true,
      message: `Product updated successfully`,
      updatedProduct,
    });
  } catch (error) {
    console.error(`Error, while updating product: ${error.message}`);
    next(error);
  }
};

export const deleteProduct = async (request, response, next) => {
  const { id } = request.params;
  const { isValid, invalidId } = validateProductId(id);

  if (!isValid) {
    return response.status(400).json({
      success: false,
      message: `Error, ${invalidId}`,
    });
  }

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return response
        .status(404)
        .json({ success: false, message: `Error, product doesn't exist` });
    }

    return response
      .status(200)
      .json({ success: true, message: `Product deleted successfully` });
  } catch (error) {
    console.error(`Error, while deleting product: ${error.message}`);
    next(error);
  }
};
