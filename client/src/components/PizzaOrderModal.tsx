import React, { FC, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { hidePizzaModal } from "../redux/reducers/pizzaModalSlice";
import { addProductToCart, CartProduct } from "../redux/reducers/cartSlice";
import PizzaOrderModalSizeAndDough from "./PizzaOrderModalSizeAndDough";
import PizzaOrderModalIngredients from "./PizzaOrderModalIngredients";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import withStyles from "react-jss";
import styles from "../styles/pizzaOrderModalStyles";
import CartIcon from "./icons/CartIcon";
import ArrowIcon from "./icons/ArrowIcon";

interface PizzaOrderModalProps {
  classes: { [key: string]: string };
}

const PizzaOrderModal: FC<PizzaOrderModalProps> = ({ classes }) => {
  const dispatch = useAppDispatch();
  const pizzaModal = useAppSelector((state) => state.pizzaModal);

  const {
    isModalOpen,
    pizzaInModal,
    currPizzaSize,
    currPizzaDough,
    extraIngredients,
    removedIngredients,
    fantazjaIngredientChoices,
  } = pizzaModal;

  const extraIngredientsSumPrice: number = useMemo(() => {
    return extraIngredients.reduce(
      (acc, el) => acc + el.price[currPizzaSize],
      0
    );
  }, [extraIngredients, currPizzaSize]);

  const pizzaPrice: number = useMemo(() => {
    return pizzaInModal?.name === "Calzone (Pierog)"
      ? pizzaInModal?.price + extraIngredientsSumPrice
      : pizzaInModal?.price[currPizzaSize] + extraIngredientsSumPrice;
  }, [extraIngredients, currPizzaSize, isModalOpen]);

  const handleModalClose = () => {
    dispatch(hidePizzaModal());
  };

  const handleModalSubmit = () => {
    const product: CartProduct = {
      name: pizzaInModal.name,
      image: pizzaInModal.image,
      productType: pizzaInModal.type,
      quantity: 1,
      size: currPizzaSize,
      dough: currPizzaDough,
      extras:
        pizzaInModal.name === "Fantazja"
          ? extraIngredients
              .map((ing) => ing.name)
              .concat(Object.values(fantazjaIngredientChoices))
          : extraIngredients.map((ing) => ing.name),
      removedIng: removedIngredients,
      price: pizzaPrice,
    };
    dispatch(addProductToCart(product));
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
                {formatter.format(pizzaPrice)}
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
};

export default withStyles(styles)(PizzaOrderModal);
