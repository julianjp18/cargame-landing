import React from 'react';
import styled from 'styled-components';
import PrivacyPolicyPDF from '../../assets/PDF/Politica_de_Privacidad.pdf';
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

const PrivacyPolicy = () => {

  return (
    <PDFContainer>
      <Title>Política de privacidad</Title>
      <AllPages pdf={PrivacyPolicyPDF} />
      <ExternalText>
        Si no puedes visualizar el documento, <ExternalLink href="https://cargame.com.co/Política_de_Privacidad.pdf" target="_blank">haz clic acá</ExternalLink>
      </ExternalText>
    </PDFContainer>
  );
};

export default PrivacyPolicy;
