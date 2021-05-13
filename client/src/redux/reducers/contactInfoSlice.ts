import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  [key: string]: string | number;
}

const initialState: Order = {
  deliveryoption: "Dowóz",
  time: "Jak najczybciej",
  nameandsurname: "",
  phonenumber: 0,
  email: "",
  street: "",
  streetnumber: 0,
  town: "",
  flat: 0,
  floor: 0,
  note: "",
  payment: "",
};

const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    handleOptionsChange: {
      reducer(
        state,
        action: PayloadAction<{ name: string; value: string | number }>
      ) {
        const { name, value } = action.payload;
        state[name] = value;
      },
      prepare(name, value) {
        return {
          payload: { name, value },
        };
      },
    },
  },
});

export const { handleOptionsChange } = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
