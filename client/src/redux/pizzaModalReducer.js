import {
  OPEN_PIZZA_MODAL,
  HIDE_PIZZA_MODAL,
  CHANGE_PIZZA_SIZE,
  REMOVE_PIZZA_INGREDIENT,
  RETURN_DELETED_PIZZA_INGREDIENT,
  CHANGE_PIZZA_DOUGH,
  ADD_EXTRA_PIZZA_INGREDIENT,
  REMOVE_EXTRA_PIZZA_INGREDIENT,
  ADD_EXTRA_FANTAZY_PIZZA_INGREDIENT,
  REMOVE_EXTRA_FANTAZY_PIZZA_INGREDIENT,
} from "./types";

const initialState = {
  isModalOpen: false,
  pizzaInModal: null,
  currPizzaSize: "20cm",
  currPizzaDough: "średnie",
  removedIngredients: [],
  extraIngredients: [],
  fantazjaIngredientChoices: {},
};

export const pizzaModalReducer = (state = initialState, action) => {
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
    case ADD_EXTRA_PIZZA_INGREDIENT:
      return {
        ...state,
        extraIngredients: [...state.extraIngredients, action.payload],
      };
    case REMOVE_EXTRA_PIZZA_INGREDIENT:
      return {
        ...state,
        extraIngredients: state.extraIngredients.filter(
          (ingredient) => ingredient.uniqId !== action.payload
        ),
      };
    case ADD_EXTRA_FANTAZY_PIZZA_INGREDIENT:
      return {
        ...state,
        fantazjaIngredientChoices: {
          ...state.fantazjaIngredientChoices,
          [action.form]: action.payload,
        },
      };
    case REMOVE_EXTRA_FANTAZY_PIZZA_INGREDIENT:
      delete state.fantazjaIngredientChoices[action.payload];
      return state;

    default:
      return state;
  }
};
