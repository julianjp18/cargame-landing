import { Row, Col, Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import './aboutUs.scss';
import logoTransportador from '../../assets/images/logo_transportador.png';
import logoCargame from '../../assets/images/logocargame.png';
import cargameUsuarios from '../../assets/videos/cargame-usuarios.mp4';
import cargameTransportador from '../../assets/videos/cargame-transportador.mp4';
import DownloadsApps from '../DownloadApps/DownloadApps';

const { TabPane } = Tabs;

const AboutUsContainer = styled.div`
  padding-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 30px;
`;


const ImageLogo = styled.img`
  max-width: 70%;
  margin-bottom: 20px;
`;

const ImageDriver = styled.img`
  max-width: 100%;
  width: 63%;
`;

const ImageContainer = styled.div`
  margin-bottom: 100px;
`;

const TabsContainer = styled.div`
  padding: 20px 0 10px 0;
  margin: auto;
  width: 70%;
`;

const VideoContainer = styled.div`
  padding: 0 40px;
`;

const PContainer = styled.div`
  padding-top: 90px;

  @media (max-width: 768px) {
    padding-top: 0;
    margin: 20px 0;
  }
`;

const PContent = styled.i`
  font-size: 35px;
  font-weight: bold;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer id="us">
      <Title
        title="ACERCA DE NOSOTROS"
        description="Somos una plataforma digital que conecta transportadores con usuarios generadores de carga."
      />
      <Row>
        <Col xs={24} md={8}>
          <ImageLogo src={logoCargame} alt="cargame" />
        </Col>
        <Col xs={24} md={8}>
          <PContainer>
            <PContent>"Conectamos las regiones apartadas con las ciudades principales."</PContent>
          </PContainer>
        </Col>
        <Col xs={24} md={8}>
          <ImageContainer>
            <ImageDriver src={logoTransportador} alt="transportador" />
          </ImageContainer>
        </Col>
        <Col xs={24} md={12}>
          <VideoContainer>
            <h2>CÁRGAME - Usuarios</h2>
            <video style={{ maxWidth: '100%' }} controls src={cargameUsuarios} type="video/mp4" />
          </VideoContainer>
        </Col>
        <Col xs={24} md={12}>
          <VideoContainer>
            <h2>CÁRGAME - Transportador</h2>
            <video style={{ maxWidth: '100%' }} controls src={cargameTransportador} type="video/mp4" />
          </VideoContainer>
        </Col>
        <Col xs={24}>
          <TabsContainer>
            <Tabs className="tabs-container" defaultActiveKey="1">
              <TabPane tab="Misión" key="1">
                <p>
                  Somos una plataforma digital que busca comunicar a generadores de carga (usuarios) que tengan la necesidad de enviar “algo”,
                  con vehículos y/o viajeros (Transportadores) que viajen hacia el lugar donde el usuario necesita que le llegue ese “algo”.
                  Adicional, somos un agente de seguros de vehículos y de carga.
                </p>
              </TabPane>
              <TabPane tab="Visión" key="2">
                <p>
                  <strong>CÁRGAME</strong> se proyecta como una plataforma digital reconocida a nivel nacional e internacional,
                   con un soporte tecnológico robusto y un servicio al cliente eficiente, manteniendo altos y eficientes protocolos de seguridad informática. Para el 2023 habremos conquistado el mercado Colombiano y estaremos en un segundo país, a partir de ese momento,
                    cada año nos expandiremos a un nuevo mercado internacional.
                </p>
              </TabPane>
              <TabPane tab="Políticas" key="3">
                <p>
                  <span className="number-list">1.</span> La seguridad de la información es de gran importancia estratégica
                </p>
                <p>
                  <span className="number-list">2.</span> El servicio al cliente tiene la mayor relevancia
                </p>
                <p>
                  <span className="number-list">3.</span> Tanto usuarios generadores de carga, como transportadores deben estar plenamente identificados
                </p>
                <p>
                  <span className="number-list">4.</span>  La carga y las encomiendas siempre deben contar con un seguro de respaldo
                </p>
              </TabPane>
              <TabPane tab="Heráldica" key="4">
                <p>
                  El escudo de CÁRGAME esta representado por una variedad de símbolos que representan la misión y visión de la empresa, así:
                </p>
                <p>
                  <ul>
                    <li>Al fondo tiene una caja en forma de cubo, que representa el objeto de CARGAME, la carga, el paquete, los documentos y paquetes.</li>
                    <li>El triangulo representa las tres dimensiones de la visión de CÁRGAME; Aire, Tierra y Agua. El triangulo pequeño representa a Colombia, la conquista del mercado nacional y el grande representa la expansión, la conquista del mercado internacional.</li>
                    <li>El nombre tiene dos formas de leerse, CÁRGAME (juego de carro) ó CÁRGAME (una exclamación en primera persona pidiendo ayuda para ser transportado)</li>
                    <li>Por último, la flecha tiene dos significados, el primero es el de cumplir función de tilde (´) cuando la palabra se lee en español; el segundo significado es el de avanzar, indicando hacia donde queda el norte del negocio.</li>
                  </ul>
                </p>
              </TabPane>
            </Tabs>
          </TabsContainer>
        </Col>
      </Row>
      <DownloadsApps />
    </AboutUsContainer>
  );
};

export default AboutUs;