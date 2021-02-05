import React from 'react';
import styled from 'styled-components';
import { WHITE_COLOR } from '../../utils/colors';
import { SOCIAL_MEDIA_LIST } from '../../utils/extras';
import Title from '../Title/Title';
import CardTeam from './CardTeam';

const TeamContainer = styled.div`
  background-color: ${WHITE_COLOR};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    ". ."
    ". .";
  margin-top: 30px;
`;

const Team = () => {
  return (
    <>
      <Title
        title="EQUIPO DE TRABAJO"
        description="Cargame es una experiencia única para nuestros clientes"
        isSecond
      />
      <TeamContainer>
        <CardTeam
          name='Diego Hernández'
          charge='CEO'
          image='Diego'
          description='CARGAME LLEGA LEJOS POR TI'
          socialMediaList={SOCIAL_MEDIA_LIST}
        />
        <CardTeam
          name='Lina Velez'
          image='Lina'
          charge='JEFE ADMINISTRATIVA'
          description='CÁRGAME TECNIFICADA PARA BRINDARTE LA MEJOR EXPERIENCIA'
          socialMediaList={SOCIAL_MEDIA_LIST}
        />
        <CardTeam
          name='Juan Perez'
          image='Juan'
          charge='JEFE DE MERCADEO'
          description='EN CÁRGAME LA GENTE TRABAJA PARA LA GENTE Y NOSOTROS PARA ELLOS'
          socialMediaList={SOCIAL_MEDIA_LIST}
        />
        <CardTeam
          name='Julian Mateos'
          image='Julian'
          charge='JEFE DE SOPORTE'
          description='CÁRGAME, PARA QUE TU NECESIDAD SEA NUESTRA PREOCUPACIÓN'
          socialMediaList={SOCIAL_MEDIA_LIST}
        />
      </TeamContainer>
    </>
  );
};

export default Team;