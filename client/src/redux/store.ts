import { configureStore } from "@reduxjs/toolkit";
import promoReducer from "./reducers/promoSlice";
import pizzaModalReducer from "./reducers/pizzaModalSlice";
import pizzasReducer from "./reducers/pizzasSlice";
import cartReducer from "./reducers/cartSlice";
import contactInfoReducer from "./reducers/contactInfoSlice";
import lunchesSlice from "./reducers/lunchSlice";

export const store = configureStore({
  reducer: {
    promos: promoReducer,
    pizzas: pizzasReducer,
    lunches: lunchesSlice,
    pizzaModal: pizzaModalReducer,
    cart: cartReducer,
    contactInfo: contactInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
