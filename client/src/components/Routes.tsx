import React, { FC, Suspense, lazy } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Spinner } from "react-bootstrap"

const LandingPage = lazy(() => import("./pages/LandingPage"))
const CartPage = lazy(() => import("./pages/CartPage"))
const AdminPage = lazy(() => import("./pages/AdminPage"))
const DeliveryFormPage = lazy(() => import("./pages/DeliveryFormPage"))
const ThanksPage = lazy(() => import("./pages/ThanksPage"))

const Routes: FC = () => {
  return (
    <Suspense fallback={<Spinner animation="border" variant="success" />}>
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
    </Suspense>
  )
}

export default Routes
