import React from 'react';
import styled from 'styled-components';
import TCUserPDF from '../../assets/PDF/T&C_user.pdf';
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

const TCUser = () => {

  return (
    <PDFContainer>
      <Title>Términos y condiciones usuario</Title>
      <AllPages pdf={TCUserPDF} />
      <ExternalText>
        Si no puedes visualizar el documento, <ExternalLink href="https://cargame.com.co/T&C_user.pdf" target="_blank">haz clic acá</ExternalLink>
      </ExternalText>
    </PDFContainer>
  );
};

export default TCUser;
