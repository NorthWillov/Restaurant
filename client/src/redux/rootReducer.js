import { combineReducers } from "redux";
import { pizzaModalReducer } from "./pizzaModalReducer";
import { pizzasReducer } from "./pizzasReducer";

export const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  pizzaModal: pizzaModalReducer,
});
