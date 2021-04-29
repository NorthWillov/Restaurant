import React, { useContext, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatter";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContext } from "../contexts/ToastContext";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesOrderModalStyles";

function LunchesOrderModal(props) {
  const [lunchAddition, setLunchAddition] = useState({});

  const { toggleShow } = useContext(ToastContext);

  const { classes, lunch, onHide } = props;

  const handleInputClick = (e) => {
    setLunchAddition({ ...lunchAddition, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    onHide();
    const newProduct = {
      product: {
        productId: lunch._id,
        name: lunch.name,
        quantity: 1,
        productType: lunch.type,
        price: lunch.price,
        image: lunch.image,
        first:
          lunchAddition.first || lunch.first
            ? lunchAddition.first || lunch.first
            : "",
        second:
          lunchAddition.second || lunch.second
            ? lunchAddition.second || lunch.second
            : "",
        meat:
          lunchAddition.meat || lunch.meat
            ? lunchAddition.meat || lunch.meat
            : "",
      },
    };
    try {
      const res = await axios.post("/api/addProduct", newProduct);
    } catch (err) {
      console.log(err);
    }
    toggleShow();
    setLunchAddition({});
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Body>
        <Row>
          <Col lg={7} style={{ display: "flex" }}>
            <img
              className={classes.modalLunchImage}
              src={lunch.image}
              alt="obiad"
            />
          </Col>
          <Col
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Form>
              <h4>{lunch.name}</h4>

              {lunch.name === "Szwajcar (pierś lub schab z serem)" && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>rodzaj mięsa:</Form.Label>
                  <Form.Control
                    name="meat"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="schab">schab</option>
                    <option value="piers">pierś</option>
                  </Form.Control>
                </Form.Group>
              )}

              {lunch.name !== "Placek po węgiersku 🌶" && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>dodatek do dania:</Form.Label>
                  <Form.Control
                    name="first"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="ziemniaki opiekane">
                      ziemniaki opiekane
                    </option>
                    <option value="ziemniaki">ziemniaki</option>
                    <option value="kasza">kasza</option>
                    <option value="ryż">ryż</option>
                    <option value="frytki">frytki</option>
                  </Form.Control>
                </Form.Group>
              )}

              {lunch.name !== "Warzywa zasmażane z kurczakiem" && (
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>dodatek warzywny:</Form.Label>
                  <Form.Control
                    name="second"
                    as="select"
                    onChange={handleInputClick}
                  >
                    <option value="duszona kapusta">duszona kapusta</option>
                    <option value="marchewka na ciepło">
                      marchewka na ciepło
                    </option>
                    <option value="buraczki na ciepło">
                      buraczki na ciepło
                    </option>
                    <option value="zestaw surówek">zestaw surówek</option>
                  </Form.Control>
                </Form.Group>
              )}
            </Form>
            <div className={classes.checkout}>
              <Button variant="outline-secondary" onClick={onHide}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-left-short"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                Wroć
              </Button>
              <span className={classes.modalPrice}>
                {formatter.format(lunch.price)}zł
              </span>
              <Button onClick={handleSubmit} variant="success" type="button">
                Dodaj{" "}
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className={`bi bi-cart2 ${classes.icon}`}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default withStyles(styles)(LunchesOrderModal);
