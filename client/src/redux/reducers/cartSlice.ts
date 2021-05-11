import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { hidePizzaModal } from "./pizzaModalSlice";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const res = await axios.get("/api/getCart");
  return res.data;
});

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product: CartProduct, { dispatch }) => {
    await axios.post("/api/addProduct", { product });
    await dispatch(fetchCart());
    dispatch(hidePizzaModal());
  }
);

export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async (productId: string) => {
    await axios.put("/api/incrementProductQuantity", { productId });
    return productId;
  }
);

export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async (productId: string) => {
    await axios.put("/api/decrementProductQuantity", { productId });
    return productId;
  }
);

export interface CartProduct {
  _id: string;
  productId: string;
  productType: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  size?: string;
  dough?: string;
  removedIng?: string[];
  extras?: [{ name: string }] | [];
  first?: string;
  second?: string;
  meat?: string;
}

export interface Cart {
  active: boolean;
  _id: string;
  products: CartProduct[];
}

export interface CartSliceState {
  isCartLoading: boolean;
  cart: Cart;
}

const initialState: CartSliceState = {
  isCartLoading: false,
  cart: { active: false, _id: "", products: [] },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isCartLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<Cart>) => {
        if (action.payload) {
          state.cart = action.payload;
        }
        state.isCartLoading = false;
      })
      .addCase(
        incrementQuantity.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.cart.products = state.cart.products.map((product) =>
            product._id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        }
      )
      .addCase(
        decrementQuantity.fulfilled,
        (state, action: PayloadAction<string>) => {
          let newProducts: Array<CartProduct> = [];

          state.cart.products.map((product) => {
            if (product._id === action.payload) {
              product.quantity !== 1 &&
                newProducts.push({
                  ...product,
                  quantity: product.quantity - 1,
                });
            } else {
              newProducts.push(product);
            }
          });

          state.cart.products = newProducts;
        }
      );
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
