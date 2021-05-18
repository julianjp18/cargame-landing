import { Skeleton } from "antd";
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeApp from "../components/App";
import Dashboard from "../components/App/Dashboard/Dashboard";
import Landing from "../components/Landing";
import AboutUs from "../components/Landing/AboutUs/AboutUs";
import ContactUs from "../components/Landing/ContactUs/ContactUs";
import PrivacyAds from "../components/Landing/PDF/PrivacyAds";
import PrivacyPolicy from "../components/Landing/PDF/PrivacyPolicy";
import SecureBuys from "../components/Landing/PDF/SecureBuys";
import TCDriver from "../components/Landing/PDF/TCDriver";
import TCUser from "../components/Landing/PDF/TCUser";
import { ROOT_PATH } from './paths';

export const AUTH_ROUTES = [
  { path: "/dashboard", key: "Dashboard - admin", exact: true, component: Dashboard, show: true, landing: false, auth: true },
  { path: "/profile", key: "Perfil", exact: true, component: Dashboard, show: true, landing: false, auth: true },
  { path: "/log-out", key: "Cerrar sesión", exact: true, component: Dashboard, show: true, landing: false, auth: true },
];

const ROUTES = [
  { path: "/", key: "Inicio", exact: true, component: Landing, show: true, landing: true },
  { path: "/download-apps", key: "App", exact: true, component: Landing, show: true, landing: true },
  { path: "/driver-info", key: "Transportadores", exact: true, component: Landing, show: true, landing: true },
  { path: "/us", key: "Nosotros", exact: true, component: AboutUs, show: true, landing: false },
  { path: "/contact-us", key: "Contáctanos", exact: true, component: ContactUs, show: true, landing: false },
  { path: "/sign-up", key: "Transportador", exact: true, component: HomeApp, show: false, landing: false },
  { path: "/log-in", key: "Iniciar sesión", exact: true, component: HomeApp, show: false, landing: false },
  { path: "/cargame-landing", key: "Inicio", exact: true, component: Landing, show: false, landing: false },
  { path: "/terms-and-conditions-user", key: "Términos y condiciones usuario", exact: true, component: TCUser, show: false, landing: false, auth: false },
  { path: "/terms-and-conditions-driver", key: "Términos y condiciones transportador", exact: true, component: TCDriver, show: false, landing: false, auth: false },
  { path: "/privacy", key: "Políticas de privacidad", exact: true, component: PrivacyPolicy, show: false, landing: false, auth: false },
  { path: "/privacy-ads", key: "Aviso de privacidad", exact: true, component: PrivacyAds, show: false, landing: false, auth: false },
  { path: "/secure-buys", key: "Seguridad de compra", exact: true, component: SecureBuys, show: false, landing: false, auth: false },
  ...AUTH_ROUTES,
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
    <Suspense fallback={<Skeleton active />}>
      <Switch>
        {renderRoutes(routes)}
        <Redirect exact from="/login-success" to="/dashboard" />
        <Redirect to={ROOT_PATH} />
      </Switch>
    </Suspense>
  );
}

const renderRoutes = (routes) =>
  routes.map(({ path, component, ...routeParams }) => {
    return (
      <Route
        exact
        key={path}
        path={path}
        component={component}
        {...routeParams}
      />
    );
  });