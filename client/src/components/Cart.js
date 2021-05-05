import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity } from "../redux/actions/cartActions";
import { getCart } from "../redux/actions/cartActions";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import ArrowIcon from "./icons/ArrowIcon";
import { Link } from "react-router-dom";
import styles from "../styles/cartStyles";

function Cart(props) {
  const [cartt, setCart] = useState({ products: [] });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const { classes } = props;

  const changeQuantity = async (product, sign) => {
    let updatedCartProducts = [];
    if (product.quantity === 1 && sign === "minus") {
      updatedCartProducts = cart.products.filter((i) => i._id !== product._id);
    } else {
      updatedCartProducts = cart.products.map((i) =>
        i._id === product._id
          ? {
              ...i,
              quantity: sign === "plus" ? i.quantity + 1 : i.quantity - 1,
            }
          : i
      );
    }

    try {
      const res = await axios.put("/api/changeQuantity", {
        products: updatedCartProducts,
      });
    } catch (err) {
      console.log(err);
    }
    setCart({ ...cart, products: updatedCartProducts });
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  // useEffect(() => {
  //   let counter = 0;
  //   cart.products.map(
  //     (product) => (counter = counter + product.price * product.quantity)
  //   );
  //   setSum(formatter.format(counter));
  // }, [cart]);

  return (
    <div className={classes.root}>
      <h1 className="mt-5 mb-5">Koszyk:</h1>

      {cart.products?.length === 0 && <h6>Koszyk jest pusty :(</h6>}

      {cart.products?.map((product) => (
        <div key={product._id} className={classes.item}>
          <div className={classes.itemCard}>
            <div className="mr-3">
              <img
                style={{ width: "100px", borderRadius: "0.5rem" }}
                src={product.image}
                alt="product"
              />
            </div>
            <div>
              <h6>{product.name}</h6>
              {product.productType === "pizza" && (
                <>
                  <p>
                    {product.size}, {product.dough}
                  </p>
                  {product.removedIng.length !== 0 && (
                    <p>Bez: {product.removedIng.map((i) => i)}</p>
                  )}
                  {product.extras.length !== 0 && (
                    <p>
                      Dodaj:{" "}
                      {product.extras.map((e, idx) =>
                        product.extras[idx + 1] ? e.name + "," : e.name
                      )}
                    </p>
                  )}
                </>
              )}
              {product.productType === "lunch" && (
                <>
                  {product.meat && <p>mięso: {product.meat}</p>}
                  <p>{product.first}</p>
                  <p>{product.second}</p>
                </>
              )}
              {product.productType === "salad" && (
                <>
                  <p>{product.meat}</p>
                  <p>{product.sous}</p>
                </>
              )}
              {product.productType === "sweetPancake" && (
                <>
                  <p>{product.way}</p>
                  <p>{product.jam}</p>
                  <p>{product.adds}</p>
                </>
              )}
              {product.productType === "saltPancake" && (
                <>
                  <p>{product.sous}</p>
                </>
              )}
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <div className={classes.itemCheckout}>
            <h5 className={classes.productPrice}>
              {formatter.format(product.price * product.quantity)}PLN
            </h5>
            <div className={classes.productCount}>
              <Button
                onClick={(sign) => changeQuantity(product, (sign = "minus"))}
                className={classes.buttonCount}
                variant="primary"
                size="sm"
              >
                -
              </Button>
              <Form.Control
                type="text"
                placeholder={product.quantity}
                className={classes.numberProduct}
                readOnly
              />

              <Button
                onClick={() =>
                  dispatch(incrementQuantity(product._id, cart.products))
                }
                variant="primary"
                size="sm"
                className={classes.buttonCount}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      ))}

      <h4 className={classes.sumToPay}>Do zapłaty: PLN</h4>

      <hr className="mt-4" />

      <div className={classes.finalBtns}>
        <Button
          variant="outline-secondary"
          onClick={() => props.history.push("/")}
          className="mr-3"
          size="lg"
        >
          <ArrowIcon />
          Wroć
        </Button>
        <Link to="/cart/contactinfo">
          <Button
            size="lg"
            disabled={cart.length === 0}
            variant="success"
            type="button"
          >
            Zamawiam!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default withStyles(styles)(Cart);
