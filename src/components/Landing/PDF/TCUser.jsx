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


const TCUser = () => {

  return (
    <PDFContainer>
      <Title>Términos y condiciones usuario</Title>
      <AllPages pdf={TCUserPDF} />
    </PDFContainer>
  );
};

export default TCUser;