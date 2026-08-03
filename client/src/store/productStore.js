import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts:(product) => set({products}),
  isLoading:false,
  error:null,
  product: null,
  createProduct: async(productId, product) => {
    set({error:null, isLoading:true})
    try {
      // const response = await 
    } catch (error) {
      console.error(`Error, while creating product ${error.message}`); 
      set({error:response.data.error.message}); 
    }
  }
}));
