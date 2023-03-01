import { createSlice } from '@reduxjs/toolkit';

const uislice = createSlice({
    name: 'uislice',
    initialState: {
        display: false
    },
    reducers: {
        changeDisplay(state, action){
            state.display = action.payload;
        }
        // changeUser(state, action) {
        //     state.user = action.payload   
        // },
        // storeCartItem(state, action) {
        //     state.user.cart = action.payload;
        // }
    }
})

export const uiActions = uislice.actions;

export default uislice