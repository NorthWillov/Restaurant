import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExtraFantazyIngredient,
  removeExtraFantazyIngredient,
} from "../redux/reducers/pizzaModalSlice";
import { Form } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function OrderModalFantazjaCase(props) {
  const pizzaIngredients = useSelector(
    (state) => state.pizzas.pizzaIngredients
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "Wybierz składnik") {
      dispatch(removeExtraFantazyIngredient(e.target.name));
    } else {
      dispatch(addExtraFantazyIngredient(e.target.value, e.target.name));
    }
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            name="form1"
            className={"mt-1"}
            onChange={handleChange}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            name="form2"
            className={"mt-1"}
            onChange={handleChange}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            name="form3"
            className={"mt-1"}
            onChange={handleChange}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            name="form4"
            className={"mt-1"}
            onChange={handleChange}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            name="form5"
            className={"mt-1"}
            onChange={handleChange}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

export default withStyles(styles)(OrderModalFantazjaCase);
