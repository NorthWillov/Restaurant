import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/pizzaOrderModalSizeAndDoughStyles";
import { changePizzaSize } from "../redux/actions";

function PizzaOrderModalSizeAndDough(props) {
  const { dough, newItem, handleDoughChange, classes } = props;

  const currPizzaSize = useSelector((state) => state.pizzas.currPizzaSize);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <h6>Rozmiar:</h6>
      <div
        className={classes.group}
        onChange={(e) => dispatch(changePizzaSize(e.target.value))}
      >
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb1"
          checked={currPizzaSize === "20cm"}
          value="20cm"
          disabled={newItem.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb1">
          20cm
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb2"
          value="28cm"
          checked={
            currPizzaSize === "28cm" || newItem.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb2">
          28cm
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-size"
          id="rb3"
          value="50cm"
          checked={currPizzaSize === "50cm"}
          disabled={dough === "grube" || newItem.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb3">
          50cm
        </label>
      </div>
      <h6>Ciasto:</h6>
      <div className={classes.group} onChange={handleDoughChange}>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb4"
          value="cieńkie"
          checked={dough === "cieńkie"}
          disabled={newItem.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb4">
          cieńkie
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb5"
          value="średnie"
          checked={dough === "średnie" || newItem.name === "Calzone (Pierog)"}
          readOnly
        />
        <label className={classes.label} htmlFor="rb5">
          średnie
        </label>
        <input
          className={classes.input}
          type="radio"
          name="rb-dough"
          id="rb6"
          value="grube"
          checked={dough === "grube"}
          disabled={
            currPizzaSize === "50cm" || newItem.name === "Calzone (Pierog)"
          }
          readOnly
        />
        <label className={classes.label} htmlFor="rb6">
          grube
        </label>
      </div>
    </div>
  );
}

export default withStyles(styles)(PizzaOrderModalSizeAndDough);
