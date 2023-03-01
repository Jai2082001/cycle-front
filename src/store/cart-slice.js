import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addProducts(state, action) {
            let array = state.cart;
            let flag = 0
            if(array.length > 0){
                for (let i = 0; array.length;i++){
                    if (flag) {
                        break
                    }
                    if (array[i].product._id === action.payload.product) {
                        array[i].quantity = array[i].quantity + 1
                        flag++
                    }
                }
                if (flag > 0) {
                    array.push({product: action.payload.product, quantity: action.payload.quantity});
                }
                console.log(array)
            }else{
                
                array.push({product: action.payload.product, quantity: action.payload.quantity});
                console.log(array)
            }
            
            state.cart = array;
        } , 
        deleteProducts(state, action) {
            console.log(state)
            let arraySample = state.cart.filter((item) => {
                return item._id !== action.payload._id
            })    
            state.cart = arraySample
        },
        changeProducts(state, action) {
            state.cart = action.payload
        }
        
    }
    })

export const cartActions = cartSlice.actions;

export default cartSlice;