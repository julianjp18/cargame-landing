import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeApp from "../components/App";
import Dashboard from "../components/App/Dashboard/Dashboard";
import Landing from "../components/Landing";

const ROUTES = [
  { path: "/", key: "Inicio", exact: true, component: Landing, show: true, landing: true },
  { path: "/cargame-landing", key: "Inicio", exact: true, component: Landing, show: false, landing: false },
  { path: "/us", key: "Nosotros", exact: true, component: Landing, show: true, landing: true },
  { path: "/business-plan", key: "Planes", exact: true, component: Landing, show: true, landing: true },
  { path: "/team", key: "Equipo", exact: true, component: Landing, show: true, landing: true },
  { path: "/contact-us", key: "Contáctanos", exact: true, component: Landing, show: true, landing: true },
  { path: "/sign-up", key: "Registrarse", exact: true, component: HomeApp, show: true, landing: false },
  { path: "/log-in", key: "Iniciar sesión", exact: true, component: HomeApp, show: true, landing: false },
  { path: "/dashboard", key: "Dashboard - admin", exact: true, component: Dashboard, show: false, landing: false, auth: true },
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
