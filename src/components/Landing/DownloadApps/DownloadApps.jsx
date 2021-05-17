import { Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import DownloadAppImage from '../../assets/images/new-version/download-app-image.png';
import PlayStore from '../../assets/images/new-version/google-play.png';
import AppStore from '../../assets/images/new-version/app-store.png';
import { WHITE_COLOR } from '../../utils/colors';

const PhonesImages = styled.img`
  position: absolute;
  right: -58px;
  top: -148px;
  object-fit: cover;
  width: 100%;
  height: 600px;

  @media (max-width: 992px) {
    position: absolute;
    right: -32px;
    top: -110px;
    object-fit: cover;
    width: 100%;
    height: 56vw;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DownloadContainerInfo = styled.div`
  padding: 35px 45px 20px 0;
  text-align: end;

  @media (max-width: 560px) {
    padding: 35px 15px 20px 0;
  }
`;

const DownloadTitle = styled.p`
  margin-bottom: 10px;
  text-align: end;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  color: ${WHITE_COLOR};
`;

const DownloadDescription = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  letter-spacing: 0.02em;
  color: ${WHITE_COLOR};
`;

const RowAnt = styled.div`
  height: 361.52px;
  margin: 180px 0;
  background-color: #BBBBBB;

  @media (max-width: 768px) {
    margin: 0 0;
  }

  @media (max-width: 560px) {
    height: 100%;
  }
`;

const DownloadAppsContainer = styled.div`
`;

const PlayStoreImage = styled.img`
  margin-right: 25px;
  max-width: 100%;

  @media (max-width: 1040px) {
    margin-right: 0px;
  }
`;

const AppStoreImage = styled.img`
  max-width: 100%;
`;

const DownloadsApps = () => (
  <RowAnt id="download-apps" className="ant-row">
    <Col xs={24} md={12}>
      <PhonesImages src={DownloadAppImage} alt='phone images' />
    </Col>
    <Col xs={24} md={12}>
      <DownloadContainerInfo>
        <DownloadTitle>Descarga la app</DownloadTitle>
        <DownloadDescription>
          Adquiere la Aplicación móvil para transportador y usuario y descubre la nueva
          forma de enviar y recibir paquetes fácilmente.
        </DownloadDescription>
        <DownloadAppsContainer>
          <PlayStoreImage src={PlayStore} alt='play store' />
          <AppStoreImage src={AppStore} alt='app store' />
        </DownloadAppsContainer>
      </DownloadContainerInfo>
    </Col>
  </RowAnt>
);

export default DownloadsApps;
