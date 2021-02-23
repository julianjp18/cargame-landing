import React from 'react';
import styled from 'styled-components';
import { DARK_GREY, PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import PlaneImage from '../../assets/images/avion.png';
import TruckImage from '../../assets/images/truck.png';
import CarImage from '../../assets/images/car.png';
import BriefCaseImage from '../../assets/images/briefcase.png';
import CarCrashImage from '../../assets/images/crane.png';

const CardContainer = styled.div`
  background-color: ${WHITE_COLOR};
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  margin: 20px 40px 50px 40px;
  padding: 20px 30px;
  box-shadow: -1px 4px 19px -3px rgb(0 0 0 / 75%);
  min-height: 371px;
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
`;

const Description = styled.i`
  color: ${DARK_GREY};
  font-size: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  color: ${PRIMARY_COLOR};
`;

const ImageIcon = styled.img`
  max-width: 70px;
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