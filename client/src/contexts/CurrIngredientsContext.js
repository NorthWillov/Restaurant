import React, { useState, createContext } from "react";

export const CurrIngredientsContext = createContext();

export function CurrIngredientsProvider(props) {
  const [currIngredients, setCurrIngredients] = useState();
  return (
    <CurrIngredientsContext.Provider
      value={{ currIngredients, setCurrIngredients }}
    >
      {props.children}
    </CurrIngredientsContext.Provider>
  );
}
