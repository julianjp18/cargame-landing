import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_TEXT_COLOR } from '../../utils/colors';

const FooterContainer = styled.div`
  height: 20vh;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`;

const PContainer = styled.p`
  color: ${SECOND_TEXT_COLOR};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <PContainer>
          © Copyright <b>Cargame</b> Todos los derechos reservados.
        </PContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;