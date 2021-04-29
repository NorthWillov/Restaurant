import { GET_PIZZAS } from "./types";

const initialState = {
  pizzas: [],
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS:
      return { ...state, pizzas: action.payload };

    default:
      return state;
  }
};
