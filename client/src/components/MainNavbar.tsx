import React, { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  Toast,
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import withStyles from "react-jss";
import styles from "../styles/mainNavbarStyles";

interface MainNavbarProps {
  classes: { [key: string]: string };
}

const MainNavbar: FC<MainNavbarProps> = ({ classes }) => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <Navbar
      className={classes.navbar}
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
    >
      <Container style={{ position: "relative" }} fluid="lg">
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "absolute",
            right: "31px",
            top: "90px",
          }}
        >
          {/* <Toast show={show} onClose={toggleShow} delay={3000} autohide>
            <Toast.Header>
              <span style={{ color: "black", fontSize: "15px" }}>
                {cart.length !== 0 &&
                  `+1 ${cart[cart.length - 1].name} ${formatter.format(
                    cart[cart.length - 1].price
                  )}zł`}
              </span>
            </Toast.Header>
          </Toast> */}
        </div>

        <Navbar.Brand href="#home">
          <img className={classes.logo} srcSet={logo} alt="riccardo-logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="mr-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#pizzas">Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#zestawy">
                Zestawy obiadowe
              </NavDropdown.Item>
              <NavDropdown.Item href="#makarony">Makarony</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#salatki">Sałatki</NavDropdown.Item>
              <NavDropdown.Item href="#nalesnikisweet">
                Naleśniki na słodko
              </NavDropdown.Item>
              <NavDropdown.Item href="#nalesnikisalt">
                Naleśniki na słono
              </NavDropdown.Item>
              <NavDropdown.Item href="#startery">Startery</NavDropdown.Item>
              <NavDropdown.Item href="#sosy">Sosy</NavDropdown.Item>
              <NavDropdown.Item href="#napoje">Napoje</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">O nas</Nav.Link>
            <Nav.Link href="#promocje">Promocje</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/cart">
              <Button
                className={`mr-3 ml-2 ${classes.cart}`}
                style={{ maxWidth: "120px" }}
                variant="dark"
              >
                Koszyk
                {cart.products.length !== 0 &&
                  ` | ${cart.products
                    .map((product) => product.quantity)
                    .reduce((a, b) => a + b, 0)}`}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withStyles(styles)(MainNavbar);
