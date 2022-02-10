import React, { FC, useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import {
  handleOptionsChange,
  handleOptionsSubmit,
} from "../redux/reducers/contactInfoSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { RouteComponentProps } from "react-router"
import ArrowIcon from "./icons/ArrowIcon"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/deliveryForm"

export interface ContactInfoProps
  extends RouteComponentProps,
    WithStylesProps<typeof styles> {}

const ContactInfo: FC<ContactInfoProps> = ({ history, classes }) => {
  const [validated, setValidated] = useState(false)

  const dispatch = useAppDispatch()
  const contactInfo = useAppSelector((state) => state.contactInfo)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleOptionsChange(e.target.name, e.target.value))
  }

  const handleSubmit = () => {
    setValidated(true)

    // Validate Inputs
    for (const key in contactInfo) {
      if (key === "floor" || key === "note") {
        continue
      }

      if (!contactInfo[key]) {
        return
      }
    }

    dispatch(handleOptionsSubmit(contactInfo))
    history.push("/thanks")
  }

  return (
    <Form
      validated={validated}
      className={classes.root}
    >
      <h1>Sposób dostawy</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridSelectShip">
          <Form.Control
            onChange={handleChange}
            name="deliveryoption"
            as="select"
            defaultValue="Dowóz"
          >
            <option>Dowóz</option>
            <option>Odbiór osobisty</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTimeShip">
          <Form.Control
            onChange={handleChange}
            name="time"
            as="select"
            defaultValue="Jak najszybciej"
          >
            <option>Jak najszybciej</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridPhoneNumber">
        <Form.Control
          required
          name="phonenumber"
          type="tel"
          placeholder="Numer telefonu"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridEmail">
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </Form.Group>
      <h1>Adres dostawy</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Control
            required
            name="street"
            type="text"
            placeholder="Ulica"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddressNumber">
          <Form.Control
            required
            name="streetnumber"
            type="number"
            placeholder="Numer ulicy"
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control
            required
            type="text"
            name="town"
            placeholder="Miasto"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFlat">
          <Form.Control
            required
            type="text"
            name="flat"
            placeholder="Lokal"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFloor">
          <Form.Control
            type="number"
            name="floor"
            placeholder="Piętro (opcjonalne)"
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridNotes">
        <Form.Control
          name="note"
          type="text"
          placeholder="Dodaj notatkę (opcjonalne)"
          onChange={handleChange}
        />
      </Form.Group>

      <h1>Płatność</h1>
      <Form.Group controlId="formGridPayment">
        <Form.Label>Wybierz formę płatności: </Form.Label>
        <Form.Control
          name="payment"
          as="select"
          defaultValue="Gotówka"
          required
          onChange={handleChange}
        >
          <option>Gotówka</option>
          <option>Karta (przy odbiorze)</option>
          <option>PayU</option>
        </Form.Control>
      </Form.Group>
      <Button
        variant="outline-secondary"
        onClick={() => history.goBack()}
        className="mr-3"
      >
        <ArrowIcon />
        Wroć
      </Button>
      <Button onClick={handleSubmit}>Zamawiam</Button>
    </Form>
  )
}

export default withStyles(styles)(ContactInfo)
