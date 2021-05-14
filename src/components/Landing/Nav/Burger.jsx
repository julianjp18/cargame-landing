import { push } from 'connected-react-router';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ORANGE_COLOR, PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from '../../utils/colors';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 101;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 10px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const RightNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonsContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const FirstButtonContainer = styled.div`
  height: 34px;  
  display: inline-block;
  padding: 4px 28px 10px 28px;
  margin: 14px 0 0 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${ORANGE_COLOR};
  border: 1px solid ${ORANGE_COLOR};
  border-radius: 50px;
  transition: 0.5s;
  cursor: pointer;
  background-color: ${WHITE_COLOR};

  &:hover {
    background-color: ${WHITE_COLOR};
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const SecondButtonContainer = styled.div`
  height: 34px;  
  display: inline-block;
  padding: 4px 28px 10px 28px;
  margin: 14px 10px 0 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${WHITE_COLOR};
  border: 1px solid ${WHITE_COLOR};
  border-radius: 50px;
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(55.05deg, ${WHITE_COLOR} 0%, ${WHITE_COLOR} 100%);
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const redirectLanding = (path) => {
    const newPath = `/${path}`;
    history.push({ pathname: newPath, state: { component: newPath } });
    push(newPath);
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavContainer>
        <RightNav open={open} />
        <ButtonsContainer>
          <SecondButtonContainer>Descarga la App</SecondButtonContainer>
          <FirstButtonContainer onClick={() => redirectLanding('sign-up')}>
            <i class="fas fa-play"></i> ¿Deseas ser Transportador?
          </FirstButtonContainer>
        </ButtonsContainer>
      </RightNavContainer>
    </>
  )
}
export default Burger;