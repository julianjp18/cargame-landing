import { Row, Col, Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import './businessPlan.scss';
import firstPlanVideo from '../../assets/videos/Referido.mp4';

const { TabPane } = Tabs;

const BusinessPlanContainer = styled.div`
`;

const VideoContainer = styled.div`
  padding: 0 10px;
`;

const BusinessPlan = () => {
  return (
    <BusinessPlanContainer id="business-plan">
      <Title
        title="PLAN DE NEGOCIO"
        description="Cárgame dentro de sus políticas de responsabilidad social, creó dos métodos que potencializan la generación de ingresos a usuarios y transportadores que deseen vincularse y ser parte de nuestra compañía, quienes serán «Embajadores de Cárgame», ya que serán voceros e influenciadores de la marca."
        isSecond
      />
      <Row className="business-plan-tabs-container">
        <Col xs={24} md={12}>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Plan Embajadores" key="1">
              <p>
                Todo el que quiera ganar dinero extra lo puede lograr con
                 <strong> CÁRGAME</strong>, es muy fácil y real, solo debes hablarle
                 a tus conocidos sobre la plataforma y listo, mira el video para más
                 información o contacta con nosotros.
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
          <VideoContainer>
            <h2>¿Qué es el plan embajadores?</h2>
            <video style={{ maxWidth: '100%' }} controls src={firstPlanVideo} type="video/mp4" />
          </VideoContainer>
        </Col>
      </Row>
    </BusinessPlanContainer>
  );
};

export default BusinessPlan;
