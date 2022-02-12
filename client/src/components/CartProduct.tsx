import React, { FC } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import {
  incrementQuantity,
  decrementQuantity,
  ICartProduct,
} from "../redux/reducers/cartSlice"
import { Button, Form } from "react-bootstrap"
import { formatter } from "../utils/formatter"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/pages/cartPage"

export interface CartProductProps extends WithStylesProps<typeof styles> {
  product: ICartProduct
}

const CartProduct: FC<CartProductProps> = ({ classes, product }) => {
  const dispatch = useAppDispatch()
  const isCartLoading = useAppSelector((state) => state.cart.isCartLoading)

  const handleIncrement = () => {
    dispatch(incrementQuantity(product._id))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(product._id))
  }

  return (
    <div className={classes.item}>
      <div className={classes.itemCard}>
        <div className="mr-3">
          <img src={product.image} alt="product" className={classes.img} />
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
                  {product.extras.map((e, idx: number) =>
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
        </div>
      </div>
      <hr className="mt-3 mb-0" />
      <div className={classes.itemCheckout}>
        <h5 className={classes.productPrice}>
          {formatter.format(product.price * product.quantity)}PLN
        </h5>
        <div className={classes.productCount}>
          <Button
            onClick={handleDecrement}
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
            onClick={handleIncrement}
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
  )
}

export default withStyles(styles)(CartProduct)
