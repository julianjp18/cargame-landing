import React from 'react';
import styled from 'styled-components';
import ROUTES from '../../../routing/routes';
import { useHistory } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {displayRouteMenu(ROUTES)}
      <li>Inicio</li>
      <li>Acerca de</li>
      <li>Planes</li>
      <li>Equipo</li>
      <li>Contáctanos</li>
      <li>Registrarse</li>
      <li>Iniciar sesión</li>
    </Ul>
  )
}

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
const displayRouteMenu = (routes) => {
  const history = useHistory();

  /**
   * Render a single route as a list item link to the config's pathname
   */
  const singleRoute = (route) => {

    const redirect = (path) => {
      history.push(path);
    };

    return route.show && !route.auth && (
      <li key={route.path} className="menu-item">
        <Button onClick={redirect(route.path)}>{route.key}</Button>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (routes.map(route => {
    // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
    if (route.routes) {
      return (singleRoute(route));
    }

    // no nested routes, so just render a single route
    return singleRoute(route);
  })
  );
};

const displayAuthRouteMenu = (routes) => {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  const singleRoute = (route) => {
    return route.auth && (
      <li key={route.path} className="menu-item">
        <Link to={route.path} className="menu-link">{route.key}</Link>
      </li>
    );
  }

  const dropDownRoute = (route) => {
    return (
      <li key={route.path} className="menu-item">
        <Link to={route.path} className="menu-link">{route.key}</Link>
      </li>
    )
  };

  // loop through the array of routes and generate an unordered list
  return (routes.map(route => {
    // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
    if (route.routes) {
      return (dropDownRoute(route));
    }

    // no nested routes, so just render a single route
    return singleRoute(route);
  })
  );
};

export default RightNav;