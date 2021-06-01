import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { closeModal } from "../redux/reducers/cartSlice";
import { Modal, Button } from "react-bootstrap";

const ProductAddModal = () => {
  const isModalOpen = useAppSelector((state) => state.cart.isModalOpen);
  const dispatch = useAppDispatch();

  return (
    <Modal
      show={isModalOpen}
      onHide={() => dispatch(closeModal())}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductAddModal;
