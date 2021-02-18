import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_TEXT_COLOR, WHITE_COLOR } from '../../utils/colors';


const CardContainer = styled.div`
  background-color: ${WHITE_COLOR};
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  box-shadow: -1px 4px 19px -3px rgba(0,0,0,0.75);
  margin: 20px 40px 0px 40px;
  padding: 20px 30px;
  min-height: 208px;
`;

const InfoContainer = styled.div`
  color: ${SECOND_TEXT_COLOR};
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const SocialMediaContainer = styled.div`
  
`;

const PContent = styled.p`
  color: black;
`;

const AContent = styled.a`
  margin: 0 4px;
  font-size: 25px;
  color: ${PRIMARY_COLOR};
`;

const Description = styled.i`
  color: black;
  font-size: 16px;
  font-weight: 700;
`;

const CardTeam = ({
  name,
  charge,
  image,
  description,
  socialMediaList,
  photo,
}) => {
  return (
    <CardContainer>
      <Row>
        <Col xs={6}>
          <Image src={photo} alt='image' />
        </Col>
        <Col xs={18}>
          <InfoContainer>
            <h2>{name}</h2>
            <PContent>{charge}</PContent>
            <PContent>
              <Description>
                {`"${description}"`}
              </Description>
            </PContent>
          </InfoContainer>
          <SocialMediaContainer>
            {socialMediaList.map((social) => (
              <AContent key={social.icon} href={social.url}><i className={`fab fa-${social.icon}`}></i></AContent>
            ))}
          </SocialMediaContainer>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default CardTeam;