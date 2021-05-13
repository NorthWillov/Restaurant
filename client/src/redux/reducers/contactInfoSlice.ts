import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { resetCart } from "./cartSlice";

export const handleOptionsSubmit = createAsyncThunk(
  "contactInfo/createOrder",
  async (contactInfo: ContactInfo, { dispatch }) => {
    await axios.post("/api/createOrder", { contactInfo });
    dispatch(resetCart());
  }
);

export interface ContactInfo {
  [key: string]: string | number;
}

const initialState: ContactInfo = {
  deliveryoption: "Dowóz",
  time: "Jak najszybciej",
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
  extraReducers: (builder) =>
    builder.addCase(handleOptionsSubmit.fulfilled, () => {
      return initialState;
    }),
});

export const { handleOptionsChange } = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
