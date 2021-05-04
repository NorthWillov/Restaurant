import axios from "axios";

export function addProductToCart(product) {
  return async () => {
    try {
      await axios.post("/api/addProduct", { product });
    } catch (err) {
      console.log(err);
    }
  };
}
