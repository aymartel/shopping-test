import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';
import axios from "axios";



export interface ProductSliceState {
  productsList: Product[],
  categoryGet:number
}

const initialState: ProductSliceState = {
  productsList: [],
  categoryGet:-1,
};



export const productListSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetProductList: (state) => {
      return initialState
    },
    resetCategory: (state,action) => {
        state.categoryGet = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (!!action.payload)
          state.productsList = [...state.productsList,...action.payload];
      })
  },
});


export default productListSlice.reducer
export const { resetProductList , resetCategory} = productListSlice.actions

interface PropsURL {
  url: string,
  sort?: string[],
  page?: number,
  maxPerPage?: number,
  category?: number
}


export const fetchProducts = createAsyncThunk(
  "GetProducts",
  ({ url, page = -1, maxPerPage=-1, category = -1 , sort = []}: PropsURL) => {
    let getUrL = `${url}`;
    if (sort.length>0) {
      getUrL = `${getUrL}sort=[${sort}]`;
    }
    if (page > -1 ) {
      getUrL = `${getUrL}&range=[${page+1},${page+maxPerPage}]`;
    } 
    if ( category > 0) {
      getUrL = `${getUrL}&filter={"category_id":${category}}`;
    }
    
    console.log(getUrL);
    return axios
      .get(getUrL)
      .catch((error) => error)
      .then((response) => response.data)
  }
)
