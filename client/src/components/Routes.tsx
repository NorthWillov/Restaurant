import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Cart from "./Cart";
import Admin from "./Admin";
import ContactInfo from "./ContactInfo";

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
        path="/cart/contactinfo"
        render={(routeProps) => <ContactInfo {...routeProps} />}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
