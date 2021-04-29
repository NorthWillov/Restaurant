import {
  CHANGE_PIZZA_SIZE,
  HIDE_PIZZA_MODAL,
  OPEN_PIZZA_MODAL,
  REMOVE_PIZZA_INGREDIENT,
  RETURN_DELETED_PIZZA_INGREDIENT,
} from "./types";

export function openPizzaModal(pizza) {
  return {
    type: OPEN_PIZZA_MODAL,
    payload: pizza,
  };
}

export function hidePizzaModal() {
  return {
    type: HIDE_PIZZA_MODAL,
  };
}

export function changePizzaSize(size) {
  return {
    type: CHANGE_PIZZA_SIZE,
    payload: size,
  };
}

export function removeIngredient(ing) {
  return {
    type: REMOVE_PIZZA_INGREDIENT,
    payload: ing,
  };
}

export function backRemovedIngredient(ing) {
  return {
    type: RETURN_DELETED_PIZZA_INGREDIENT,
    payload: ing,
  };
}
