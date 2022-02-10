import React, { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import MainNavbar from "./MainNavbar"
import PizzasList from "./pizzas/PizzasList"
import LunchesList from "./LunchesList"
import MakaronsList from "./MakaronsList"
import About from "./About"
import Contact from "./Contact"
import PizzaModal from "./pizzas/pizza-modal/PizzaModal"
import LunchModal from "./LunchModal"
import ProductAddModal from "./ProductAddModal"
import Promotions from "./Promotions"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../styles/pages/landingPage"

interface ILandingProps extends WithStylesProps<typeof styles> {}

const Landing: FC<ILandingProps> = ({ classes }) => {
  const isPizzaModalOpen = useAppSelector(
    (state) => state.pizzaModal.isModalOpen
  )
  const isLunchModalOpen = useAppSelector(
    (state) => state.lunchModalSlice.isModalOpen
  )
  const isCartModalOpen = useAppSelector((state) => state.cart.isModalOpen)

  return (
    <div className={classes.root}>
      <MainNavbar />
      <Promotions />
      <PizzasList />
      <LunchesList />
      <MakaronsList />
      <About />
      <Contact />

      {isPizzaModalOpen && <PizzaModal />}
      {isLunchModalOpen && <LunchModal />}
      {isCartModalOpen && <ProductAddModal />}
    </div>
  )
}

export default withStyles(styles)(Landing)
