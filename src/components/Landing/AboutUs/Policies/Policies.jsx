import { Col } from 'antd';
import React from 'react';
import PolicyImage from '../../../assets/images/new-version/policy-image.png';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../../utils/colors';
import styled from 'styled-components';


const PhonesImages = styled.img`
  object-fit: contain;
  width: 100%;
  
`;

const DownloadContainerInfo = styled.div`
  padding: 35px 45px 20px 0;
  text-align: end;

  @media (max-width: 560px) {
    padding: 35px 15px 20px 0;
  }
`;

const DownloadTitle = styled.p`
  margin-bottom: 0;
  text-align: end;
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  color: ${PRIMARY_COLOR};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RowAnt = styled.div`
  margin-top: 20px;
`;

const RowAntTwo = styled.div`
  padding-left: 30px;
`;

const ColAnt = styled.div`

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

const Policies = () => (
  <RowAnt id="App" className="ant-row">
    <ColAnt className="ant-col ant-col-xs-24 ant-col-md-12">
      <DownloadTitle>Políticas</DownloadTitle>
      <PhonesImages src={PolicyImage} alt='phone images' />
    </ColAnt>
    <Col xs={24} md={12}>
      <DownloadContainerInfo>
        <RowAntTwo className="ant-row">
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>1</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              Tanto usuarios generadores de carga, como transportadores deben estar plenamente identificados.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>2</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              La seguridad de la información es de gran importancia estratégica.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>3</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              La carga y las encomiendas siempre deben contar con un seguro de respaldo.
            </ItemDescription>
          </Col>
          <ColAntTwo className="ant-col ant-col-xs-4">
            <NumberContent>
              <Number>4</Number>
            </NumberContent>
          </ColAntTwo>
          <Col xs={20}>
            <ItemDescription>
              El servicio al cliente tiene la mayor relevancia.
            </ItemDescription>
          </Col>
        </RowAntTwo>
      </DownloadContainerInfo>
    </Col>
  </RowAnt>
);

export default Policies;
