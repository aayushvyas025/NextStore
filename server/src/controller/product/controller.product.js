import Product from "#models/product/product.model";
import { validateProduct, validateProductId } from "#validation/product.validation";

export const fetchProduct = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while fetching product ${error.message}`);
    next(error);
  }
};

export const fetchProductById = async (request, response, next) => {
  try {
  } catch (error) {
    console.log(`Error, while fetching product by id ${error.message}`);
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
    console.error(`Error, while creating product ${error.message}`);
    next(error);
  }
};

export const deleteProduct = async (request, response, next) => {
    const {id} = request.params; 
    const {isValid, message} = validateProductId(id); 
   
  try {
  } catch (error) {
    console.error(`Error, while creating product ${error.message}`);
    next(error);
  }
};
