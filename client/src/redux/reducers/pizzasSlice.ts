import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async () => {
  const res = await axios.get("/api/getPizzas");
  return res.data;
});

export const fetchPizzaIngredients = createAsyncThunk(
  "pizzas/fetchPizzasIngredients",
  async () => {
    const res = await axios.get("/api/getPizzaIngredients");
    return res.data;
  }
);

export interface PizzaIngredient {
  _id: string;
  name: string;
  price: any;
}

export interface PizzasSliceState {
  isLoading: boolean;
  pizzas: [];
  pizzaIngredients: PizzaIngredient[];
}

const initialState: PizzasSliceState = {
  isLoading: false,
  pizzas: [],
  pizzaIngredients: [],
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<[]>) => {
        state.pizzas = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPizzaIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPizzaIngredients.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.pizzaIngredients = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const {} = pizzasSlice.actions;

export default pizzasSlice.reducer;
