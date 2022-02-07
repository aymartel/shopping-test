import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInCart } from '../../interfaces';



interface shoppingCartSliceState {
    productsInCartList: ProductInCart[],
    total: number
}
const initialState: shoppingCartSliceState = {
    productsInCartList: [],
    total : 0
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addProductInShoppingCart: (state, action: PayloadAction<{ product: ProductInCart; quantity?: number }>) => {
            

            const cartItem = state.productsInCartList.find((item) => item.id === action.payload.product.id);
            state.total  += 1; 
            if (cartItem) {
                cartItem.quantity = action.payload.quantity !== undefined ? action.payload.quantity : cartItem.quantity! + 1;
            }
            else {
                state.productsInCartList.push({ id: action.payload.product.id, quantity: action.payload.quantity || 1 });
            }
        },
        deleteProductInShoppingCart: (state, action: PayloadAction<{product: ProductInCart}>) => {
            state.total  -= 1; 
            const cartItem = state.productsInCartList.find((item) => item.id === action.payload.product.id);
            if (cartItem && cartItem.quantity! > 1) {
                cartItem.quantity = cartItem.quantity! - 1;
            } else {
                console.log(state);
                state.productsInCartList = state.productsInCartList.filter(item => item.id !== action.payload.product.id)
            }
            
        },
        resetShoppingCart: (state) => {
            return initialState

        },
    },
})

export default shoppingCartSlice.reducer
export const { addProductInShoppingCart, deleteProductInShoppingCart, resetShoppingCart } = shoppingCartSlice.actions



