import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import './aboutUs.scss';
import imageHeader from '../../assets/images/Asset_6.png';
import logoCargame from '../../assets/images/logocargame.png';

const AboutUsContainer = styled.div`
  padding-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 30px;
`;


const ImageLogo = styled.img`
  max-width: 70%;
  margin-bottom: 20px;
`;


const ImageContainer = styled.div`
`;

const PContent = styled.i`
  font-size: 35px;
  font-weight: bold;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="us">
      <Title
        title="ACERCA DE NOSOTROS"
        description="Somos una plataforma digital que conecta transportadores con usuarios generadores de carga."
      />
      <Row>
        <Col xs={24} md={8}>
          <ImageLogo src={logoCargame} alt="phone" />
        </Col>
        <Col xs={24} md={8}>
          <PContent>"Conectamos las regiones apartadas con las ciudades principales."</PContent>
        </Col>
        <Col xs={24} md={8}>
          <ImageContainer>
            <Image src={imageHeader} alt="phone" />
          </ImageContainer>
        </Col>
      </Row>
    </AboutUsContainer>
  );
};

export default AboutUs;