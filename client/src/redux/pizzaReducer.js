import {
  OPEN_PIZZA_MODAL,
  HIDE_PIZZA_MODAL,
  CHANGE_PIZZA_SIZE,
  REMOVE_PIZZA_INGREDIENT,
  RETURN_DELETED_PIZZA_INGREDIENT,
  CHANGE_PIZZA_DOUGH,
} from "./types";

const initialState = {
  isModalOpen: false,
  pizzaInModal: null,
  currPizzaSize: "20cm",
  currPizzaDough: "cieńkie",
  removedIngredients: [],
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PIZZA_MODAL:
      return { ...state, isModalOpen: true, pizzaInModal: action.payload };
    case HIDE_PIZZA_MODAL:
      return { ...initialState };
    case CHANGE_PIZZA_SIZE:
      return { ...state, currPizzaSize: action.payload };
    case CHANGE_PIZZA_DOUGH:
      return { ...state, currPizzaDough: action.payload };
    case CHANGE_PIZZA_SIZE:
      return { ...state, currPizzaSize: action.payload };
    case REMOVE_PIZZA_INGREDIENT:
      return {
        ...state,
        removedIngredients: [...state.removedIngredients, action.payload],
      };
    case RETURN_DELETED_PIZZA_INGREDIENT:
      return {
        ...state,
        removedIngredients: state.removedIngredients.filter(
          (ingredient) => ingredient !== action.payload
        ),
      };

    default:
      return state;
  }
};
