import React, { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/mainNavbar"

interface MainNavbarProps extends WithStylesProps<typeof styles> {}

const MainNavbar: FC<MainNavbarProps> = ({ classes }) => {
  const cart = useAppSelector((state) => state.cart.cart)

  return (
    <Navbar
      className={classes.navbar}
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
    >
      <Container fluid="lg">
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
            </NavDropdown>
            <Nav.Link href="#about">O nas</Nav.Link>
            <Nav.Link href="#promocje">Promocje</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/cart">
              <Button className={`mr-3 ml-2 ${classes.cart}`} variant="success">
                Koszyk
                {cart.products.length !== 0 &&
                  ` | ${cart.products.reduce(
                    (acc, el) => acc + el.quantity,
                    0
                  )}`}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default withStyles(styles)(MainNavbar)
