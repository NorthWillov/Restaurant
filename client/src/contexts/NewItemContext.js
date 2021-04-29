import React, { useState, createContext } from "react";

export const NewItemContext = createContext();

export function NewItemProvider(props) {
  const [newItem, setNewItem] = useState();
  return (
    <NewItemContext.Provider value={{ newItem, setNewItem }}>
      {props.children}
    </NewItemContext.Provider>
  );
}
