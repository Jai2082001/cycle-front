import {createSlice} from "@reduxjs/toolkit";

const accessSlice = createSlice({
    name: 'accessories',
    initialState: {accessories: []},
    reducers: {
        changeAccessories(state, action) {
            state.accessories = action.payload;
        }, 
    }
})

export const accessAction = accessSlice.actions;

export default accessSlice;
