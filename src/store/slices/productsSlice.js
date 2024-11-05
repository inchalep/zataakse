import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _get } from "../../utils/api";
import { getGategoriesList } from "../../services/home";

const initialState = {
  productsList: {
    products: [],
    total: 0,
  },
  limit: 30,
  categoryList: [],
  isLoading: false,
  isError: false,
};

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (limit) => {
    const result = await _get(`/products/?limit=${limit}&skip=0`);
    return result;
  }
);

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async () => {
    const result = await getGategoriesList();
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeLimit: (state, action) => {
      state.limit += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoryList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const { changeLimit } = productSlice.actions;
export default productSlice.reducer;
