import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';
import axios from "axios";



export interface ProductSliceState {
    productsList: Product[],
}

const initialState: ProductSliceState  = {
    productsList: [],
};



export const productListSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetProductList: (state) => {
      return initialState
  },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
        if (!!action.payload)
          state.productsList = [...state.productsList, ...action.payload];
      })
  },
});


export default productListSlice.reducer
export const {  resetProductList } = productListSlice.actions


export const fetchProducts = createAsyncThunk(
  "GetAllProducts",
  (url:string) =>
    axios
      .get(url)
      .catch((error) => error)
      .then((response) => response.data)
)
