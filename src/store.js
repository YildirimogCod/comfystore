import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
export const store = configureStore({
  reducer: {
    cartState: cardReducer,
    userState: userReducer,
  },
});
