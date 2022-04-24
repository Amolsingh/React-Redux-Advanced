import  { createSlice } from "@reduxjs/toolkit";

const initialMyCartState = {showShoppingCart : false};

const myCartSlice = createSlice({
    name: 'myCartSlice',
    initialState: initialMyCartState,
    reducers: {
        toggle(state) {
            state.showShoppingCart = !state.showShoppingCart;
            console.log(state.showShoppingCart);
        },
    }
});

export const myCartActions = myCartSlice.actions;
export default myCartSlice.reducer;