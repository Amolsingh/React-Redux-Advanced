import { configureStore } from '@reduxjs/toolkit';
import myCartReducer from './myCart'; 
import shoppingCartReducer from './shoppingCart';

const store = configureStore({
    reducer: {
        myCart : myCartReducer,
        shoppingCart: shoppingCartReducer,
    }
});

export default store;