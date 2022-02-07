import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';
import axios from "axios";

const url = `https://test2.sionic.ru/api/Products?sort=["name","ASC"]&range=[0,3]`

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
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
        if (!!action.payload)
          state.productsList = action.payload;
      })
  },
});


export default productListSlice.reducer
export const fetchAllProducts = createAsyncThunk(
  "GetAllProducts",
  () =>
    axios
      .get(url)
      .catch((error) => error)
      .then((response) => response.data)
)
