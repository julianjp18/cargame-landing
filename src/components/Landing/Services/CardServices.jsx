import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_TEXT_COLOR, WHITE_COLOR } from '../../utils/colors';

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
  color: ${SECOND_TEXT_COLOR};
`;

const IconContainer = styled.div`
  font-size: 30px;
  color: ${PRIMARY_COLOR};
`;

const SocialMediaContainer = styled.div`
  
`;

const PContent = styled.p`
  color: black;
`;

const Description = styled.i`
  color: black;
  font-size: 16px;
  font-weight: 700;
`;

const Title = styled.h2`
  color: ${PRIMARY_COLOR};
`;

const CardServices = ({
  title,
  iconName,
  description,
}) => {
  return (
    <CardContainer>
      <IconContainer>
        <i className={`fas ${iconName}`} />
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