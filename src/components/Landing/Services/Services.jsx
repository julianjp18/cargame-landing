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
        description="Llegamos a todas las regiones del país más rápido y más económico."
        isSecond
      />
      <Row>
        <Col xs={24} md={6}>
          <CardServices
            title="Viajes compartidos"
            iconName="fa-paper-plane"
            description="Cuando viajes en tu vehículo, aprovecha
            al 100% tu carro, a la vez que optimizas
            los costos de transporte. Un viajero
            podría tener un espacio libre en baúl de
            tu vehículo, así como una o dos sillas
            disponibles para compartir su viaje."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Documentos y paquetes"
            iconName="fa-file-alt"
            description="Puedes ganar dinero extra mientras
            viajas en bus, avión o barco, lleva
            documentos o una encomienda
            pequeña.
            Para viajeros en avión únicamente
            documentos (inicialmente)."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Carga y trasteos"
            iconName="fa-truck-loading"
            description="Aprovecha ese espacio vacío que queda
              en tu camión a la hora de llevar un flete.
              Este servicio también te ayuda a
              encontrar carga con más facilidad y
              rapidez cuando tu camión quede
              totalmente vacío."
          />
        </Col>
        <Col xs={24} md={6}>
          <CardServices
            title="Servicio de grúa para carro o moto"
            iconName="fa-truck"
            description="Si lo llegas a necesitar, ¡relajate!
            CÁRGAME te ayuda a solicitar servicio de
            grua, de una manera fácil, rápida y
            eficiente."
          />
        </Col>
      </Row>
    </ServicesContainer>
  );
};

export default Services;