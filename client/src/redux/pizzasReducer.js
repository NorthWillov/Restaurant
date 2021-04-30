import { GET_PIZZAS, GET_PIZZA_INGREDIENTS } from "./types";

const initialState = {
  pizzas: [],
  pizzaIngredients: [],
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS:
      return { ...state, pizzas: action.payload };
    case GET_PIZZA_INGREDIENTS:
      return { ...state, pizzaIngredients: action.payload };

    default:
      return state;
  }
};
