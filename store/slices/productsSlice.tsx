import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { IProduct } from "../../helpers";

const FETCH_URL = "https://api.escuelajs.co/api/v1/products";

export interface ProductsState {
  isLoading: boolean;
  data: IProduct[];
  error: string | undefined;
}

const initialState: ProductsState = {
  isLoading: false,
  data: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      return await fetch(`${FETCH_URL}`).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProducts",
  async function (values: IProduct, { rejectWithValue, dispatch }) {
    console.log("values", values);
    try {
      return await fetch(`${FETCH_URL}`, {
        method: "POST",
        body: JSON.stringify({
          ...values,
          categoryId: "1",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        } else {
          dispatch(fetchProducts());
        }
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async function (id: string | number, { rejectWithValue, dispatch }) {
    try {
      return await fetch(`${FETCH_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        } else {
          console.log("Deleted ", id);
          dispatch(fetchProducts());
        }
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProductsData: (state, action: PayloadAction<IProduct[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const { setProductsData, setLoadingState } = productsSlice.actions;

export default productsSlice.reducer;
