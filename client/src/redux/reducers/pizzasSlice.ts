import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

const initialState = {
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
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPizzaIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPizzaIngredients.fulfilled, (state, action) => {
        state.pizzaIngredients = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = pizzasSlice.actions;

export default pizzasSlice.reducer;
