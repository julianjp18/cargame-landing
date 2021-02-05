import React from 'react';
import styled from 'styled-components';
import { SECOND_TEXT_COLOR, WHITE_COLOR } from '../../utils/colors';

const CardContainer = styled.div`
  background-color: ${WHITE_COLOR};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  margin: 20px 40px 0px 40px;
  padding: 20px 30px;
  box-shadow: -1px 4px 19px -3px rgba(0,0,0,0.75);
`;

const InfoContainer = styled.div`
  color: ${SECOND_TEXT_COLOR};
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SocialMediaContainer = styled.div`
  
`;

const PContent = styled.p`
  color: black;
`;

const CardTeam = ({
  name,
  charge,
  image,
  description,
  socialMediaList,
}) => {
  return (
    <CardContainer>
      <div>
        <Image src={`images/${image}.png`} alt='image' />
      </div>
      <InfoContainer>
        <h2>{name}</h2>
        <PContent>{charge}</PContent>
        <PContent>{description}</PContent>
      </InfoContainer>
      <SocialMediaContainer>
        {socialMediaList && socialMediaList.map((social) => (
          <a href={social.url}><i className={`fa fab-${social.icon}`}></i></a>
        ))}
      </SocialMediaContainer>
    </CardContainer>
  );
};

export default CardTeam;