import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import './aboutUs.scss';


const AboutUsContainer = styled.div`
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="us">
      <Title
        title="ACERCA DE NOSOTROS"
        description="Somos una plataforma digital que búsca acercar las regiones más apartadas con las ciudades principales. Conectamos a transportadores con usuarios generadores de carga."
      />
      <Row>
        <Col xs={24}>
          <img className="img" src="images/asset_7.png" alt="logo" />
        </Col>
      </Row>
    </AboutUsContainer>
  );
};

export default AboutUs;