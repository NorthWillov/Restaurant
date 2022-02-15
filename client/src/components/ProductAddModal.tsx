import React from "react"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { closeModal } from "../redux/reducers/cartSlice"
import { Modal, Button, Spinner } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import ArrowIcon from "./icons/ArrowIcon"
import CartIcon from "./icons/CartIcon"
import CartProduct from "./CartProduct"

const ProductAddModal = () => {
  const { isModalOpen, isCartLoading, cart } = useAppSelector(
    (state) => state.cart
  )
  const dispatch = useAppDispatch()

  const history = useHistory()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleButtonClick = () => {
    dispatch(closeModal())
    history.push("/cart")
  }

  return (
    <Modal
      show={isModalOpen}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {isCartLoading ? (
        <Modal.Body>
          <Spinner animation="border" variant="success" />
        </Modal.Body>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Product dodany do koszyka ;)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CartProduct product={cart.products[cart.products.length - 1]} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={handleClose}
              className="mr-3"
            >
              <ArrowIcon />
              Kontynuuj zakupy
            </Button>
            <Button variant="success" onClick={handleButtonClick} type="button">
              Przejdź do koszyka <CartIcon />
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ProductAddModal
