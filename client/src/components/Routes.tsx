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
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/admin">
        <AdminPage />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/cart/delivery-info">
        <DeliveryFormPage />
      </Route>
      <Route exact path="/thanks">
        <ThanksPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
