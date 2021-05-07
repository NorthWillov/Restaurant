import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact(props) {
  return (
    <section
      id="contact"
      className="mb-5 mt-5 "
      style={{
        backgroundColor: "#d4d5d9",
        borderRadius: "0.5rem",
        scrollMarginTop: "90px",
      }}
    >
      <Container>
        <h3 className="pt-4 mb-4">Kontakt:</h3>
        <Row>
          <Col lg={4}>
            <h5>Gdańsk, Orunia Górna, ul. Platynowa 2, tel. 512 504 013</h5>
          </Col>
          <Col lg={4}>
            <h5>
              Godziny otwarcia: Poniedziałek-Sobota 10:30 – 21:45. Niedziela
              11:30 – 21:45, tel. 512 504 013
            </h5>
          </Col>
          <Col lg={4}>
            <h5>
              Zamówienia telefoniczne przyjmujemy max. do godziny 21:45. Dowóz
              realizujemy powyżej 20 zł.
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
