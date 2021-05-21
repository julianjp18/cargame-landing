import React, { useState } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { WHITE_COLOR, PRIMARY_COLOR, ORANGE_COLOR, DANGER_COLOR } from '../../utils/colors';
import mainBackground from '../../assets/images/new-version/main-background.png';
import mainVideo from '../../assets/videos/Inicio.mp4';
import Modal from 'antd/lib/modal/Modal';
import { landingNavigation } from '../../utils/extras';

const HeaderContent = styled.div`
  background-color: rgba(0,0,0, 0.25);
  min-height: 94vh;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;


const HeaderContainer = styled.div`
  min-height: 94vh;
  background-image: url(${mainBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding-top: 30px;
  }
`;

const ButttonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

const Description = styled.p`
  margin: 40px;
  color: ${WHITE_COLOR};
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;

  @media (max-width: 560px) {
    margin: 20px;
  }
`;

const VideoTitle = styled.p`
  color: ${WHITE_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-size: 64px;
  font-weight: 600;
  line-height: 77px;
  color: ${WHITE_COLOR};

  @media (max-width: 560px) {
    font-size: 50px;
  }
`;

const FirstButtonContainer = styled.div`
  display: inline-block;
  padding: 13px 28px 10px 28px;
  margin: 10px 0 0 0;  
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  line-height: 17px;
  font-size: 14px;
  color: ${WHITE_COLOR};
  border: 1px solid ${WHITE_COLOR};
  border-radius: 50px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${WHITE_COLOR};
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  margin: 80px 0 30px 10px;
`;

const SecondButtonContainer = styled.div`
  display: inline-block;
  padding: 13px 28px 10px 28px;
  margin: 10px 0 0 15px;  
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  line-height: 17px;
  font-size: 14px;
  color: ${WHITE_COLOR};
  border-radius: 50px;
  background: linear-gradient(55.05deg, ${ORANGE_COLOR} 0%, ${DANGER_COLOR} 100%);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(55.05deg, #ffffff 0%, #ffffff 100%);
    color: ${PRIMARY_COLOR};
    border: 1px solid ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

const DownArrowContainer = styled.div`
  position: relative;

  i {
    color: ${WHITE_COLOR};
    font-size: 44px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${ORANGE_COLOR};
    }
  }

  @media (max-width: 768px) {
    position: static;
    padding-bottom: 10px;
  }
`;

const VideoContent = styled.div`
  margin-top: 15vh;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-top: 2vh;
    padding: 0 10px 20px 10px;
  }
`;

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <HeaderContainer id="header">
      <HeaderContent>
        <Row>
          <Col xs={24} md={12}>
            <TitleContainer>
              <Title>Envía y recibe paquetes fácilmente.</Title>
              <Description>
                En CÁRGAME trabajamos día a día acercando a las regiones apartadas con las ciudades principales.
              </Description>
              <Description>
                Con nuestra app puedes enviar y recibir carga, documentos, solicitar servicios de grúa o viajes compartidos.
              </Description>
              <ButttonsContainer>
                <SecondButtonContainer onClick={() => landingNavigation('earn-money')}>Gana dinero!</SecondButtonContainer>
              </ButttonsContainer>
            </TitleContainer>
          </Col>
          <Col xs={24} md={12}>
            <VideoContent>
              <VideoTitle>¿Qué es CÁRGAME?</VideoTitle>
              <video style={{ maxWidth: '100%' }} controls src={mainVideo} type="video/mp4" />
            </VideoContent>
          </Col>
          <Col xs={24}>
            <DownArrowContainer>
              <i className="fas fa-arrow-down" onClick={() => landingNavigation('app')}></i>
            </DownArrowContainer>
          </Col>
        </Row>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;