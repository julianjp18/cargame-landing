import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_TEXT_COLOR } from '../../utils/colors';
import SubMenu from './SubMenu/SubMenu';

const FooterContainer = styled.div`
  min-height: 40vh;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: ${PRIMARY_COLOR};
`;

const PContent = styled.p`
color: ${SECOND_TEXT_COLOR};
`;

const PContainer = styled.div`
  margin-top: 10px;
  color: ${SECOND_TEXT_COLOR};
  background-color: ${PRIMARY_COLOR};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SubMenu />
      <PContainer>
        <PContent>
          © Copyright <b>Cargame</b> Todos los derechos reservados.
        </PContent>
      </PContainer>
    </FooterContainer>
  );
};

export default Footer;