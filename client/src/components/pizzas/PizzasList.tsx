import React, { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { formatter } from "../../utils/formatter"
import { Row, Col, Button, Card } from "react-bootstrap"
import {
  changePizzaSize,
  openPizzaModal,
  Pizza,
} from "../../redux/reducers/pizzaModalSlice"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pizzaListStyles"

interface IPizzaListProps extends WithStylesProps<typeof styles> {}

const PizzasList: FC<IPizzaListProps> = ({ classes }) => {
  const dispatch = useAppDispatch()

  const pizzas = useAppSelector((state) => state.pizzas.pizzas)

  const handlePizzaClick = (pizza: Pizza) => {
    dispatch(openPizzaModal(pizza))

    if (pizza.name === "Calzone (Pierog)") {
      dispatch(changePizzaSize("28cm"))
    }
  }

  return (
    <section id="pizzas">
      <h3 className="title pt-5 mb-4">Pizzy:</h3>
      <Row>
        {pizzas.map((pizza: Pizza) => (
          <React.Fragment key={pizza._id}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className={`mb-3 ${classes.Card}`}>
                <Card.Img
                  style={{ cursor: "pointer" }}
                  variant="top"
                  src={pizza.image}
                  alt={pizza.name}
                  onClick={() => handlePizzaClick(pizza)}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {pizza.name}
                  </Card.Title>
                  <Card.Subtitle
                    className={`mb-2 text-muted ${classes.subtitle}`}
                  >
                    {pizza.name !== "Fantazja"
                      ? pizza.ingredients.map((i, idx) => (
                          <span key={i}>
                            {pizza.ingredients[idx + 1] ? i + ", " : i}
                          </span>
                        ))
                      : "sos, ser, +5 własnych składników do wyboru"}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <span className={classes.checkoutPrice}>
                      {pizza.name === "Calzone (Pierog)"
                        ? formatter.format(pizza.price)
                        : formatter.format(pizza.price["20cm"])}
                      zł
                    </span>
                    <Button
                      onClick={() => handlePizzaClick(pizza)}
                      variant="outline-dark"
                      size="sm"
                      className="ml-2"
                    >
                      Wybierz
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </section>
  )
}

export default withStyles(styles)(PizzasList)
