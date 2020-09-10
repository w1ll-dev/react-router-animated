import React from "react";
import { Redirect, Route } from "react-router-dom";
import './transitions.css'

const verification = true

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      verification ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

export default PrivateRoute;