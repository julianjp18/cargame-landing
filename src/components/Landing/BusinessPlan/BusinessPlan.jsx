import { Row, Col, Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import './businessPlan.scss';

const { TabPane } = Tabs;

const BusinessPlanContainer = styled.div`
`;

const BusinessPlan = () => {
  return (
    <BusinessPlanContainer id="business-plan">
      <Title
        title="PLAN DE NEGOCIO"
        description="Cárgame dentro de sus políticas de responsabilidad social, creó dos métodos que potencializan la generación de ingresos a usuarios que deseen vincularse y ser parte de la estrategia de mercadeo de la compañía, dichos usuarios serán denominados «Embajadores de Cárgame», ya que serán voceros e influenciadores de la marca."
        isSecond
      />
      <Row className="business-plan-tabs-container">
        <Col xs={24} md={12}>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Plan Referidos" key="1">
              <p>
                <strong>Cárgame</strong> dentro de sus objetivos, llegará
                inicialmente a los 3 Departamentos:
                <b> Meta, Casanare y Boyacá</b>, hasta
                extenderse y llegar a la Capital Bogotá y
                el resto del País.
              </p>
              <p>
                En cada ciudad se conformará un
                núcleo de Embajadores (15) de
                diferentes sectores de la economía.
                Cada embajador tendrá como
                objetivo referir la aplicación, para que
                mayor número de personas la
                descarguen y hagan uso de sus
                servicios.
              </p>
              <p>
                <b>Cárgame</b> como reconocimiento,
                otorgará el <b>1%</b> de cada servicio
                facturado por cada uno de los
                referidos que haya inscrito bajo su
                código de referencia. El pago de este
                porcentaje será vitalicio y se realizará
                mensualmente en una cuenta
                bancaria suministrada previamente.
              </p>
            </TabPane>
            <TabPane tab="Plan Mil" key="2">
              <p>
                Adicional al plan referidos, Cárgame ha diseñado el <b>plan 1000
                Usuarios</b>, con el propósito de incentivar a los miembros de la
                plataforma a ganar dinero mientras hablan con sus conocidos, el
                cual está dirigido solo a los usuarios referidos y tienen las siguientes
                metas y bonificaciones.
              </p>
            </TabPane>
          </Tabs>
        </Col>
        <Col xs={24} md={12}>
          <img src="images/why-us.png" alt="why us" />
        </Col>
      </Row>
    </BusinessPlanContainer>
  );
};

export default BusinessPlan;
