import { OPEN_PIZZA_MODAL, CHANGE_PIZZA_SIZE } from "./types";

const initialState = {
  isModalOpen: false,
  pizzaInModal: null,
  currPizzaSize: "20cm",
  currPizzaDough: "cieńkie",
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PIZZA_MODAL:
      return { ...state, isModalOpen: true, pizzaInModal: action.payload };
    case CHANGE_PIZZA_SIZE:
      return { ...state, currPizzaSize: action.payload };

    default:
      return state;
  }
};
