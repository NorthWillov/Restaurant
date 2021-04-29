import axios from "axios";
import { GET_PIZZAS } from "./types";

export function getPizzas(pizzas) {
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
