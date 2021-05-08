import React from 'react';
import styled from 'styled-components';
import { DARK_GREY, PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import PlaneImage from '../../assets/images/new-version/viajero_avion.svg';
import TruckImage from '../../assets/images/new-version/paquete.svg';
import CarImage from '../../assets/images/new-version/viajesC.svg';
import BriefCaseImage from '../../assets/images/new-version/maleta.svg';
import CarCrashImage from '../../assets/images/new-version/grua.svg';

const CardContainer = styled.div`
  background-color: ${WHITE_COLOR};
`;

const InfoContainer = styled.div`
  color: ${WHITE_COLOR};
`;

const IconContainer = styled.div`
  font-size: 30px;
  color: ${PRIMARY_COLOR};
`;

const SocialMediaContainer = styled.div`
  
`;

const PContent = styled.p`
  color: ${DARK_GREY};
  padding: 0 50px;
`;

const Description = styled.i`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #424B5A;
`;

const Title = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: normal;
  font-size: 30.2425px;
  line-height: 37px;
  text-align: center;
  color: #424B5A;
`;

const ImageIcon = styled.img`

`;

const CardServices = ({
  title,
  iconName,
  description,
}) => {
  const switchImageIcon = () => {
    switch (iconName) {
      case 'fa-plane':
        return PlaneImage;
      case 'fa-truck':
        return TruckImage;
      case 'fa-car':
        return CarImage;
      case 'fa-briefcase':
        return BriefCaseImage;
      case 'fa-car-crash':
        return CarCrashImage;
      default:
        break;
    }
  }

  return (
    <CardContainer>
      <IconContainer>
        <ImageIcon src={switchImageIcon()} alt={iconName} />
      </IconContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <PContent>
          <Description>
            {`${description}`}
          </Description>
        </PContent>
      </InfoContainer>
    </CardContainer>
  );
};

export default CardServices;