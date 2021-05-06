import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  pizzaInModal: null,
  currPizzaSize: "20cm",
  currPizzaDough: "średnie",
  removedIngredients: [],
  extraIngredients: [],
  fantazjaIngredientChoices: {},
};

const pizzaModalSlice = createSlice({
  name: "pizzaModal",
  initialState,
  reducers: {
    openPizzaModal(state, action) {
      state.isModalOpen = true;
      state.pizzaInModal = action.payload;
    },
    hidePizzaModal() {
      return initialState;
    },
    changePizzaSize(state, action) {
      state.currPizzaSize = action.payload;
    },
    changePizzaDough(state, action) {
      state.currPizzaDough = action.payload;
    },
    removeIngredient(state, action) {
      state.removedIngredients.push(action.payload);
    },
    returnRemovedIngredient(state, action) {
      state.removedIngredients = state.removedIngredients.filter(
        (ingredient) => ingredient !== action.payload
      );
    },
    addExtraIngredient(state, action) {
      state.extraIngredients.push(action.payload);
    },
    removeExtraIngredient(state, action) {
      state.extraIngredients = state.extraIngredients.filter(
        (ingredient) => ingredient.uniqId !== action.payload
      );
    },
    addExtraFantazyIngredient: {
      reducer(state, action) {
        const { ing, form } = action.payload;
        state.fantazjaIngredientChoices[form] = ing;
      },
      prepare(ing, form) {
        return {
          payload: { ing, form },
        };
      },
    },
    removeExtraFantazyIngredient(state, action) {
      delete state.fantazjaIngredientChoices[action.payload];
    },
  },
});

export const {
  openPizzaModal,
  hidePizzaModal,
  changePizzaSize,
  changePizzaDough,
  removeIngredient,
  returnRemovedIngredient,
  addExtraIngredient,
  removeExtraIngredient,
  addExtraFantazyIngredient,
  removeExtraFantazyIngredient,
} = pizzaModalSlice.actions;

export default pizzaModalSlice.reducer;
