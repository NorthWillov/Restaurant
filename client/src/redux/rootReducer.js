import { combineReducers } from "redux";
import { pizzaModalReducer } from "./pizzaModalReducer";
import { pizzasReducer } from "./pizzasReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  pizzaModal: pizzaModalReducer,
  cart: cartReducer,
});
