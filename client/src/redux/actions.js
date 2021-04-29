import { CHANGE_PIZZA_SIZE, OPEN_PIZZA_MODAL } from "./types";

export function openPizzaModal(pizza) {
  return {
    type: OPEN_PIZZA_MODAL,
    payload: pizza,
  };
}

export function changePizzaSize(size) {
  return {
    type: CHANGE_PIZZA_SIZE,
    payload: size,
  };
}
