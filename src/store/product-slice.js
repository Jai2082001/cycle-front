import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {products: []},
    reducers: {
        changeproducts(state, action) {
            console.log('here');
            console.log(action.payload)
            state.products = action.payload; 
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice