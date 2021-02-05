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
        <p>{charge}</p>
        <p>{description}</p>
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