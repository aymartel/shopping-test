import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productListSlice';
import shoppingCartReducer from '../features/shoppingCart/shopingCartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
