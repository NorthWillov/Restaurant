import { OPEN_PIZZA_MODAL } from "./types";

const initialState = {
  isModalOpen: false,
  pizzaInModal: null,
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PIZZA_MODAL:
      return { ...state, isModalOpen: true, pizzaInModal: action.payload };

    default:
      return state;
  }
};
