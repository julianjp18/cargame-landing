import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { WHITE_COLOR } from '../../utils/colors';
import { SOCIAL_MEDIA_LIST } from '../../utils/extras';
import Title from '../Title/Title';
import CardTeam from './CardTeam';

const TeamContainer = styled.div`
  background-color: ${WHITE_COLOR};
  margin-top: 30px;
`;

const Team = () => {
  return (
    <div id="team">
      <Title
        title="EQUIPO DE TRABAJO"
        description="Cargame es una experiencia única para nuestros clientes"
        isSecond
      />
      <TeamContainer>
        <Row>
          <Col xs={24} md={12}>
            <CardTeam
              name='Diego Hernández'
              charge='CEO'
              image='Diego'
              description='CÁRGAME LLEGA LEJOS POR TI'
              socialMediaList={SOCIAL_MEDIA_LIST}
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Lina Velez'
              image='Lina'
              charge='JEFE ADMINISTRATIVA'
              description='CÁRGAME TECNIFICADA PARA BRINDARTE LA MEJOR EXPERIENCIA'
              socialMediaList={SOCIAL_MEDIA_LIST}
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Juan Perez'
              image='Juan'
              charge='JEFE DE MERCADEO'
              description='EN CÁRGAME LA GENTE TRABAJA PARA LA GENTE Y NOSOTROS PARA ELLOS'
              socialMediaList={SOCIAL_MEDIA_LIST}
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Julian Mateos'
              image='Julian'
              charge='JEFE DE SOPORTE'
              description='CÁRGAME, PARA QUE TU NECESIDAD SEA NUESTRA PREOCUPACIÓN'
              socialMediaList={SOCIAL_MEDIA_LIST}
            />
          </Col>
        </Row>
      </TeamContainer>
    </div>
  );
};

export default Team;