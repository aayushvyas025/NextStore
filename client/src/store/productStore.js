import { create } from "zustand";
import API from "../config/api/apiConfig";
import { productValidation } from "../validations/productValidations";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,
  product: null,
  createProduct: async ({ title, price, image }) => {
    const { isValid, field } = productValidation({ title, price, image });
    if (!isValid) {
      const message = `Error, ${field} is required`;
      set({ error: message });
      return { success: false, message };
    }

    set({ error: null, isLoading: true });

    try {
      const { data } = await API.post(`/product/create`, {
        title,
        price,
        image,
      });
      set((state) => ({
        products: [...state.products, data.newProduct],
      }));
      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      console.error(`Error, while creating product ${error.message}`);
      const errorMessage =
        error?.response?.data?.message || `Error, creating product`;
      set({ error: errorMessage });
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      set({ isLoading: false });
    }
  },
  fetchProduct: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await API.get(`/products/fetch`);
      set({ products: data.products });
      return { success: true, message: data.message, products: data.products };
    } catch (error) {
      console.error(`Error, while fetching products ${error.message}`);
      const errorMessage =
        error?.response?.data?.message || `Error, fetching product`;
      set({ error: errorMessage });
      return { success: false, message: errorMessage };
    } finally {
      set({ isLoading: false });
    }
  },
  updateProduct: async (productId, { title, price, image }) => {
    const { isValid, field } = productValidation({ title, price, image });
    if (!isValid) {
      const message = `Error, ${field} is required`;
      set({ error: message });
      return { success: false, message };
    }
    set({ isLoading: true, error: null });
    try {
      const { data } = await API.put(`/product/update/${productId}`, {
        title,
        price,
        image,
      });

      set((state) => ({
        products:state.products.map((product) => product._id === productId ? data.updatedProduct : product)
      }));
      return {
        success: true,
        message: data.message,
        updatedProduct: data.updatedProduct,
      };
    } catch (error) {
      console.error(`Error, while update product: ${error.message}`);
      const errorMessage =
        error?.response?.data?.message || `Error, updating product`;
      set({ error: errorMessage });
      return { success: false, message: errorMessage };
    } finally {
      set({ isLoading: false });
    }
  },
  deleteProduct: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await API.delete(`/product/delete/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));
      return { success: true, message: data.message };
    } catch (error) {
      console.error(`Error, while deleting product ${error.message}`);
      const errorMessage =
        error?.response?.data.message || `Error, deleting product`;
      set({ error: errorMessage });
      return { success: false, message: errorMessage };
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
