import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { openPizzaModal } from "../redux/actions";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaListStyles";

function PizzasList(props) {
  const [pizzas, setPizzas] = useState([]);
  const { classes } = props;

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await axios.get("/api/getPizzas");
        setPizzas(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPizzas();
  }, []);

  const handlePizzaClick = (pizza) => {
    props.openPizzaModal(pizza);
  };

  return (
    <section id="pizzas">
      <h3 className="title pt-5 mb-4">Pizzy:</h3>
      <Row>
        {pizzas.map((pizza) => (
          <React.Fragment key={pizza._id}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className={`mb-3 ${classes.Card}`}>
                <Card.Img
                  style={{ cursor: "pointer" }}
                  variant="top"
                  src={pizza.image}
                  alt={pizza.name}
                  onClick={() => props.handlePizzaClick(pizza)}
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
                      od{" "}
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
  );
}

const mapDispatchToProps = {
  openPizzaModal,
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(PizzasList));
