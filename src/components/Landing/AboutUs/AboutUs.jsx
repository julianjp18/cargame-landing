import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import './aboutUs.scss';
import mainBackground from '../../assets/images/new-version/about-us-background.png';
import DownloadsApps from '../DownloadApps/DownloadApps';
import { WHITE_COLOR } from '../../utils/colors';
import Policies from './Policies/Policies';
import Brand from './Brand/Brand';

const AboutUsContainer = styled.div`
  min-height: 94vh;
`;

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

const Title = styled.p`
  padding-top: 30vh;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${WHITE_COLOR};
`;

const Subtitle = styled.p`
  padding: 0 100px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${WHITE_COLOR};

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const MainInfoContainer = styled.div`
  padding: 150px 100px;
`;

const MainInfoText = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #424B5A;
`;

const AboutUs = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setisLoading(false);
      }, 2000);
  }, [isLoading]);

  return (
    <AboutUsContainer id="us">
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <HeaderContainer>
            <HeaderContent>
              <Title>Sobre nosotros</Title>
              <Subtitle>
                Somos una plataforma digital que busca conectar a usuarios que tengan la necesidad de realizar envíos, con transportadores que viajen hacia el lugar donde se necesita el envio.
              </Subtitle>
            </HeaderContent>
          </HeaderContainer>
          <MainInfoContainer>
            <MainInfoText>
              Nos proyectamos como una plataforma digital reconocida a nivel nacional e internacional, con soporte tecnológico robusto y servicio al cliente eficiente, manteniendo altos y rigurosos protocolos de seguridad informática.
            </MainInfoText>
          </MainInfoContainer>
          <Policies />
          <DownloadsApps />
        </>
      )}
    </AboutUsContainer>
  );
};

export default AboutUs;