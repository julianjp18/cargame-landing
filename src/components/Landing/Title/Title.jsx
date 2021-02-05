import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, THIRD_TEXT_COLOR } from '../../utils/colors';

const TitleContainer = styled.div`
  margin: 30px 0;
`;

const TitleStyle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: ${PRIMARY_COLOR};
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${THIRD_TEXT_COLOR};
`;

const HrContent = styled.hr`
  width: 15%;
  margin: 15px auto;
`;

const Title = ({ title, description }) => {
  return (
    <TitleContainer>
      <TitleStyle>{title}</TitleStyle>
      <HrContent />
      <Description>{description}</Description>
    </TitleContainer>
  );
};

export default Title;