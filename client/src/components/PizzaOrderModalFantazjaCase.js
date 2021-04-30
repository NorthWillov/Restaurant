import React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { formatter } from "../utils/formatter";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function OrderModalFantazjaCase(props) {
  const {
    currIngredients,
    handleIngredientClick,
    classes,
    handleFantazjaInputClick,
  } = props;

  const pizzaIngredients = useSelector(
    (state) => state.pizzas.pizzaIngredients
  );
  const currPizzaSize = useSelector((state) => state.pizzaModal.currPizzaSize);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            name="form1"
            className={"mt-1"}
            onChange={handleFantazjaInputClick}
            size="sm"
            as="select"
          >
            <option>{`Wybierz składnik`}</option>
            {pizzaIngredients.map((i) => (
              <option key={i._id} value={i.name}>
                {i.name}, [{currPizzaSize}: +
                {formatter.format(i.price[currPizzaSize])}zł]
              </option>
            ))}
          </Form.Control>
          <Form.Control
            name="form2"
            className={"mt-1"}
            onChange={handleFantazjaInputClick}
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
            onChange={handleFantazjaInputClick}
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
            onChange={handleFantazjaInputClick}
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
            onChange={handleFantazjaInputClick}
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
