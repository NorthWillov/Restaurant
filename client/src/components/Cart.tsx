import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  CartProduct,
} from "../redux/reducers/cartSlice";
import { Link, RouteComponentProps } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import ArrowIcon from "./icons/ArrowIcon";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../styles/pages/cartPage";

export interface CartProps
  extends RouteComponentProps,
    WithStylesProps<typeof styles> {}

const Cart: FC<CartProps> = ({ classes, history }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const isCartLoading = useAppSelector((state) => state.cart.isCartLoading);

  return (
    <div className={classes.root}>
      <h1 className="mt-5 mb-5">Koszyk:</h1>

      {cart.products?.length === 0 && <h6>Koszyk jest pusty :(</h6>}

      {cart.products?.map((product: CartProduct) => (
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
                        product.extras[idx + 1] ? e + "," : e
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
              {/* {product.productType === "salad" && (
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
              )} */}
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <div className={classes.itemCheckout}>
            <h5 className={classes.productPrice}>
              {formatter.format(product.price * product.quantity)}PLN
            </h5>
            <div className={classes.productCount}>
              <Button
                onClick={() => dispatch(decrementQuantity(product._id))}
                disabled={isCartLoading}
                className={classes.buttonCount}
                variant="primary"
                size="sm"
              >
                -
              </Button>
              <Form.Control
                type="text"
                placeholder={product.quantity.toString()}
                className={classes.numberProduct}
                readOnly
              />

              <Button
                onClick={() => dispatch(incrementQuantity(product._id))}
                disabled={isCartLoading}
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

      <h4 className={classes.sumToPay}>
        Do zapłaty:{" "}
        {formatter.format(
          cart.products.reduce((acc, el) => acc + el.price * el.quantity, 0)
        )}
        PLN
      </h4>

      <hr className="mt-4" />

      <div className={classes.finalBtns}>
        <Button
          variant="outline-secondary"
          onClick={() => history.push("/")}
          className="mr-3"
          size="lg"
        >
          <ArrowIcon />
          Wroć
        </Button>
        <Link to="/cart/contactinfo">
          <Button
            size="lg"
            disabled={cart.products.length === 0}
            variant="success"
            type="button"
          >
            Zamawiam!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Cart);
