import React, { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import MainNavbar from "./MainNavbar";
import PizzasList from "./pizzas/PizzasList";
import LunchesList from "./LunchesList";
import MakaronsList from "./MakaronsList";
import PizzaOrderModal from "./pizzas/PizzaOrderModal";
import LunchesOrderModal from "./LunchesOrderModal";
import Promotions from "./Promotions";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../styles/landingStyles";

interface ILandingProps extends WithStylesProps<typeof styles> {}

const Landing: FC<ILandingProps> = ({ classes }) => {
  const isPizzaModalOpen = useAppSelector(
    (state) => state.pizzaModal.isModalOpen
  );
  const isLunchModalOpen = useAppSelector(
    (state) => state.lunchModalSlice.isModalOpen
  );

  return (
    <div className={classes.root}>
      <MainNavbar />
      <Promotions />
      <PizzasList />
      <LunchesList />
      <MakaronsList />

      {isPizzaModalOpen && <PizzaOrderModal />}
      {isLunchModalOpen && <LunchesOrderModal />}
    </div>
  );
};

export default withStyles(styles)(Landing);
