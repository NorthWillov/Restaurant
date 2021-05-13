import React, { FC } from "react";
import { Form, Col, Button } from "react-bootstrap";

const ContactInfo: FC = () => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMITTED!!!");
  };

  return (
    <Form
      style={{ maxWidth: "650px", margin: "50px auto" }}
      onSubmit={handleSubmit}
    >
      <h1>Sposób dostawy</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridSelectShip">
          <Form.Control name="deliveryoption" as="select" defaultValue="Dowóz">
            <option>Dowóz</option>
            <option>Odbiór osobisty</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTimeShip">
          <Form.Control name="time" as="select" defaultValue="Jak najszybciej">
            <option>Jak najszybciej</option>
            <option>20:00</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <h1>Kontakt</h1>
      <Form.Group controlId="formGridName">
        <Form.Control
          required
          name="nameandsurname"
          type="name"
          placeholder="Imię i nazwisko"
        />
      </Form.Group>

      <Form.Group controlId="formGridPhoneNumber">
        <Form.Control
          required
          name="phonenumber"
          type="tel"
          placeholder="Numer telefonu"
        />
      </Form.Group>

      <Form.Group controlId="formGridEmail">
        <Form.Control required name="email" type="email" placeholder="Email" />
      </Form.Group>
      <h1>Adres dostawy</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Control
            required
            name="street"
            type="text"
            placeholder="Ulica"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddressNumber">
          <Form.Control
            required
            name="streetnumber"
            type="number"
            placeholder="Numer ulicy"
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control required type="text" name="town" placeholder="Miasto" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFlat">
          <Form.Control
            required
            type="number"
            name="flat"
            placeholder="Lokal"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFloor">
          <Form.Control
            type="number"
            name="floor"
            placeholder="Piętro (opcjonalne)"
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridNotes">
        <Form.Control
          name="note"
          type="text"
          placeholder="Dodaj notatkę (opcjonalne)"
        />
      </Form.Group>

      <h1>Płatność</h1>
      <Form.Group controlId="formGridPayment">
        <Form.Control
          name="payment"
          required
          as="select"
          defaultValue="Wybierz formę płatnośni"
        >
          <option>Wybierz formę płatności</option>
          <option>Karta (przy odbiorze)</option>
          <option>Gotówka</option>
          <option>PayU</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit">Zamawiam</Button>
    </Form>
  );
};

export default ContactInfo;
