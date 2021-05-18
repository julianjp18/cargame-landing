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


const PrivacyAds = () => {

  return (
    <PDFContainer>
      <Title>Aviso de privacidad</Title>
      <AllPages pdf={PrivacyAdsPDF} />
    </PDFContainer>
  );
};

export default PrivacyAds;
