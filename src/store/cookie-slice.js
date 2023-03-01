import { createSlice } from '@reduxjs/toolkit';

const cookieSlice = createSlice({
    name: 'cookiesJwt',
    initialState: {
        jwt: ''
    },
    reducers: {
        changeToken(state, action) {
            state.initialState = action.payload
        }
    }
})

export const cookieActions = cookieSlice.actions;

export default cookieSlice