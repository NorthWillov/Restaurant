import React, { FC } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Landing from "./Landing"
import Cart from "./Cart"
import Admin from "./Admin"
import DeliveryForm from "./DeliveryForm"
import Thanks from "./Thanks"

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/admin" render={() => <Admin />} />
      <Route
        exact
        path="/cart"
        render={(routeProps) => <Cart {...routeProps} />}
      />
      <Route
        exact
        path="/cart/delivery-info"
        render={(routeProps) => <DeliveryForm {...routeProps} />}
      />
      <Route exact path="/thanks" render={() => <Thanks />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
