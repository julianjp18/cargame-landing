import React from 'react';

import styled from 'styled-components';

import Burger from './Burger';
import icon from '../../assets/images/new-version/cargame_Horizontal.png';
import { Link } from 'react-router-dom';
import { WHITE_COLOR } from '../../utils/colors';

const Nav = styled.nav`
  position: fixed;
  background-color: #fff;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  font-family: Quicksand;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  width: 100%;
  z-index: 10;
  
  .logo {
    text-align: initial;
    padding: 3px 0 15px 0;

    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    background-color: ${WHITE_COLOR};
    z-index: 99;
    top: 0;
  }
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
        <Link key="home" to="/">
          <LogoImage src={icon} alt="icon" />
        </Link>
        </h1>
      </div>
      <Burger isAuth={isAuth} role={role} routes={routes} />
    </Nav>
  )
}

export default Navbar;