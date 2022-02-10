import React from "react"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { closeModal } from "../redux/reducers/cartSlice"
import { Modal, Button, Spinner } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import ArrowIcon from "./icons/ArrowIcon"
import CartIcon from "./icons/CartIcon"

const ProductAddModal = () => {
  const { isModalOpen, isCartLoading } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const history = useHistory()

  return (
    <Modal
      show={isModalOpen}
      onHide={() => dispatch(closeModal())}
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
          <Modal.Body>
            <h4>Product został poprawnie dodany do koszyka ;)</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(closeModal())}
              className="mr-3"
            >
              <ArrowIcon />
              Kontynuuj zakupy
            </Button>
            <Button
              variant="success"
              onClick={() => {
                dispatch(closeModal())
                history.push("/cart")
              }}
              type="button"
            >
              Przejdź do koszyka <CartIcon />
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ProductAddModal
