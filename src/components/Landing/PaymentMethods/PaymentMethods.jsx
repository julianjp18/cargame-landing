import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import mainBackground from '../../assets/images/new-version/second-background.webp';
import ItemOne from '../../assets/images/new-version/master-card.png';
import ItemTwo from '../../assets/images/new-version/visa.svg';
import ItemThree from '../../assets/images/new-version/pse.png';

const HeaderContainer = styled.div`
  min-height: 30vh;
  border-top: 1px solid ${PRIMARY_COLOR};
  background-color: ${PRIMARY_COLOR};
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImagesContainer = styled.div`
  margin-top: 15px;
`;

const Title = styled.p`
  color: ${WHITE_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const FirstImage = styled.img`
  max-width: 100%;
`;

const SecondImage = styled.img`
  max-width: 100%;
`;

const ThirdImage = styled.img`
  max-width: 100%;
`;

const PaymentMethods = () => {
  return (
    <HeaderContainer id="payment-methods">
      <ImagesContainer>
        <Title>Métodos de pago</Title>
        <FirstImage src={ItemOne} alt="logo" />
        <SecondImage src={ItemTwo} alt="logo" />
        <ThirdImage src={ItemThree} alt="logo" />
      </ImagesContainer>
    </HeaderContainer>
  )
}

export default PaymentMethods;
