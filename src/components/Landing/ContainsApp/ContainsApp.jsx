import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { WHITE_COLOR, PRIMARY_COLOR } from '../../utils/colors';
import ItemOne from '../../assets/images/new-version/ubicacion.svg';
import ItemTwo from '../../assets/images/new-version/pagos.svg';
import ItemThree from '../../assets/images/new-version/oferta.svg';
import ItemFour from '../../assets/images/new-version/seguridad_carga.svg';
import ItemFive from '../../assets/images/new-version/transportadoreside.svg';
import ItemSix from '../../assets/images/new-version/serviciocl.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  min-height: 94vh;
  box-shadow: 2px 10px 28px rgba(75, 0, 129, 0.12);
`;

const TextItemContent = styled.p`
  color: ${WHITE_COLOR};
  margin-top: 20px;
  margin-bottom: 0;
`;

const ImageItemContent = styled.img`
`;

const ColOne = styled.div`
  margin-bottom: 35px;
  margin-top: 35px;
`;

const ItemContent = ({ image, text }) => (
  <Row>
    <Col xs={24}>
      <ImageItemContent src={image} />
    </Col>
    <Col xs={24}>
      <TextItemContent>{text}</TextItemContent>
    </Col>
  </Row>
);

const ContainsApp = () => {
  return (
    <Container id="app">
      <Row>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemOne} text='Ubicación en tiempo real ' />
        </ColOne>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemTwo} text='Pagos seguros encriptados' />
        </ColOne>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemThree} text='Oferta más económica' />
        </ColOne>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemFour} text='Seguridad para tu carga' />
        </ColOne>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemFive} text='Transportadores identificados' />
        </ColOne>
        <ColOne className='ant-col ant-col-xs-24 ant-col-md-8'>
          <ItemContent image={ItemSix} text='Servicio al cliente 24/7' />
        </ColOne>
      </Row>
    </Container>
  )
}

export default ContainsApp;
