import React from "react"
import { formatter } from "../../utils/formatter"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { CartProduct, addProductToCart } from "../../redux/reducers/cartSlice"
import {
  hideLunchModal,
  changeLunchAddition,
} from "../../redux/reducers/lunchModalSlice"
import { Modal, Row, Col, Button, Form } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/modals/lunchModal"
import CartIcon from ".././icons/CartIcon"
import ArrowIcon from ".././icons/ArrowIcon"

interface LunchesOrderModalProps extends WithStylesProps<typeof styles> {}

const LunchesOrderModal: React.FC<LunchesOrderModalProps> = ({ classes }) => {
  const { lunchAddition, lunchInModal, isModalOpen } = useAppSelector(
    (state) => state.lunchModalSlice
  )

  const dispatch = useAppDispatch()

  const handleInputClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLunchAddition(e.target.name, e.target.value))
  }

  const handleModalClose = () => {
    dispatch(hideLunchModal())
  }

  const handleSubmit = async () => {
    const product: CartProduct = {
      name: lunchInModal.name,
      image: lunchInModal.image,
      productType: lunchInModal.type,
      quantity: 1,
      price: lunchInModal.price,
      ...lunchAddition,
    }
    dispatch(addProductToCart(product))
    dispatch(hideLunchModal())
  }

  return (
    <Modal
      show={isModalOpen}
      onHide={handleModalClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Body>
        <Row>
          <Col lg={7}>
            <img
              className={classes.modalLunchImage}
              src={lunchInModal.image}
              alt="obiad"
            />
          </Col>
          <Col lg={5}>
            <div className={classes.form}>
              <Form>
                <h4>{lunchInModal.name}</h4>

                {lunchInModal.name === "Szwajcar (pierś lub schab z serem)" && (
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

                {lunchInModal.name !== "Placek po węgiersku 🌶" && (
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

                {lunchInModal.name !== "Warzywa zasmażane z kurczakiem" && (
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
                <Button onClick={handleModalClose} variant="outline-secondary">
                  <ArrowIcon />
                  Wroć
                </Button>
                <span className={classes.modalPrice}>
                  {formatter.format(lunchInModal.price)}zł
                </span>
                <Button onClick={handleSubmit} variant="success" type="button">
                  Dodaj <CartIcon styles={classes.icon} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default withStyles(styles)(LunchesOrderModal)
