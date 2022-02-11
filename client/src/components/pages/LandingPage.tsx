import React, { FC, Suspense, lazy } from "react"
import { useAppSelector } from "../../redux/hooks"
import PizzaModal from "../pizzas/pizza-modal/PizzaModal"
import LunchModal from "../lunches/LunchModal"
import ProductAddModal from "../ProductAddModal"
import { Spinner } from "react-bootstrap"
import withStyles, { WithStylesProps } from "react-jss"
import styles from "../../styles/pages/landingPage"

const MainNavbar = lazy(() => import("../MainNavbar"))
const Promotions = lazy(() => import("../Promotions"))
const PizzasList = lazy(() => import("../pizzas/PizzasList"))
const LunchesList = lazy(() => import("../lunches/LunchesList"))
const MakaronsList = lazy(() => import("../makarons/MakaronsList"))
const About = lazy(() => import("../About"))
const Contact = lazy(() => import("../Contact"))

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
      <Suspense fallback={<Spinner animation="border" variant="success" />}>
        <MainNavbar />
        <Promotions />
        <PizzasList />
        <LunchesList />
        <MakaronsList />
        <About />
        <Contact />
      </Suspense>

      {isPizzaModalOpen && <PizzaModal />}
      {isLunchModalOpen && <LunchModal />}
      {isCartModalOpen && <ProductAddModal />}
    </div>
  )
}

export default withStyles(styles)(Landing)
