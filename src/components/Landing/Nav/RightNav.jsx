import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { push } from 'connected-react-router';
import { landingNavigation } from '../../utils/extras';
import { PRIMARY_COLOR, WHITE_COLOR, PRIMARY_BUTTON_BG_COLOR, BLACK_COLOR } from '../../utils/colors';
import { Link } from 'react-router-dom';
import WhatsAppImage from '../../assets/images/new-version/whatsapp-icon.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Quicksand';

  li {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    padding: 10px;
    
    button {
      margin-top: 5px;
      font-family: 'Quicksand';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.03em;
      border: 0;
      box-shadow: 0 2px 0 rgb(0 0 0 / 0%);
    }
    
    &.linkTo {
      padding: 10px 20px;
      margin-top: 13px;

      a {
        font-family: Quicksand;
        color: rgba(0, 0, 0, 0.85);

        &:hover {
          color: ${PRIMARY_BUTTON_BG_COLOR};
        }

        @media (max-width: 768px) {
          color: #ffffff;
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
    height: 60vh;
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

const WhatsAppContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const WhatsAppImageContent = styled.img`
  border-radius: 50%;
  box-shadow: 2px 2px 9px 5px ${BLACK_COLOR};
  cursor: pointer;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RightNav = ({ open, routes }) => {
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

  
  const redirect = () => {
    window.location.href= 'https://wa.link/wus2o4';
  }

  return (
    <Ul open={open}>
      {routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes && !localStorage.getItem('user')) {
          return (singleRoute(route));
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
      <WhatsAppContainer>
        <WhatsAppImageContent alt="whatsapp image" onClick={redirect} src={WhatsAppImage} />
      </WhatsAppContainer>
    </Ul>
  )
}

export default RightNav;