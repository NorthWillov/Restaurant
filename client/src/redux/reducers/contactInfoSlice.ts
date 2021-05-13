import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "./cartSlice";

export interface Order {
  deliveryoption: string;
  time: string;
  nameandsurname: string;
  phonenumber: number;
  email: string;
  street: string;
  streetnumber: number;
  town: string;
  flat: number;
  floor: number;
  note: string;
  payment: string;
  products: CartProduct[];
  totalamount: number;
}

const initialState: Order = {
  deliveryoption: "",
  time: "",
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
  products: [],
  totalamount: 0,
};

const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {},
});

export const {} = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
