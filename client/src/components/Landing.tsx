import React, { FC } from "react";
import MainNavbar from "./MainNavbar";
import PizzasList from "./pizzas/PizzasList";
// import LunchesList from "./LunchesList";
import PizzaOrderModal from "./pizzas/PizzaOrderModal";
// import LunchesOrderModal from "./LunchesOrderModal";
import Promotions from "./Promotions";
import withStyles, { WithStylesProps } from "react-jss";
import styles from "../styles/landingStyles";

interface ILandingProps extends WithStylesProps<typeof styles> {}

const Landing: FC<ILandingProps> = ({ classes }) => {
  // const [lunchModalShow, setLunchModalShow] = useState(false);

  // const handleLunchModalOpen = (item) => {
  //   show && toggleShow();
  //   setNewItem(item);
  //   setLunchModalShow(true);
  // };

  return (
    <div className={classes.root}>
      <MainNavbar />

      <Promotions />

      <PizzasList />

      {/* <LunchesList handleLunchModalOpen={handleLunchModalOpen} /> */}

      <PizzaOrderModal />

      {/* {newItem && (
        <>
          <LunchesOrderModal
            lunch={newItem}
            show={lunchModalShow}
            onHide={() => setLunchModalShow(false)}
          />
        </>
      )} */}
    </div>
  );
};

export default withStyles(styles)(Landing);
