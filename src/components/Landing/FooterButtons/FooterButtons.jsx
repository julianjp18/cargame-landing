import React from 'react';
import styled from 'styled-components';
import { BLACK_COLOR } from '../../utils/colors';

import WhatsAppImage from '../../assets/images/new-version/whatsapp-icon.svg';

const FooterContainer = styled.div`
  bottom: 25px;
  position: fixed;
  right: 20px;
`;

const WhatsAppImageContent = styled.img`
  border-radius: 50%;
  box-shadow: 2px 2px 9px 5px ${BLACK_COLOR};
  cursor: pointer;
  margin-right: 15px;
  height: 50px;
  width: 50px;
  transition: 0.5s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FooterButtons = () => {

  const redirect = () => {
    window.location.href= 'https://wa.link/wus2o4';
  }

  return (
    <FooterContainer>
      <WhatsAppImageContent alt="whatsapp image" onClick={redirect} src={WhatsAppImage} />
    </FooterContainer>
  );
};

export default FooterButtons;
