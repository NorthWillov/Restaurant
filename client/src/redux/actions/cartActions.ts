// import axios from "axios";
// import {
//   ADD_PRODUCT_TO_CART,
//   GET_CART,
//   INCREMENT_QUANTITY,
//   DECREMENT_QUANTITY,
// } from "../types";
// import { hidePizzaModal } from "../reducers/pizzaModalSlice";

// export function getCart() {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("/api/getCart");
//       dispatch({
//         type: GET_CART,
//         payload: response.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export function addProductToCart(product) {
//   return async (dispatch) => {
//     try {
//       await axios.post("/api/addProduct", { product });
//       dispatch({
//         type: ADD_PRODUCT_TO_CART,
//       });
//       dispatch(getCart());
//       dispatch(hidePizzaModal());
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export function incrementQuantity(id, products) {
//   return async (dispatch) => {
//     const updatedProducts = products.map((product) =>
//       product._id === id
//         ? {
//             ...product,
//             quantity: product.quantity + 1,
//           }
//         : product
//     );

//     try {
//       await axios.put("/api/changeQuantity", {
//         products: updatedProducts,
//       });
//       dispatch({
//         type: INCREMENT_QUANTITY,
//         payload: updatedProducts,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export function decrementQuantity(product, products) {
//   return async (dispatch) => {
//     let updatedProducts = [];

//     if (product.quantity === 1) {
//       updatedProducts = products.filter((prod) => prod._id !== product._id);
//     } else {
//       updatedProducts = products.map((prod) => {
//         if (product._id === prod._id) {
//           return { ...prod, quantity: prod.quantity - 1 };
//         }
//         return prod;
//       });
//     }

//     try {
//       await axios.put("/api/changeQuantity", {
//         products: updatedProducts,
//       });
//       dispatch({
//         type: DECREMENT_QUANTITY,
//         payload: updatedProducts,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }
