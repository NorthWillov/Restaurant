import { ADD_PRODUCT_TO_CART } from "../types";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return state;

    default:
      return state;
  }
};
