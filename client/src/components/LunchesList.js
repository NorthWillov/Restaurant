import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function LunchesList(props) {
  const [lunches, setLunches] = useState([]);
  const { classes } = props;

  useEffect(() => {
    const getLunches = async () => {
      try {
        const response = await axios.get("/api/getLunches");
        setLunches(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLunches();
  }, []);

  const handleLunchPick = (lunch) => {
    props.handleLunchModalOpen(lunch);
  };

  return (
    <section id="zestawy">
      <h3 className="title pt-5 mb-4">Zestawy obiadowe:</h3>
      <Row>
        {lunches.map((lunch) => (
          <React.Fragment key={lunch._id}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  onClick={() => handleLunchPick(lunch)}
                  variant="top"
                  src={lunch.image}
                  alt={lunch.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title className={classes.title}>
                    {lunch.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(lunch.price)}zł
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleLunchPick(lunch)}
                      size="sm"
                      className="ml-1"
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

export default withStyles(styles)(LunchesList);
