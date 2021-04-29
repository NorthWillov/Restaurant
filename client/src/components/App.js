import React from "react";
import Routes from "./Routes";
import { ToastProvider } from "../contexts/ToastContext";
import { NewItemProvider } from "../contexts/NewItemContext";
import { CurrIngredientsProvider } from "../contexts/CurrIngredientsContext";
import { Container } from "react-bootstrap";
import "../styles/App.css";

function App() {
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
