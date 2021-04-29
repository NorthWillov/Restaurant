import { combineReducers } from "redux";
import { pizzaModalReducer } from "./pizzaModalReducer";

export const rootReducer = combineReducers({
  pizzaModal: pizzaModalReducer,
});
