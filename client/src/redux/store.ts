import { configureStore } from "@reduxjs/toolkit";
import pizzaModalReducer from "./reducers/pizzaModalSlice";
import pizzasReducer from "./reducers/pizzasSlice";
import cartReducer from "./reducers/cartSlice";
import contactInfoReducer from "./reducers/contactInfoSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    pizzaModal: pizzaModalReducer,
    cart: cartReducer,
    contactInfo: contactInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
