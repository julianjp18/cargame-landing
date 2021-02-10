import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "../components/Auth/LogIn/LogIn";
import SignUp from "../components/Auth/SignUp/SignUp";
import Landing from "../components/Landing";

const ROUTES = [
  { path: "/", key: "Inicio", exact: true, component: Landing, show: true, auth: false, landing: true },
  { path: "/us", key: "Nosotros", exact: true, component: Landing, show: true, auth: false, landing: true },
  { path: "/business-plan", key: "Planes", exact: true, component: Landing, show: true, auth: false, landing: true },
  { path: "/team", key: "Equipo", exact: true, component: Landing, show: true, auth: false, landing: true },
  { path: "/contact-us", key: "Contáctanos", exact: true, component: Landing, show: true, auth: false, landing: true },
  { path: "/log-in", key: "Iniciar sesión", exact: true, component: LogIn, show: true, auth: false, landing: false },
  { path: "/sign-up", key: "Registrarse", exact: true, component: SignUp, show: true, auth: false, landing: false },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
* Use this component for any new section of routes (any config object that has a "routes" property
*/
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>¡UPS! Sitio web no encontrado.</h1>} />
    </Switch>
  );
}
