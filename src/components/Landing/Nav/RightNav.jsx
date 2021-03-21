import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import ROUTES from '../../../routing/routes';
import { landingNavigation } from '../../utils/extras';
import { PRIMARY_COLOR, WHITE_COLOR, PRIMARY_BUTTON_BG_COLOR } from '../../utils/colors';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px;
    
    button {
      border: 0;
    }
    
    &.linkTo {
      margin-top: 5px;

      a {
        color: rgba(0, 0, 0, 0.85);

        &:hover {
          color: ${PRIMARY_BUTTON_BG_COLOR};
        }
      }
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

  const redirectLanding = (path) => {
    const pathCleaned = path.split('/')[1];
    const landing = landingNavigation(pathCleaned);

    if (!landing) {
      history.push({ pathname: path, state: { component: pathCleaned } });
      push(path);
    }
  }

  const singleRoute = (route) => {

    if (localStorage.getItem('user') != null && route.auth) return (
      <li key={route.path} className="menu-item linkTo">
        <Link key={route.path} to={route.path}>{route.key}</Link>
      </li>
    );

    if (route.show && !route.landing && !route.auth) return (
      <li key={route.path} className="menu-item linkTo">
        <Link key={route.path} to={route.path}>{route.key}</Link>
      </li>
    );

    if (route.show && route.landing && !localStorage.getItem('user')) return (
      <li key={route.path} className="menu-item">
        <Button key={route.path} onClick={() => redirectLanding(route.path)}>
          {route.key}
        </Button>
      </li>
    );
  };

  return (
    <Ul open={open}>
      {ROUTES.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes && !localStorage.getItem('user')) {
          return (singleRoute(route));
        }

        if (route.routes && localStorage.getItem('user')) {
          console.log('ENTRÓ AL NAV USER');
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </Ul>
  )
}

export default RightNav;