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

const TCDriver = () => {

  return (
    <PDFContainer>
      <Title>Términos y condiciones transportador</Title>
      <AllPages pdf={TCDriverPDF} />
    </PDFContainer>
  );
};

export default TCDriver;