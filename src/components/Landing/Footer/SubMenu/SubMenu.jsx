import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BUTTON_BG_COLOR, PRIMARY_COLOR, WHITE_COLOR } from '../../../utils/colors';
import { landingNavigation } from '../../../utils/extras';
import DownloadsApps from '../../DownloadApps/DownloadApps';

const SubMenuContainer = styled.div`
  min-height: 20vh;
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
`;

const PSocial = styled.p`
  margin-bottom: 0;
  color: ${WHITE_COLOR};
`;

const PSubtitle = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: ${WHITE_COLOR};
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const ULContent = styled.ul`
  list-style: none;
`;

const LIContent = styled.li`
  padding-bottom: 10px;
  color: ${WHITE_COLOR};

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
          <DownloadsApps color='white' />
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
              <Button onClick={() => landingNavigation('business-plan')}>
                Plan de negocios
              </Button>
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
              Noticias
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
            <AContent href="https://www.facebook.com/Cargameapp"><i className={`fab fa-facebook`}></i></AContent>
            <AContent href="https://www.youtube.com/channel/UCAEtD9ycbtx-PLudy2QvgoQ"><i className={`fab fa-youtube`}></i></AContent>
            <AContent href="https://instagram.com/cargameapp"><i className={`fab fa-instagram`}></i></AContent>
          </SocialMediaContainer>
        </Col>
      </Row>
    </SubMenuContainer>
  );
};

export default SubMenu;