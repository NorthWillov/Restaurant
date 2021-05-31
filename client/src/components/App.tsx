import React, { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { fetchPromos } from "../redux/reducers/promoSlice";
import {
  fetchPizzas,
  fetchPizzaIngredients,
} from "../redux/reducers/pizzasSlice";
import { fetchLunches } from "../redux/reducers/lunchSlice";
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
    dispatch(fetchPromos());
    dispatch(fetchPizzas());
    dispatch(fetchLunches());
    dispatch(fetchPizzaIngredients());
    dispatch(fetchCart());
  }, []);

  return (
    <div className="App" id="home">
      <Container fluid="lg">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
