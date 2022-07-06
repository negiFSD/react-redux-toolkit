import {  createSlice } from "@reduxjs/toolkit";
import cartItems from '../../../cartItems'

const initialState = {
    isLoading: true,
    cartItems: cartItems,
    amount:7,               // this is item count
    totalAmount:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
         clearCart : (state)=>{
            state.cartItems=[]
         },
         removeItem: (state,action)=>{
            const itemId = action.payload 
            state.cartItems = state.cartItems.filter((item)=>item.id!==itemId)
         },
         increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
         },
      decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        // if(cartItem.amount>0){
        cartItem.amount = cartItem.amount - 1;
    // }
        },
        calculateTotals:(state)=>{
            let amount=0;
            let totalAmount= 0
            state.cartItems.forEach((item)=>{
                amount +=item.amount    ;
                totalAmount += item.amount*item.price
            })
            state.amount = amount;
            state.totalAmount = totalAmount
        }
    },
});
console.log(cartSlice);
 
 export const{clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions

export default cartSlice.reducer;  // reducer provides intital state to the global level.
