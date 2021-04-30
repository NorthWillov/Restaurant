import React, { useContext } from "react";
import { connect } from "react-redux";
import {
  removeIngredient,
  removeExtraIngredient,
  backRemovedIngredient,
  addExtraIngredient,
} from "../redux/pizzaModalActions";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { formatter } from "../utils/formatter";
import { NewItemContext } from "../contexts/NewItemContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import RemoveIcon from "./icons/RemoveIcon";
import BackIcon from "./icons/BackIcon";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function PizzaOrderModalIngredients(props) {
  const {
    classes,
    pizzaInModal,
    removeIngredient,
    removeExtraIngredient,
    extraIngredients,
    backRemovedIngredient,
    removedIngredients,
    pizzaIngredients,
    currPizzaSize,
    addExtraIngredient,
  } = props;

  const handleExtraIngredientInputClick = (e) => {
    if (e.target.value !== "Dodaj składnik") {
      addExtraIngredient({
        ...pizzaIngredients.find((ing) => ing.name === e.target.value),
        uniqId: uuidv4(),
      });
      e.target.value = "Dodaj składnik";
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
              <div onClick={() => backRemovedIngredient(i)}>
                <span className={classes.modalIngredientsIngredientNameDeleted}>
                  {i}
                </span>
                <BackIcon styles={classes.icons} />
                {pizzaInModal?.ingredients[idx + 1] && ","}
              </div>
            ) : (
              <div onClick={() => removeIngredient(i)}>
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
      {extraIngredients.length > 0 && (
        <React.Fragment>
          <h6>Dodatki:</h6>

          <ul className={classes.modalIngredients}>
            {extraIngredients.map((ing, idx) => (
              <li
                key={ing.uniqId}
                className={classes.modalIngredientsIngredient}
                onClick={() => removeExtraIngredient(ing.uniqId)}
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
            disabled={extraIngredients.length >= 5}
          >
            <option>Dodaj składnik</option>
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

const mapStateToProps = (state) => {
  return {
    pizzaInModal: state.pizzaModal.pizzaInModal,
    removedIngredients: state.pizzaModal.removedIngredients,
    extraIngredients: state.pizzaModal.extraIngredients,
    pizzaIngredients: state.pizzas.pizzaIngredients,
    currPizzaSize: state.pizzaModal.currPizzaSize,
  };
};
const mapDispatchToProps = {
  removeIngredient,
  removeExtraIngredient,
  backRemovedIngredient,
  addExtraIngredient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PizzaOrderModalIngredients));
