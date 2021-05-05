import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cartActions";
import { getPizzas, getPizzaIngredients } from "../redux/actions/pizzasActions";
import Routes from "./Routes";
import { ToastProvider } from "../contexts/ToastContext";
import { NewItemProvider } from "../contexts/NewItemContext";
import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import { Container } from "react-bootstrap";
import "../styles/App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
    dispatch(getPizzaIngredients());
    dispatch(getCart());
  }, []);

  return (
    <ToastProvider>
      <NewItemProvider>
        <CurrIngredientsProvider>
          <div className="App" id="home">
            <Container fluid="lg">
              <Routes />
            </Container>
          </div>
        </CurrIngredientsProvider>
      </NewItemProvider>
    </ToastProvider>
  );
}

export default App;
