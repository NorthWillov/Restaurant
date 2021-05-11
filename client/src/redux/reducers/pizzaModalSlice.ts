import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExtraIngredients {
  name: string;
  price: any;
  uniqId: string;
  _id: string;
}

export interface Pizza {
  _id: string;
  name: string;
  type: string;
  size?: string;
  dough?: string;
  price: any;
  ingredients: Array<string>;
  image: string;
}

export interface PizzasModalSliceState {
  isModalOpen: boolean;
  pizzaInModal: Pizza;
  currPizzaSize: string;
  currPizzaDough: string;
  removedIngredients: string[];
  extraIngredients: ExtraIngredients[];
  fantazjaIngredientChoices: { [key: string]: string };
}

const initialState: PizzasModalSliceState = {
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
    openPizzaModal(state, action: PayloadAction<Pizza>) {
      state.isModalOpen = true;
      state.pizzaInModal = action.payload;
    },
    hidePizzaModal() {
      return initialState;
    },
    changePizzaSize(state, action: PayloadAction<string>) {
      state.currPizzaSize = action.payload;
    },
    changePizzaDough(state, action: PayloadAction<string>) {
      state.currPizzaDough = action.payload;
    },
    removeIngredient(state, action: PayloadAction<string>) {
      state.removedIngredients.push(action.payload);
    },
    returnRemovedIngredient(state, action: PayloadAction<string>) {
      state.removedIngredients = state.removedIngredients.filter(
        (ingredient) => ingredient !== action.payload
      );
    },
    addExtraIngredient(state, action: PayloadAction<ExtraIngredients>) {
      state.extraIngredients.push(action.payload);
    },
    removeExtraIngredient(state, action: PayloadAction<string>) {
      state.extraIngredients = state.extraIngredients.filter(
        (ingredient: { uniqId: string }) => ingredient.uniqId !== action.payload
      );
    },
    addExtraFantazyIngredient: {
      reducer(state, action: PayloadAction<{ ing: string; form: string }>) {
        const { ing, form } = action.payload;
        state.fantazjaIngredientChoices[form] = ing;
      },
      prepare(ing, form) {
        return {
          payload: { ing, form },
        };
      },
    },
    removeExtraFantazyIngredient(state, action: PayloadAction<string>) {
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
