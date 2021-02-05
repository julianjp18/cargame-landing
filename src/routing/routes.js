import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";

const ROUTES = [
  { path: "/", key: "Inicio", exact: true, component: App, show: true, auth: false },
  { path: "/soat", key: "Nosotros", exact: true, component: App, show: true, auth: false },
  { path: "/profile", key: "Planes", exact: true, component: App, show: true, auth: false },
  { path: "/secure-car", key: "Equipo", exact: true, component: App, show: true, auth: false },
  { path: "/contact-us", key: "Contáctanos", exact: true, component: App, show: true, auth: false },
  { path: "/log-in", key: "Iniciar sesión", exact: true, component: App, show: true, auth: false },
  { path: "/sign-up", key: "Registrarse", exact: true, component: App, show: true, auth: false },
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
