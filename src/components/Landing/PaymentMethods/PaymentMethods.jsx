import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import OneItem from '../../assets/images/new-version/master-card.png';
import TwoItem from '../../assets/images/new-version/visa.svg';
import ThreeItem from '../../assets/images/new-version/pse.png';
import FourItem from '../../assets/images/new-version/Codensa.png';
import FiveItem from '../../assets/images/new-version/efecty.png';
import SixItem from '../../assets/images/new-version/via.png';

const HeaderContainer = styled.div`
  min-height: 30vh;
  border-top: 1px solid ${PRIMARY_COLOR};
  background-color: ${PRIMARY_COLOR};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

const ImagesContainer = styled.div`
  margin-top: 15px;
`;

const Title = styled.p`
  color: ${WHITE_COLOR};
  font-family: Ruda;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 78px;
  margin-bottom: 2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const MastercardImage = styled.img`
  width: 80px;
`;

const VisaImage = styled.img`
  margin-left: 18px;
  width: 100px;
`;

const PSEImage = styled.img`
  width: 100px;
`;

const CodensaImage = styled.img`
  width: 100px;
`;

const EfectyImage = styled.img`
  width: 100px;
  margin-left: 10px;
`;

const ViaImage = styled.img`
  width: 70px;
  margin-left: 10px;
`;

const PaymentMethods = () => {
  return (
    <HeaderContainer id="payment-methods">
      <ImagesContainer>
        <Title>Métodos de pago</Title>
        <MastercardImage src={OneItem} alt="logo" />
        <VisaImage src={TwoItem} alt="logo" />
        <PSEImage src={ThreeItem} alt="logo" />
        <CodensaImage src={FourItem} alt="logo" />
        <EfectyImage src={FiveItem} alt="logo" />
        <ViaImage src={SixItem} alt="logo" />
      </ImagesContainer>
    </HeaderContainer>
  )
}

export default PaymentMethods;
