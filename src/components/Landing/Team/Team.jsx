import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { WHITE_COLOR } from '../../utils/colors';
import Title from '../Title/Title';
import CardTeam from './CardTeam';
import JUAN_PHOTO from '../../assets/images/Juan.png';
import DIEGO_PHOTO from '../../assets/images/Diego.png';
import LINA_PHOTO from '../../assets/images/Lina.png';
import JULIAN_PHOTO from '../../assets/images/Julian.png';

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
              photo={DIEGO_PHOTO}
              facebookLink='https://www.facebook.com/diego.a.hernandezrodriguez.5'
              instagramLink='https://www.instagram.com/diego.andres.hdez/'
              linkedInLink='http://linkedin.com/in/ingproyectospmi'
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Lina Velez'
              image='Lina'
              charge='JEFE ADMINISTRATIVA'
              description='CÁRGAME TECNIFICADA PARA BRINDARTE LA MEJOR EXPERIENCIA'
              photo={LINA_PHOTO}
              facebookLink='https://www.facebook.com/lina.velez.372'
              instagramLink='https://www.instagram.com/linajuliana/'
              linkedInLink='http://linkedin.com/in/linavelezjaimes'
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Juan Perez'
              image='Juan'
              charge='JEFE DE MERCADEO'
              description='EN CÁRGAME LA GENTE TRABAJA PARA LA GENTE Y NOSOTROS PARA ELLOS'
              photo={JUAN_PHOTO}
              facebookLink='https://www.facebook.com/juan.p.taborda.5'
              instagramLink='https://www.instagram.com/juanitoperez72/'
            />
          </Col>
          <Col xs={24} md={12}>
            <CardTeam
              name='Julian Mateus'
              image='Julian'
              charge='JEFE DE SOPORTE'
              description='CÁRGAME, PARA QUE TU NECESIDAD SEA NUESTRA PREOCUPACIÓN'
              photo={JULIAN_PHOTO}
              facebookLink='https://www.facebook.com/julian.a.mateus.37'
              instagramLink='https://www.instagram.com/mathius78/'
              linkedInLink='https://www.linkedin.com/in/julian-andres-mateus-santamaria-482247205'
            />
          </Col>
        </Row>
      </TeamContainer>
    </div>
  );
};

export default Team;