import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, THIRD_TEXT_COLOR, WHITE_COLOR } from '../../utils/colors';

const TitleContainer = styled.div`
  padding: 60px 0;
`;

const TitleStyle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: ${PRIMARY_COLOR};
`;

const TitleSecondContainer = styled.div`
  padding: 60px 0;
  background-color: ${PRIMARY_COLOR}
`;

const TitleSecondStyle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: ${WHITE_COLOR};
`;

const SecondDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${WHITE_COLOR};
  margin: 0 60px;
`;

const HrSecondContent = styled.hr`
  width: 15%;
  margin: 15px auto;
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${THIRD_TEXT_COLOR};
  margin: 0 60px;
`;

const HrContent = styled.hr`
  width: 15%;
  margin: 15px auto;
`;

const Title = ({ title, description, isSecond }) => {
  return isSecond ? (
    <TitleSecondContainer>
      <TitleSecondStyle>{title}</TitleSecondStyle>
      <HrSecondContent />
      <SecondDescription>{description}</SecondDescription>
    </TitleSecondContainer >
  ) : (
      <TitleContainer>
        <TitleStyle>{title}</TitleStyle>
        <HrContent />
        <Description>{description}</Description>
      </TitleContainer>
    );
};

export default Title;