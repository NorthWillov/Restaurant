import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/actions/cartActions";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";
import styles from "../styles/cartStyles";

function Cart(props) {
  const [cartt, setCart] = useState({ products: [] });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const { classes } = props;

  const changeQuantity = async (item, sign) => {
    let updatedCartProducts = [];
    if (item.quantity === 1 && sign === "minus") {
      updatedCartProducts = cart.products.filter((i) => i._id !== item._id);
    } else {
      updatedCartProducts = cart.products.map((i) =>
        i._id === item._id
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

      {cart.products?.map((item) => (
        <div key={item._id} className={classes.item}>
          <div className={classes.itemCard}>
            <div className="mr-3">
              <img
                style={{ width: "100px", borderRadius: "0.5rem" }}
                src={item.image}
                alt="product"
              />
            </div>
            <div>
              <h6>{item.name}</h6>
              {item.productType === "pizza" && (
                <>
                  <p>
                    {item.size}, {item.dough}
                  </p>
                  {item.removedIng.length !== 0 && (
                    <p>Bez: {item.removedIng.map((i) => i)}</p>
                  )}
                  {item.extras.length !== 0 && (
                    <p>
                      Dodaj:{" "}
                      {item.extras.map((e, idx) =>
                        item.extras[idx + 1] ? e.name + "," : e.name
                      )}
                    </p>
                  )}
                </>
              )}
              {item.productType === "lunch" && (
                <>
                  {item.meat && <p>mięso: {item.meat}</p>}
                  <p>{item.first}</p>
                  <p>{item.second}</p>
                </>
              )}
              {item.productType === "salad" && (
                <>
                  <p>{item.meat}</p>
                  <p>{item.sous}</p>
                </>
              )}
              {item.productType === "sweetPancake" && (
                <>
                  <p>{item.way}</p>
                  <p>{item.jam}</p>
                  <p>{item.adds}</p>
                </>
              )}
              {item.productType === "saltPancake" && (
                <>
                  <p>{item.sous}</p>
                </>
              )}
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <div className={classes.itemCheckout}>
            <h5 className={classes.productPrice}>
              {formatter.format(item.price * item.quantity)}PLN
            </h5>
            <div className={classes.productCount}>
              <Button
                onClick={(sign) => changeQuantity(item, (sign = "minus"))}
                className={classes.buttonCount}
                variant="primary"
                size="sm"
              >
                -
              </Button>
              <Form.Control
                type="text"
                placeholder={item.quantity}
                className={classes.numberProduct}
                readOnly
              />

              <Button
                onClick={(sign) => changeQuantity(item, (sign = "plus"))}
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
          <BackIcon />
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
