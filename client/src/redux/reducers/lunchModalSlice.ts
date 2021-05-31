import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lunch } from "./lunchSlice";

export interface LunchModalSliceState {
  isModalOpen: boolean;
  lunchInModal: Lunch;
  lunchAddition: { [key: string]: string };
}

const initialState: LunchModalSliceState = {
  isModalOpen: false,
  lunchInModal: null,
  lunchAddition: {},
};

const lunchModalSlice = createSlice({
  name: "pizzaModal",
  initialState,
  reducers: {
    openLunchModal(state, action: PayloadAction<Lunch>) {
      state.isModalOpen = true;
      state.lunchInModal = action.payload;
      if (state.lunchInModal.first) {
        state.lunchAddition = {
          ...state.lunchAddition,
          first: state.lunchInModal.first,
        };
      }
      if (state.lunchInModal.second) {
        state.lunchAddition = {
          ...state.lunchAddition,
          second: state.lunchInModal.second,
        };
      }
      if (state.lunchInModal.meat) {
        state.lunchAddition = {
          ...state.lunchAddition,
          meat: state.lunchInModal.meat,
        };
      }
    },
    hideLunchModal() {
      return initialState;
    },
    changeLunchAddition: {
      reducer(state, action: PayloadAction<{ key: string; value: string }>) {
        const { key, value } = action.payload;
        state.lunchAddition[key] = value;
      },
      prepare(key, value) {
        return {
          payload: { key, value },
        };
      },
    },
  },
});

export const { openLunchModal, hideLunchModal, changeLunchAddition } =
  lunchModalSlice.actions;

export default lunchModalSlice.reducer;
