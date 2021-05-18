import React from 'react';
import styled from 'styled-components';
import PrivacyPolicyPDF from '../../assets/PDF/Política_de_Privacidad.pdf';
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


const PrivacyPolicy = () => {

  return (
    <PDFContainer>
      <Title>Política de privacidad</Title>
      <AllPages pdf={PrivacyPolicyPDF} />
    </PDFContainer>
  );
};

export default PrivacyPolicy;
