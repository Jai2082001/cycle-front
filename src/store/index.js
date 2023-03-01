import { configureStore } from '@reduxjs/toolkit';
import accessoriesSlice from './access-slice';
import productSlice from './product-slice';
import cookieSlice from './cookie-slice';
import cartSlice from './cart-slice';
import userSlice from './user-slice'
import uislice from './UIslice';

const store = configureStore({reducer: {accessories: accessoriesSlice.reducer, products: productSlice.reducer, cookies: cookieSlice.reducer, cart: cartSlice.reducer, user: userSlice.reducer, ui: uislice.reducer}})


export default store 