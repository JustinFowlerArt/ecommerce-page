import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
import { iProduct } from '../../types/shop/product';

// Define the initial state using that type
const initialState: iProduct[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addProduct: (state, action: PayloadAction<iProduct>) => {
            const {id, quantity} = action.payload
            const itemInCart = state.find(i => i.id === id);
            if (itemInCart) {
                itemInCart.quantity += quantity;
            } else {
                state.push(action.payload);
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            return state.filter(i => i.id !== action.payload);
        },
        checkout: (state) => {
            return state = [];
        },
    },
});

export const { addProduct, removeProduct, checkout } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const cartContents = (state: RootState) => state.cart;

export default cartSlice.reducer;
