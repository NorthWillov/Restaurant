import { OPEN_PIZZA_MODAL } from "./types";

export function openPizzaModal(pizza) {
  return {
    type: OPEN_PIZZA_MODAL,
    payload: pizza,
  };
}
