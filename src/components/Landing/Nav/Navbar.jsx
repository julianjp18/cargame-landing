import React from 'react';
import styled from 'styled-components';
import { WHITE_COLOR } from '../../utils/colors';
import Burger from './Burger';
import icon from '../../assets/images/icono.jpg';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    text-align: initial;
    padding: 5px 0 15px 0;

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
  }
`;

const SpanContent = styled.p`
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 0;
`;

const LogoImage = styled.img`
  width: 5%;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 10%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <LogoImage src={icon} alt="icon" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;