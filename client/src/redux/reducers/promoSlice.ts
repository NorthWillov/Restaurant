import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPromos = createAsyncThunk(
  "promos/fetchPromotions",
  async () => {
    const res = await axios.get("/api/getPromos");
    return res.data;
  }
);

export interface Promotion {
  _id: string;
  title: string;
  desc: string;
  image: string;
}

export interface PromoSliceState {
  isLoading: boolean;
  promos: Promotion[];
}

const initialState: PromoSliceState = {
  isLoading: false,
  promos: [],
};

const promoSlice = createSlice({
  name: "promos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPromos.fulfilled,
        (state, action: PayloadAction<Promotion[]>) => {
          state.promos = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const {} = promoSlice.actions;

export default promoSlice.reducer;
