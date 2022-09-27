import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
import { iProduct } from '../../types/shop/product';

const cartAdapter = createEntityAdapter<iProduct>()

// Define the initial state using that type
const initialState = cartAdapter.getInitialState();

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addItem: (state, action: PayloadAction<iProduct>) => {
            const {id, quantity} = action.payload
            const itemInCart = state.entities[id]
            if (itemInCart) {
                itemInCart.quantity += quantity;
            } else {
                cartAdapter.addOne(state, action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            cartAdapter.removeOne(state, action.payload)
        },
        checkout: (state) => {
            cartAdapter.removeAll(state)
        },
    },
});

export const { addItem, removeItem, checkout } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const {
    selectAll
    // Pass in a selector that returns the posts slice of state
  } = cartAdapter.getSelectors((state: RootState) => state.cart)

export default cartSlice.reducer;
