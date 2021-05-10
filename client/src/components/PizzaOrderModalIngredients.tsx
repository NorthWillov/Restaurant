import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeIngredient,
  removeExtraIngredient,
  returnRemovedIngredient,
  addExtraIngredient,
} from "../redux/reducers/pizzaModalSlice";
import { Form } from "react-bootstrap";
import PizzaOrderModalFantazjaCase from "./PizzaOrderModalFantazjaCase";
import { v4 as uuidv4 } from "uuid";
import { formatter } from "../utils/formatter";
import RemoveIcon from "./icons/RemoveIcon";
import BackIcon from "./icons/BackIcon";
import withStyles from "react-jss";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function PizzaOrderModalIngredients(props) {
  const { classes } = props;

  const dispatch = useDispatch();

  const pizzaIngredients = useSelector(
    (state) => state.pizzas.pizzaIngredients
  );
  const pizzaModal = useSelector((state) => state.pizzaModal);
  const {
    pizzaInModal,
    removedIngredients,
    extraIngredients,
    currPizzaSize,
    fantazjaIngredientChoices,
  } = pizzaModal;

  const inputPlaceholder = `Dodaj${
    pizzaInModal?.name === "Fantazja" ? " płatny" : ""
  } składnik`;

  const handleExtraIngredientInputClick = (e) => {
    if (e.target.value !== inputPlaceholder) {
      dispatch(
        addExtraIngredient({
          ...pizzaIngredients.find((ing) => ing.name === e.target.value),
          uniqId: uuidv4(),
        })
      );
      e.target.value = inputPlaceholder;
    }
  };

  return (
    <>
      <ul className={classes.modalIngredients}>
        {pizzaInModal?.ingredients.map((i, idx) => (
          <li
            key={uuidv4()}
            value={i}
            className={classes.modalIngredientsIngredient}
          >
            {removedIngredients.includes(i) ? (
              <div onClick={() => dispatch(returnRemovedIngredient(i))}>
                <span className={classes.modalIngredientsIngredientNameDeleted}>
                  {i}
                </span>
                <BackIcon styles={classes.icons} />
                {pizzaInModal?.ingredients[idx + 1] && ","}
              </div>
            ) : (
              <div onClick={() => dispatch(removeIngredient(i))}>
                <span className={classes.modalIngredientsIngredientName}>
                  {i}
                </span>
                <RemoveIcon styles={classes.icons} />
                {pizzaInModal?.ingredients[idx + 1] && ","}
              </div>
            )}
          </li>
        ))}
      </ul>

      {pizzaInModal?.name === "Fantazja" && <PizzaOrderModalFantazjaCase />}

      {extraIngredients.length > 0 && (
        <React.Fragment>
          <h6>Dodatki:</h6>

          <ul className={classes.modalIngredients}>
            {extraIngredients.map((ing, idx) => (
              <li
                key={ing.uniqId}
                className={classes.modalIngredientsIngredient}
                onClick={() => dispatch(removeExtraIngredient(ing.uniqId))}
              >
                <span className={classes.modalIngredientsIngredientName}>
                  {ing.name}, [{currPizzaSize}: +
                  {formatter.format(ing.price[currPizzaSize])}zł]
                </span>
                <RemoveIcon styles={classes.icons} />
                {extraIngredients[idx + 1] && ","}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
      <Form>
        <Form.Group>
          <Form.Control
            onChange={handleExtraIngredientInputClick}
            size="sm"
            as="select"
            disabled={
              pizzaInModal?.name === "Fantazja"
                ? Object.values(fantazjaIngredientChoices).length !== 5 ||
                  extraIngredients.length === 5
                : extraIngredients.length === 5
            }
          >
            <option>{inputPlaceholder}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}, [{currPizzaSize}: +
                {formatter.format(i.price[currPizzaSize])}zł]
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

export default withStyles(styles)(PizzaOrderModalIngredients);
