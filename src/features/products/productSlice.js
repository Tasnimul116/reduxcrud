import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "14",
      name: "Product 14",
      price: 1400,
      description: "Description of product 14"
    },
    {
      id: "15",
      name: "Product 15",
      price: 1500,
      description: "Description of product 15"
    },
    {
      id: "16",
      name: "Product 16",
      price: 1600,
      description: "Description of product 16"
    },
    {
      id: "17",
      name: "Product 17",
      price: 1700,
      description: "Description of product 17"
    },
    {
      id: "18",
      name: "Product 18",
      price: 1800,
      description: "Description of product 18"
    },
    {
      id: "ixRdOEixLt7MfMxuZbinl",
      name: "Tasnimul Hasan Mahi",
      price: "2324",
      description: "egfgf"
    },
    {
      id: "keyQDVvXAupPOeqVudHUA",
      name: "Tasnimul Hasan Mahi",
      price: "434",
      description: "eafra"
    }
  ],
  isLoading: false,
  error: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    }
  }
});

export const { fetchProducts, deleteProduct, addProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
