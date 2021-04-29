import React, { useContext } from "react";
import { connect } from "react-redux";
import { removeIngredient, backRemovedIngredient } from "../redux/actions";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { NewItemContext } from "../contexts/NewItemContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import RemoveIcon from "./icons/RemoveIcon";
import BackIcon from "./icons/BackIcon";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function PizzaOrderModalIngredients(props) {
  const { newItem } = useContext(NewItemContext);
  const { currIngredients } = useContext(CurrIngredientsContext);
  const {
    extras,
    handleIngredientClick,
    handleExtraIngredientInputClick,
    handleExtraIngredientClick,
    classes,
    pizzaInModal,
    removeIngredient,
    backRemovedIngredient,
    removedIngredients,
  } = props;

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
      {extras.length > 0 && (
        <React.Fragment>
          <h6>Dodatki:</h6>

          <ul className={classes.modalIngredients}>
            {extras.map((el, idx) => (
              <li
                key={uuidv4()}
                className={classes.modalIngredientsIngredient}
                onClick={() => handleExtraIngredientClick(el)}
              >
                <span className={classes.modalIngredientsIngredientName}>
                  {el.name}
                </span>
                <span>{`+(${el.price}zł)`}</span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className={`bi bi-dash-circle ${classes.icons}`}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
                {extras[idx + 1] && ","}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
      <Form>
        <Form.Group>
          {/* DONT WORK FOR KNOW REFACTORING FOR WEBPACK */}

          {/* <Form.Control
            onChange={handleExtraIngredientInputClick}
            size="sm"
            as="select"
            disabled={extras.length >= 5}
          >
            <option>Dodaj składnik</option>
            {MENU.pizzasIngredients.map((i, idx) => (
              <option key={idx} value={i.name}>
                {i.name} (+{i.price}pln)
              </option>
            ))}
          </Form.Control> */}
        </Form.Group>
      </Form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzaInModal: state.pizzaModal.pizzaInModal,
    removedIngredients: state.pizzaModal.removedIngredients,
  };
};
const mapDispatchToProps = {
  removeIngredient,
  backRemovedIngredient,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PizzaOrderModalIngredients));
