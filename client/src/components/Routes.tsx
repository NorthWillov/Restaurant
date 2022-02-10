import React, { FC } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import CartPage from "./pages/CartPage"
import AdminPage from "./pages/AdminPage"
import DeliveryFormPage from "./pages/DeliveryFormPage"
import ThanksPage from "./pages/ThanksPage"

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <LandingPage />} />
      <Route exact path="/admin" render={() => <AdminPage />} />
      <Route
        exact
        path="/cart"
        render={(routeProps) => <CartPage {...routeProps} />}
      />
      <Route
        exact
        path="/cart/delivery-info"
        render={(routeProps) => <DeliveryFormPage {...routeProps} />}
      />
      <Route exact path="/thanks" render={() => <ThanksPage />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
