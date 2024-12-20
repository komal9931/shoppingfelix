// const { createSlice } = require('@reduxjs/toolkit');

import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//             state.push(action.payload);
//         },
//         remove(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

// const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Store items with quantity
    tempItems: [], // Store
    totalPrice: 0, // Track total price
  },
  reducers: {
    // Add item or increment quantity if it already exists
    add(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item already exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    // Remove item from cart
    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Recalculate total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    // Update quantity of an item
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
      // Recalculate total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// const { createSlice } = require("@reduxjs/toolkit");

// // Load cart data from localStorage
// const loadCartFromLocalStorage = () => {
//   const cartData = localStorage.getItem("cartItems");
//   return cartData ? JSON.parse(cartData) : [];
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: loadCartFromLocalStorage(), // Load saved items from localStorage
//     totalPrice: 0, // Initial total price
//   },
//   reducers: {
//     add(state, action) {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save to localStorage
//     },
//     remove(state, action) {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save to localStorage
//     },
//     updateQuantity(state, action) {
//       const { id, quantity } = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);
//       if (existingItem && quantity > 0) {
//         existingItem.quantity = quantity;
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save to localStorage
//     },
//   },
// });

// export const { add, remove, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;
