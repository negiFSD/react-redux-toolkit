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
    reducer:{
         
    }
});
console.log(cartSlice);

export default cartSlice.reducer;  // reducer provides intital state to the global level.