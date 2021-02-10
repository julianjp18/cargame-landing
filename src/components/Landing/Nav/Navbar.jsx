import React from 'react';
import styled from 'styled-components';
import { WHITE_COLOR } from '../../utils/colors';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
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

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        CARGAME
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;