import React, { FC } from "react"
import { formatter } from "../../utils/formatter"
import { Button, Card, Col } from "react-bootstrap"
import { useAppDispatch } from "../../redux/hooks"
import {
  changePizzaSize,
  openPizzaModal,
  IPizza,
} from "../../redux/reducers/pizzaModalSlice"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pizzaListStyles"

interface IPizzaProps extends WithStylesProps<typeof styles> {
  pizza: IPizza
}

const Pizza: FC<IPizzaProps> = ({ classes, pizza }) => {
  const dispatch = useAppDispatch()

  const handlePizzaClick = (pizza: IPizza) => {
    dispatch(openPizzaModal(pizza))

    if (pizza.name === "Calzone (Pierog)") {
      dispatch(changePizzaSize("28cm"))
    }
  }

  return (
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
          <Card.Title className={classes.title}>{pizza.name}</Card.Title>
          <Card.Subtitle className={`mb-2 text-muted ${classes.subtitle}`}>
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
              variant="outline-secondary"
              size="sm"
              className={`ml-2 ${classes.pickBtn}`}
            >
              Wybierz
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default withStyles(styles)(Pizza)
