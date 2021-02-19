import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import CardServices from './CardServices';

const ServicesContainer = styled.div`
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Title
        title="SERVICIOS"
        description="Aprovechamos los espacios vacios de los transportadores para que las personas se puedan transportar y/o envíar su carga o encomiendas."
        isSecond
      />
      <Row>
        <Col xs={24} md={6}>
          <CardServices
            title="Camiones"
            iconName="fa-truck"
            description="Puedes enviar toda tu carga y encomiendas a través de nuestros camiones aliados, la cual, llegará más rapido y a un menor costo."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Vehículos particulares"
            iconName="fa-car"
            description="Viaja de forma segura, comoda y económica en nuestros vehículos aliados (automóviles y camiones)."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Envía tus documentos"
            iconName="fa-plane"
            description="Todos hemos tenido que enviar un documento urgente, ”de YA para YA”, CÁRGAME te lo lleva a través de nuestros viajeros en avión."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Comparte tu maleta"
            iconName="fa-briefcase"
            description="Puedes enviar tus encomiendas con nuestros viajeros que van en moto, bus o barco, quienes la entregarán en el punto acordado."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Pide tu grua"
            iconName="fa-briefcase"
            description="CÁRGAME te acompaña si te quedaste barado, pide tu grua para carro o moto, nosotros te llevamos."
          />
        </Col>
      </Row>
    </ServicesContainer>
  );
};

export default Services;
