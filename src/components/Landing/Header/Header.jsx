import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR, PRIMARY_BUTTON_BG_COLOR } from '../../utils/colors';
import imageHeader from '../../assets/images/Asset_6.png';
import mainVideo from '../../assets/videos/Inicio.mp4';
import DownloadsApps from '../DownloadApps/DownloadApps';
import { Redirect, useHistory } from 'react-router-dom';


const HeaderContainer = styled.div`
  min-height: 80vh;
  background-color: ${PRIMARY_COLOR};

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

const ButttonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 50px;
  font-size: 24px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-size: 43px;
  font-weight: 700;
  line-height: 56px;
  color: ${WHITE_COLOR};
`;

const FirstButtonContainer = styled.div`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px 11px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0 0 0;
  color: ${WHITE_COLOR};
  background: ${PRIMARY_BUTTON_BG_COLOR};
`;

const TitleContainer = styled.div`
  margin: 30px 0 30px 10px;
`;

const ImageContainer = styled.div`
  margin-top: 45px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }  
`;

const Image = styled.img`
  max-width: 80%;
  margin: 30px 0 0 0;

  @keyframes image-t {
    0%, 100% {
      transform: translateY(0);
    }
    
    50% {
      transform: translateY(5px);
    }
    
    80% {
      transform: translateY(-5px);
    }
  }

  animation: image-t 2.5s linear infinite;
`;

const SecondButtonContainer = styled.div`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px 11px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0 0 0;
  color: ${WHITE_COLOR};
  background: ${PRIMARY_BUTTON_BG_COLOR};
  cursor: pointer;

  &:hover {
    background: ${WHITE_COLOR};
    color: ${PRIMARY_BUTTON_BG_COLOR};
  }
`;

const VideoContent = styled.div`
  max-width: 100%;
  margin: auto;
`;

const ButtonAuth = styled.button`
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid ${PRIMARY_BUTTON_BG_COLOR};
  border-radius: 50px;
  transition: 0.5s;
  margin-left: 10px;
  margin-bottom: 10px;
  color: ${WHITE_COLOR};
  background: ${PRIMARY_BUTTON_BG_COLOR};
  cursor: pointer;

  &:hover {
    background: ${WHITE_COLOR};
    color: ${PRIMARY_BUTTON_BG_COLOR};
  }
`;

const PContent = styled.p`
  font-size: 30px;
  color: ${WHITE_COLOR};
  margin-bottom: 1px;

  @media (max-width: 768px) {
    font-size: 30px;
  } 
`;

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const redirect = (path) => {
    history.push(`/${path}`);
  };

  return (
    <HeaderContainer>
      <Row>
        <Col xs={24} md={12}>
          <TitleContainer>
            <Title>Una solución colaborativa para Colombia</Title>
            <Description>
              Somos una plataforma digital que búsca acercar las regiones más apartadas con las ciudades principales.
        </Description>
            <ButttonsContainer>
              <SecondButtonContainer onClick={showModal}>Ver video</SecondButtonContainer>
              <Modal
                title="¿Qué es CARGAME?"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText='Volver'
              >
                <VideoContent>
                  <video style={{ maxWidth: '100%' }} controls src={mainVideo} type="video/mp4" />
                </VideoContent>
              </Modal>
            </ButttonsContainer>
            <DownloadsApps color='white' />
          </TitleContainer>
        </Col>
        <Col xs={24} md={12}>
          <ImageContainer>
            <Row>
              <Col xs={24}>
                <PContent>
                  ¿Quieres ser parte?
                </PContent>
                <ButtonAuth onClick={() => redirect('sign-up')}>¡Registrate ya!</ButtonAuth>
              </Col>
              <Col xs={24}>
                <Image src={imageHeader} alt="phone" />
              </Col>
            </Row>
          </ImageContainer>
        </Col>
      </Row>
    </HeaderContainer>
  )
}

export default Header;