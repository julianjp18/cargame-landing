import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import Burger from './Burger';
import icon from '../../assets/images/new-version/cargame_Horizontal.png';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    text-align: initial;
    padding: 3px 0 15px 0;

    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    background-color: ${WHITE_COLOR};
    z-index: 99;
    top: 0;
  }
`;

const SpanContent = styled.p`
  padding-top: 6px;
  font-weight: bold;
  margin-bottom: 0;
  color: ${PRIMARY_COLOR};
  float: left;
  margin-right: 5px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  float: left;
  margin-right: 5px;
`;

const Navbar = ({ isAuth, role, routes }) => {
  return (
    <Nav>
      <div className="logo">
        <h1>
          <LogoImage src={icon} alt="icon" />
        </h1>
      </div>
      <Burger isAuth={isAuth} role={role} routes={routes} />
    </Nav>
  )
}

export default Navbar;