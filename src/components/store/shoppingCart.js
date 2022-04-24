import  { createSlice } from "@reduxjs/toolkit";

const intialShoppingCartState = { count: 0, items:[]};

const shoppingCartSlice = createSlice({
    name: 'shoppingCartSlice',
    initialState: intialShoppingCartState,
    reducers: {
        increaseCount(state) {
            state.count++;
        },
        decreaseCount(state) {
            state.count--;
        },
        addItem(state, action){
            // console.log(action.payload);
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.count++;
            if (!existingItem) {
                state.items.push({
                  id: newItem.id,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
                  name: newItem.title
                });
              } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
              }
              
        },
        removeItem(state, action) {
          const id = action.payload;
          const existingItem = state.items.find(item => item.id === id);
          state.count--;
          if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id);
          } else {
            existingItem.quantity--;
          }
        },
    }
});


export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;