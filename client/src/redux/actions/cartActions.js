import axios from "axios";
import { ADD_PRODUCT_TO_CART, GET_CART } from "../types";
import { hidePizzaModal } from "./pizzaModalActions";

export function getCart() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/getCart");
      dispatch({
        type: GET_CART,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addProductToCart(product) {
  return async (dispatch) => {
    try {
      await axios.post("/api/addProduct", { product });
      dispatch({ type: ADD_PRODUCT_TO_CART });
      dispatch(hidePizzaModal());
    } catch (err) {
      console.log(err);
    }
  };
}
