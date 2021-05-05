import React, { useContext, useState } from "react";
import MainNavbar from "./MainNavbar";
import PizzasList from "./PizzasList";
import LunchesList from "./LunchesList";
import PizzaOrderModal from "./PizzaOrderModal";
import LunchesOrderModal from "./LunchesOrderModal";
import Promotions from "./Promotions";
import { NewItemContext } from "../contexts/NewItemContext";
import { ToastContext } from "../contexts/ToastContext";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/landingStyles";

function Landing(props) {
  const [lunchModalShow, setLunchModalShow] = useState(false);

  const { classes } = props;

  const { newItem, setNewItem } = useContext(NewItemContext);
  const { show, toggleShow } = useContext(ToastContext);

  const handleLunchModalOpen = (item) => {
    show && toggleShow();
    setNewItem(item);
    setLunchModalShow(true);
  };

  return (
    <div className={classes.root}>
      <MainNavbar />

      <Promotions />

      <PizzasList />

      <LunchesList handleLunchModalOpen={handleLunchModalOpen} />

      <PizzaOrderModal />

      {newItem && (
        <>
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
