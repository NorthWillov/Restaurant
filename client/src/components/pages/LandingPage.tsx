import React, { FC, Suspense, lazy } from "react"
import PizzaModal from "../pizzas/pizza-modal/PizzaModal"
import LunchModal from "../lunches/LunchModal"
import ProductAddModal from "../ProductAddModal"
import LoadingPage from "./LoadingPage"
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
  return (
    <div className={classes.root}>
      <Suspense fallback={<LoadingPage />}>
        <MainNavbar />
        <Promotions />
        <PizzasList />
        <LunchesList />
        <MakaronsList />
        <About />
        <Contact />
      </Suspense>

      <PizzaModal />
      <LunchModal />
      <ProductAddModal />
    </div>
  )
}

export default withStyles(styles)(Landing)
