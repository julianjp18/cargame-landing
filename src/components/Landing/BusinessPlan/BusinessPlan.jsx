import { Row, Col, Tabs, Table } from 'antd';
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

const dataSource = [
  {
    key: '1',
    users: '100',
    bonus: '50.000',
    referids: 'Todos los usuarios harán parte de los referidos del colaborador, es decir, también generaran el 1% del plan embajadores',
  },
  {
    key: '2',
    users: '300',
    bonus: '150.000',
    referids: '',
  },
  {
    key: '3',
    users: '500',
    bonus: '200.000',
    referids: '',
  },
  {
    key: '4',
    users: '700',
    bonus: '300.000',
    referids: '',
  },
  {
    key: '5',
    users: '1.000',
    bonus: '500.000',
    referids: '',
  },
];

const columns = [
  {
    title: 'Usuarios',
    dataIndex: 'users',
    key: 'users',
    width: 150,
  },
  {
    title: 'Bonificación',
    dataIndex: 'bonus',
    key: 'bonus',
    width: 150,
  },
  {
    title: '% referidos',
    dataIndex: 'referids',
    key: 'referids',
    width: 300,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 5;
      }
      // These two are merged into above cell
      if ([1, 2, 3, 4].includes(index)) {
        obj.props.rowSpan = 0;
      }

      return obj;
    },
  },
];

const BusinessPlan = () => {
  const paginationPosition = {
    top: 'none',
    bottom: 'none',
  };
  return (
    <BusinessPlanContainer id="business-plan">
      <Title
        title="PLAN DE NEGOCIO"
        description="Cárgame dentro de sus políticas de responsabilidad social, creó dos métodos que potencializan la generación de ingresos a usuarios y transportadores que deseen vincularse y ser parte de nuestra compañía, quienes serán «Embajadores de Cárgame», ya que serán voceros e influenciadores de la marca."
        isSecond
      />
      <Row className="business-plan-tabs-container">
        <Col xs={24} md={24}>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Plan Embajadores" key="1">
              <Row>
                <Col xs={24} md={12}>
                  <p>
                    Todo el que quiera ganar dinero extra lo puede lograr con
                    <strong> CÁRGAME</strong>, es muy fácil y real, solo debes hablarle
                    a tus conocidos sobre la plataforma y listo, mira el video para más
                    información o contacta con nosotros.
                  </p>
                </Col>
                <Col xs={24} md={12}>
                  <VideoContainer>
                    <h2>¿Qué es el plan embajadores?</h2>
                    <video style={{ maxWidth: '100%' }} controls src={firstPlanVideo} type="video/mp4" />
                  </VideoContainer>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Plan Mil" key="2">
              <Row>
                <Col xs={24} md={12}>
                  <p>
                    Adicional al plan embajadores, Cárgame ha diseñado el <b>plan 1000
                    Usuarios</b>, con el propósito de incentivar a los miembros de la
                    plataforma a ganar dinero mientras hablan con sus conocidos, el
                    cual está dirigido solo a los usuarios referidos y tienen las siguientes
                    metas y bonificaciones.
                  </p>
                </Col>
                <Col xs={24} md={12}>
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{ position: [paginationPosition.top, paginationPosition.bottom] }}
                    scroll={{ x: 568 }}
                  />
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </BusinessPlanContainer>
  );
};

export default BusinessPlan;
