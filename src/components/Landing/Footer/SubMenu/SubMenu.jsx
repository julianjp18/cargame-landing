import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BUTTON_BG_COLOR, PRIMARY_COLOR, SECOND_TEXT_COLOR, WHITE_COLOR } from '../../../utils/colors';
import { landingNavigation } from '../../../utils/extras';

const SubMenuContainer = styled.div`
  min-height: 20vh;
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
`;

const PSocial = styled.p`
  margin-bottom: 0;
  color: ${SECOND_TEXT_COLOR};
`;

const PSubtitle = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: ${SECOND_TEXT_COLOR};
`;

const Button = styled.button`
  background: transparent;
  border: 0;
`;

const ULContent = styled.ul`
  list-style: none;
`;

const LIContent = styled.li`
  padding-bottom: 10px;
  color: ${SECOND_TEXT_COLOR};

  &:hover {
    cursor: pointer;
    color: ${PRIMARY_BUTTON_BG_COLOR};
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 15px;
`;

const AContent = styled.a`
  margin: 0 4px;
  font-size: 25px;
  color: ${WHITE_COLOR};
`;

const SubMenu = () => {
  return (
    <SubMenuContainer>
      <Row>
        <Col xs={12} md={6}>
          <PSubtitle>CARGAME</PSubtitle>
          <p>
            En Cargame estamos innovando todo el tiempo en beneficio de nuestros transportadores y usuarios,
            te invitamos a ser parte de nuestro equipo.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <PSubtitle>Opciones</PSubtitle>
          <ULContent>
            <LIContent>
              <Button onClick={() => landingNavigation('us')}>
                Acerca de nosotros
              </Button>
            </LIContent>
            <LIContent>
              Términos y condiciones
            </LIContent>
            <LIContent>
              Políticas de privacidad
            </LIContent>
            <LIContent>
              Premios
            </LIContent>
          </ULContent>
        </Col>
        <Col xs={12} md={6}>
          <PSubtitle>Servicios</PSubtitle>
          <ULContent>
            <LIContent>
              <Button onClick={() => landingNavigation('us')}>
                Registrarse
              </Button>
            </LIContent>
            <LIContent>
              Iniciar sesión
            </LIContent>
            <LIContent>
              Blog
            </LIContent>
            <LIContent>
              <Button onClick={() => landingNavigation('services')}>
                Servicios
              </Button>
            </LIContent>
          </ULContent>
        </Col>
        <Col xs={12} md={6}>
          <PSubtitle>Nuestras redes sociales</PSubtitle>
          <PSocial>Siguenos en nuestras redes sociales</PSocial>
          <PSocial>Ustedes son nuestro día a día.</PSocial>
          <SocialMediaContainer>
            <AContent href=""><i className={`fab fa-facebook`}></i></AContent>
            <AContent href=""><i className={`fab fa-linkedin`}></i></AContent>
            <AContent href=""><i className={`fab fa-instagram`}></i></AContent>
          </SocialMediaContainer>
        </Col>
      </Row>
    </SubMenuContainer>
  );
};

export default SubMenu;