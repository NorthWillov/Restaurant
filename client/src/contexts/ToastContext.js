import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ToastContext = createContext();

export function ToastProvider(props) {
  const [show, toggleShow] = useToggleState(false);
  return (
    <ToastContext.Provider value={{ show, toggleShow }}>
      {props.children}
    </ToastContext.Provider>
  );
}
