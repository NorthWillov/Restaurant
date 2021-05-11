import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  fetchPizzas,
  fetchPizzaIngredients,
} from "../redux/reducers/pizzasSlice";
import { fetchCart } from "../redux/reducers/cartSlice";
import Routes from "./Routes";
// import { ToastProvider } from "../contexts/ToastContext";
// import { NewItemProvider } from "../contexts/NewItemContext";
// import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import { Container } from "react-bootstrap";
import "../styles/App.css";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
    dispatch(fetchPizzaIngredients());
    dispatch(fetchCart());
  }, []);

  return (
    <div className="App" id="home">
      <Container fluid="lg">
        <Routes />
      </Container>
    </div>
  );
};

export default App;
