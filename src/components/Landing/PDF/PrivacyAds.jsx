import React from 'react';
import styled from 'styled-components';
import PrivacyAdsPDF from '../../assets/PDF/Aviso_de_Privacidad.pdf';
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

const PrivacyAds = () => {

  return (
    <PDFContainer>
      <Title>Aviso de privacidad</Title>
      <AllPages pdf={PrivacyAdsPDF} />
      <ExternalText>
        Si no puedes visualizar el documento, <ExternalLink href="https://cargame.com.co/Aviso_de_Privacidad.pdf" target="_blank">haz clic acá</ExternalLink>
      </ExternalText>
    </PDFContainer>
  );
};

export default PrivacyAds;
