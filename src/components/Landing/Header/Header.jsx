import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import { PRIMARY_COLOR, WHITE_COLOR, PRIMARY_BUTTON_BG_COLOR } from '../../utils/colors';
import imageHeader from '../../assets/images/Asset_6.png';
import mainVideo from '../../assets/videos/Inicio.mp4';


const HeaderContainer = styled.div`
  min-height: 80vh;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

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

const ImageContainer = styled.div`
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
  width: 50%;
  margin: 30px 0;
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 60px;
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
`;

const VideoContent = styled.div`
  max-width: 100%;
  margin: auto;
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
    <HeaderContainer>
      <TitleContainer>
        <Title>Una solución colaborativa para Colombia</Title>
        <Description>
          Somos una plataforma digital que búsca acercar las regiones más apartadas con las ciudades principales. Conectamos a transportadores con usuarios generadores de carga.
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
      </TitleContainer>
      <ImageContainer>
        <Image src={imageHeader} alt="phone" />
      </ImageContainer>
    </HeaderContainer>
  )
}

export default Header;