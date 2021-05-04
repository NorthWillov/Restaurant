import axios from "axios";
import { GET_PIZZAS, GET_PIZZA_INGREDIENTS } from "../types";

export function getPizzas() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/getPizzas");
      dispatch({
        type: GET_PIZZAS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getPizzaIngredients() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/getPizzaIngredients");
      dispatch({
        type: GET_PIZZA_INGREDIENTS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
