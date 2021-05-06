import {
  ADD_PRODUCT_TO_CART,
  GET_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../types";

const initialState = {
  cart: {},
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, cart: action.payload };
    case ADD_PRODUCT_TO_CART:
      return state;
    case INCREMENT_QUANTITY:
      return { ...state, cart: { ...state.cart, products: action.payload } };
    case DECREMENT_QUANTITY:
      return { ...state, cart: { ...state.cart, products: action.payload } };

    default:
      return state;
  }
};
