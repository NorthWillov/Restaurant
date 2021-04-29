import React, { useContext, useState } from "react";
import MainNavbar from "./MainNavbar";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import PizzaOrderModal from "./PizzaOrderModal";
import LunchesOrderModal from "./LunchesOrderModal";
import Promotions from "./Promotions";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";
import { NewItemContext } from "../contexts/NewItemContext";
import { ToastContext } from "../contexts/ToastContext";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/landingStyles";

function Landing(props) {
  const [lunchModalShow, setLunchModalShow] = useState(false);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);

  const { classes } = props;

  const { newItem, setNewItem } = useContext(NewItemContext);
  const { setCurrIngredients } = useContext(CurrIngredientsContext);
  const { show, toggleShow } = useContext(ToastContext);

  const handlePizzaClick = (item) => {
    show && toggleShow();
    setCurrIngredients(item.ingredients);
    setNewItem(item);
    setPizzaModalShow(true);
  };

  const handleLunchModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setLunchModalShow(true);
  };

  return (
    <div className={classes.root}>
      <MainNavbar />

      <Promotions />

      <PizzasList handlePizzaClick={handlePizzaClick} />

      <LunchesList handleLunchModalOpen={handleLunchModalOpen} />

      {newItem && (
        <>
          <PizzaOrderModal
            show={pizzaModalShow}
            onHide={() => setPizzaModalShow(false)}
          />
          <LunchesOrderModal
            lunch={newItem}
            show={lunchModalShow}
            onHide={() => setLunchModalShow(false)}
          />
        </>
      )}
    </div>
  );
}

export default withStyles(styles)(Landing);
