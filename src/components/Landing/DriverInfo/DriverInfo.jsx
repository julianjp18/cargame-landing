import { Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import DownloadAppImage from '../../assets/images/new-version/transportadores.png';

import { PRIMARY_COLOR, SECOND_COLOR, WHITE_COLOR } from '../../utils/colors';

const PhonesImages = styled.img`
  position: absolute;
  right: 30px;
  object-fit: contain;
  width: 100%;
  height: 600px;

  @media (max-width: 1250px) {
    position: absolute;
    right: 52px;
    object-fit: contain;
    width: 100%;
    height: 50vw;
  }

  @media (max-width: 768px) {
    position: static;
    object-fit: contain;
    width: 90%;
    height: 100%;
    margin: auto;
    margin-top: 10px;
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
  text-align: center;
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
`;

const ColAnt = styled.div`
  background: linear-gradient(55.05deg, ${SECOND_COLOR} 0%, ${PRIMARY_COLOR} 100%);
`;

const ColAntTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
`;

const NumberContent = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  background-color: ${PRIMARY_COLOR};
`;

const Number = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: ${WHITE_COLOR};
`;

const ItemDescription = styled.div`
  text-align: start;
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

const DriverInfo = () => (
  <RowAnt id="driver-info" className="ant-row">
    <Col xs={24} md={12}>
      <DownloadContainerInfo>
        <DownloadTitle>Transportadores</DownloadTitle>
        <RowAntTwo className="ant-row">
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>1</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              Activa tu vehículo registrado.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>2</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              Recibe solicitudes de servicios y oferta en el servicio que más te sirva.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>3</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              CÁRGAME selecciona la oferta más económica del mercado y la envía al usuario.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>4</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              Una vez aceptada la oferta, contacta al usuario y coordina la carga.
            </ItemDescription>
          </Col>
        </RowAntTwo>
      </DownloadContainerInfo>
    </Col>
    <ColAnt className="ant-col ant-col-xs-24 ant-col-md-12">
      <PhonesImages src={DownloadAppImage} alt='phone images' />
    </ColAnt>
  </RowAnt>
);

export default DriverInfo;
