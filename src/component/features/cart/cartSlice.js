import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../../cartItems'

const initialState = {
    isLoading: true,
    cartItems: cartItems,
    amount:6,               // this is item count
    totalAmount:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
         clearCart : (state)=>{
            state.cartItems=[]
         }
    },
});
console.log(cartSlice);
 
 export const{clearCart} = cartSlice.actions

export default cartSlice.reducer;  // reducer provides intital state to the global level.