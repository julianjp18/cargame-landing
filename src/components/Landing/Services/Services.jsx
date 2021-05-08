import { Col } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CardServices from './CardServices';
import { PRIMARY_COLOR } from '../../utils/colors';

const ServicesContainer = styled.div`
  padding: 50px 0;
`;

const ServicesTitle = styled.p`
  font-family: Ruda;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: ${PRIMARY_COLOR};
`;

const RowAnt = styled.div`
  padding: 0 50px;
`;

const RowAntTwo = styled.div`
  padding: 0 150px;

  @media(max-width: 768px) {
    padding: 0;
  }
`;

const ColAntTwo = styled.div`

`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Más servicios para tus necesidades</ServicesTitle>
      <RowAnt className="ant-row">
        <Col xs={24} md={8}>
          <CardServices
            title="Carga o paquete"
            iconName="fa-truck"
            description="Puedes enviar toda tu carga y encomiendas a través de nuestros camiones aliados, la cual, llegará más rápido y a un menor costo."
          />
        </Col>
        <Col xs={24} md={8}>
          <CardServices
            title="Viajes compartidos"
            iconName="fa-car"
            description="Viaja de forma segura, cómoda y económica en nuestros vehículos aliados."
          />
        </Col>
        <Col xs={24} md={8}>
          <CardServices
            title="Viajero en Avión"
            iconName="fa-plane"
            description="Te ayudamos llevando ese documento urgente a través de nuestros viajeros en avión."
          />
        </Col>
        <RowAntTwo className="ant-row">
          <ColAntTwo className="ant-col ant-col-xs-24 ant-col-md-12">
            <CardServices
              title="Comparte tu maleta"
              iconName="fa-briefcase"
              description="Puedes enviar tus encomiendas con nuestros viajeros que van en moto, bus o barco, quienes la entregarán en el punto acordado."
            />
          </ColAntTwo>
          <ColAntTwo className="ant-col ant-col-xs-24 ant-col-md-12">
            <CardServices
              title="Solicita una Grúa"
              iconName="fa-car-crash"
              description="Te acompañamos en caso de accidente o problemas con tu vehículo en carretera."
            />
          </ColAntTwo>
        </RowAntTwo>
      </RowAnt>
    </ServicesContainer>
  );
};

export default Services;
