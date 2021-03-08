import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import Burger from './Burger';
import icon from '../../assets/images/icono.jpg';
import iconDriver from '../../assets/images/icono-transportador.png';

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
  width: 37px;
  max-width: 100%;
  float: left;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>
          <LogoImage src={icon} alt="icon" />
          <SpanContent>CÁRGAME</SpanContent>
          <LogoImage src={iconDriver} alt="icon" />
        </h1>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;