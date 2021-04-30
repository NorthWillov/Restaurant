import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidePizzaModal } from "../redux/pizzaModalActions";
import { addProductToCart } from "../redux/cartActions";
import PizzaOrderModalSizeAndDough from "./PizzaOrderModalSizeAndDough";
import PizzaOrderModalIngredients from "./PizzaOrderModalIngredients";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalStyles";
import CartIcon from "./icons/CartIcon";
import ArrowIcon from "./icons/ArrowIcon";

function PizzaOrderModal(props) {
  const { classes } = props;
  const dispatch = useDispatch();
  const pizzaModal = useSelector((state) => state.pizzaModal);
  const {
    isModalOpen,
    pizzaInModal,
    currPizzaSize,
    currPizzaDough,
    extraIngredients,
    removedIngredients,
  } = pizzaModal;

  const extraIngredientsSumPrice = useMemo(() => {
    return extraIngredients
      .map((ing) => ing.price[currPizzaSize])
      .reduce((a, b) => a + b, 0);
  }, [extraIngredients, currPizzaSize]);

  const pizzaPrice = useMemo(() => {
    return pizzaInModal?.name === "Calzone (Pierog)"
      ? formatter.format(pizzaInModal?.price + extraIngredientsSumPrice)
      : currPizzaSize === "20cm"
      ? formatter.format(
          pizzaInModal?.price[currPizzaSize] + extraIngredientsSumPrice
        )
      : currPizzaSize === "28cm"
      ? formatter.format(
          pizzaInModal?.price[currPizzaSize] + extraIngredientsSumPrice
        )
      : currPizzaSize === "50cm"
      ? formatter.format(
          pizzaInModal?.price[currPizzaSize] + extraIngredientsSumPrice
        )
      : 0;
  }, [extraIngredients, currPizzaSize, isModalOpen]);

  const handleModalClose = () => {
    dispatch(hidePizzaModal());
  };

  const handleModalSubmit = () => {
    const product = {
      name: pizzaInModal.name,
      image: pizzaInModal.image,
      productType: pizzaInModal.type,
      quantity: 1,
      size: currPizzaSize,
      dough: currPizzaDough,
      extras: extraIngredients,
      removedIng: removedIngredients,
      price: pizzaPrice,
    };
    dispatch(addProductToCart(product));
    dispatch(hidePizzaModal());
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={handleModalClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row>
          <Col lg={7} style={{ display: "flex" }}>
            <img
              className={classes.modalPizzaImage}
              src={pizzaInModal?.image}
              alt="pizza"
            />
          </Col>
          <Col
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Modal.Title>{pizzaInModal?.name}</Modal.Title>
              <p>
                {pizzaInModal?.name === "Calzone (Pierog)"
                  ? "28cm, średnie"
                  : `${currPizzaSize}, ${currPizzaDough}`}
              </p>
              <PizzaOrderModalIngredients />

              <PizzaOrderModalSizeAndDough />
            </div>
            <div className={classes.checkout}>
              <Button
                variant="outline-secondary"
                onClick={handleModalClose}
                className="mr-3"
              >
                <ArrowIcon />
                Wroć
              </Button>
              <span className={classes.modalPrice}>
                {pizzaPrice}
                zł
              </span>

              <Button
                variant="success"
                onClick={handleModalSubmit}
                type="button"
              >
                Dodaj <CartIcon styles={classes.icon} />
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default withStyles(styles)(PizzaOrderModal);
