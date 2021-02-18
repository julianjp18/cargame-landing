import React from 'react';
import styled from 'styled-components';
import ROUTES from '../../../routing/routes';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { landingNavigation } from '../../utils/extras';
import { PRIMARY_COLOR, WHITE_COLOR, PRIMARY_BUTTON_BG_COLOR } from '../../utils/colors';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px;
    
    button {
      border: 0;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: ${PRIMARY_COLOR};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 100;

    li {

      .ant-btn {
        color: ${WHITE_COLOR};
        background: transparent;
        border: 0;

        &:hover {
          color: ${PRIMARY_BUTTON_BG_COLOR};
        }
      }
    }
  }
`;

const RightNav = ({ open }) => {
  const history = useHistory();
  return (
    <Ul open={open}>
      {displayRouteMenu(ROUTES, history)}
    </Ul>
  )
}

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
const displayRouteMenu = (routes, history) => {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  const singleRoute = (route, history) => {

    if (route.landing) return (
      <li key={route.path} className="menu-item">
        <Button onClick={() => landingNavigation(route.path.split('/')[1])}>
          {route.key}
        </Button>
      </li>
    );

    return route.show && !route.auth && (
      <li key={route.path} className="menu-item">
        <Button type="button">
          <Link to={route.path}>{route.key}</Link>
        </Button>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (routes.map(route => {
    // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
    if (route.routes) {
      return (singleRoute(route, history));
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