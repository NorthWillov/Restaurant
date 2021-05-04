import axios from "axios";
import { ADD_PRODUCT_TO_CART } from "../types";
import { hidePizzaModal } from "./pizzaModalActions";

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
