import {
  ADD_EXTRA_PIZZA_INGREDIENT,
  CHANGE_PIZZA_DOUGH,
  CHANGE_PIZZA_SIZE,
  HIDE_PIZZA_MODAL,
  OPEN_PIZZA_MODAL,
  REMOVE_PIZZA_INGREDIENT,
  RETURN_DELETED_PIZZA_INGREDIENT,
  REMOVE_EXTRA_PIZZA_INGREDIENT,
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
export function changePizzaDough(dough) {
  return {
    type: CHANGE_PIZZA_DOUGH,
    payload: dough,
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

export function addExtraIngredient(ing) {
  return {
    type: ADD_EXTRA_PIZZA_INGREDIENT,
    payload: ing,
  };
}

export function removeExtraIngredient(ing) {
  return {
    type: REMOVE_EXTRA_PIZZA_INGREDIENT,
    payload: ing,
  };
}
