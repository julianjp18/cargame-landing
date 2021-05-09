import { Col } from 'antd';
import React from 'react';
import styled from 'styled-components';

import ItemTwo from '../../assets/images/new-version/mil_usuarios.svg';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import FirstItemVideo from '../../assets/videos/cargame-transportador.mp4';
import SecondItemVideo from '../../assets/videos/cargame-usuarios.mp4';

const RowAnt = styled.div`
  padding: 50px 0;
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
`;

const RowAntTwo = styled.div`
  padding: 0 150px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ColAnt = styled.div`
  padding: 20px;
`;

const AppsVideosTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${PRIMARY_COLOR};

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 57px;
  }

  @media (max-width: 530px) {
    font-size: 45px;
    line-height: 65px;
  }
`;

const UsersImage = styled.img`

`;

const VideoSubTitle = styled.p`
  text-align: start;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #424B5A;
`;

const VideoTitle = styled.p`
  text-align: start;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: 0.02em;
  color: #424B5A;
`;

const VideoContainer = styled.div`
  padding: 0 10px;
`;

const UsersTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: normal;
  font-size: 30.2425px;
  line-height: 37px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const UsersDescription = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const AppsVideos = () => (
  <RowAnt id="videos" className="ant-row">
    <Col xs={24}>
      <AppsVideosTitle>Conectando transportadores y usuarios</AppsVideosTitle>
    </Col>
    <Col xs={24}>
      <RowAntTwo className="ant-row">
        <Col xs={24} md={12}>
          <VideoContainer>
            <video style={{ maxWidth: '100%' }} controls src={SecondItemVideo} type="video/mp4" />
          </VideoContainer>
          <VideoSubTitle>Video</VideoSubTitle>
          <VideoTitle>Cárgame usuario</VideoTitle>
        </Col>
        <Col xs={24} md={12}>
          <VideoContainer>
            <video style={{ maxWidth: '100%' }} controls src={FirstItemVideo} type="video/mp4" />
          </VideoContainer>
          <VideoSubTitle>Video</VideoSubTitle>
          <VideoTitle>Cárgame transportador</VideoTitle>
        </Col>
      </RowAntTwo>
    </Col>
  </RowAnt>
);

export default AppsVideos;
