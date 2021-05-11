import { configureStore } from "@reduxjs/toolkit";
import pizzaModalReducer from "./reducers/pizzaModalSlice";
import pizzasReducer from "./reducers/pizzasSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    pizzaModal: pizzaModalReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
