import React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalIngredientsStyles";

function OrderModalFantazjaCase(props) {
  const {
    currIngredients,
    handleIngredientClick,
    classes,
    handleFantazjaInputClick,
  } = props;

  const pizzaInModal = useSelector((state) => state.pizzas.pizzaInModal);
  const mustBeIngredientsFromDb = [{ name: "krewetki" }, { name: "fuga" }];

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
            {mustBeIngredientsFromDb.map((i) => (
              <option key={uuidv4()} value={i.name}>
                {i.name}
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
            {mustBeIngredientsFromDb.map((i) => (
              <option key={uuidv4()} value={i.name}>
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
            {mustBeIngredientsFromDb.map((i) => (
              <option key={uuidv4()} value={i.name}>
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
            {mustBeIngredientsFromDb.map((i) => (
              <option key={uuidv4()} value={i.name}>
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
            {mustBeIngredientsFromDb.map((i) => (
              <option key={uuidv4()} value={i.name}>
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
