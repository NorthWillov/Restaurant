import React, { FC } from "react"
import { useAppSelector } from "../../redux/hooks"
import { ICartProduct } from "../../redux/reducers/cartSlice"
import { Link, useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"
import { formatter } from "../../utils/formatter"
import ArrowIcon from "../icons/ArrowIcon"
import CartProduct from "../CartProduct"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pages/cartPage"

export interface CartProps extends WithStylesProps<typeof styles> {}

const Cart: FC<CartProps> = ({ classes }) => {
  let history = useHistory()

  const cart = useAppSelector((state) => state.cart.cart)

  return (
    <div className={classes.root}>
      <h1 className="mt-5 mb-5">Koszyk:</h1>

      {cart.products?.length === 0 && <h6>Koszyk jest pusty :(</h6>}

      {cart.products?.map((product: ICartProduct) => (
        <CartProduct key={product._id} product={product} />
      ))}

      <h4 className={classes.sumToPay}>
        Do zapłaty:{" "}
        {formatter.format(
          cart.products.reduce((acc, el) => acc + el.price * el.quantity, 0)
        )}
        zł
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
        <Link to="/cart/delivery-info">
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
  )
}

export default withStyles(styles)(Cart)
