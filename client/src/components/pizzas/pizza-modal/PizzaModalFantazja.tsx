import React, { FC } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import {
  addExtraFantazyIngredient,
  removeExtraFantazyIngredient,
} from "../../../redux/reducers/pizzaModalSlice"
import { Form } from "react-bootstrap"
import withStyles from "react-jss"
import styles from "../../../styles/modals/pizza/pizzaModalIngredients"

const OrderModalFantazjaCase: FC = () => {
  const pizzaIngredients = useAppSelector(
    (state) => state.pizzas.pizzaIngredients
  )
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Wybierz składnik") {
      dispatch(removeExtraFantazyIngredient(e.target.name))
    } else {
      dispatch(addExtraFantazyIngredient(e.target.value, e.target.name))
    }
  }

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
  )
}

export default withStyles(styles)(OrderModalFantazjaCase)
