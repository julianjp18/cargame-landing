import { Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CargameLogoImage from '../../../assets/images/new-version/logo-footer.png';

import { PRIMARY_COLOR, SECOND_COLOR } from '../../../utils/colors';

const PhonesImages = styled.img`
  margin-top: 90px;
  object-fit: contain;
  max-width: 100%;
  
`;

const DownloadContainerInfo = styled.div`
  padding: 80px 45px 20px 0;

  @media (max-width: 560px) {
    padding: 35px 15px 20px 0;
  }
`;

const DownloadTitle = styled.p`
  margin-bottom: 0;
  text-align: start;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  color: ${PRIMARY_COLOR};
`;

const RowAnt = styled.div`
  margin-top: 20px;
`;

const RowAntTwo = styled.div`
  padding-left: 30px;
`;

const ColAnt = styled.div`

`;
const ItemDescription = styled.div`
  text-align: end;
  padding-left: 20px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #424B5A;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 363.83px;
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
`;

const Brand = () => (
  <RowAnt id="App" className="ant-row">
    <ColAnt className="ant-col ant-col-xs-24 ant-col-md-12">
      <DownloadContainerInfo>
        <ItemDescription>
          Nuestra caja en forma de cubo, representa el objeto de CÁRGAME, la carga, los documentos y paquetes.
        </ItemDescription>
        <ItemDescription>
          El triangulo representa las tres dimensiones de la visión de CÁRGAME; Aire, Tierra y Agua.
        </ItemDescription>
        <ItemDescription>
          El triangulo pequeño representa a Colombia, la conquista del mercado nacional y el grande representa la expansión, la conquista del mercado internacional.
        </ItemDescription>
        <ItemDescription>
          El nombre tiene dos formas de leerse, CÁRGAME (juego de carro) ó CÁRGAME (una exclamación en primera persona pidiendo ayuda para ser transportado)
        </ItemDescription>
        <ItemDescription>
          Por último, la flecha tiene dos significados, el primero es cumplir función de tilde cuando la palabra se lee en español; el segundo es avanzar, indicando el norte del negocio.
        </ItemDescription>
      </DownloadContainerInfo>
    </ColAnt>
    <Col xs={24} md={12}>
      <DownloadTitle>Nuestra Marca</DownloadTitle>
      <ImageContainer>
        <PhonesImages src={CargameLogoImage} alt='phone images' />
      </ImageContainer>
    </Col>
  </RowAnt>
);

export default Brand;
