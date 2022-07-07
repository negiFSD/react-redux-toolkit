import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from '../../../cartItems'

const initialState = {
  isLoading: true,
  cartItems: [],
  amount: 7, // this is item count
  totalAmount: 0,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    return console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
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
    calculateTotals: (state) => {
      let amount = 0;
      let totalAmount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        totalAmount += item.amount * item.price;
      });
      state.amount = amount;
      state.totalAmount = totalAmount;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer; // reducer provides intital state to the global level.
