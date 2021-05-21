import React from 'react';
import styled from 'styled-components';
import TCDriverPDF from '../../assets/PDF/T&C_driver.pdf';
import AllPages from './AllPages';

const PDFContainer = styled.div`
  min-height: 94vh;
  padding-top: 10px;
`;

const Title = styled.p`
  font-family: 'Quicksand';
  font-size: 30px;
  font-weight: bold;
`;

const ExternalText = styled.p`

`;

const ExternalLink = styled.a`

`;

const TCDriver = () => {

  return (
    <PDFContainer>
      <Title>Términos y condiciones transportador</Title>
      <AllPages pdf={TCDriverPDF} />
      <ExternalText>
        Si no puedes visualizar el documento, <ExternalLink href="https://cargame.com.co/T&C_driver.pdf" target="_blank">haz clic acá</ExternalLink>
      </ExternalText>
    </PDFContainer>
  );
};

export default TCDriver;