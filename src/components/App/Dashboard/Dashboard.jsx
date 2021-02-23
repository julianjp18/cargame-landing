import { Col, Row, Tabs } from 'antd';
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin: 20px 40px;
`;

const TitleContent = styled.h1`

`;

const SubTitleContent = styled.h2`

`;

const ShowInfoContent = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 10px;
  min-height: 120px;
`;

const PShowInfo = styled.p`

`;

const PValue = styled.p`

`;

const PRegistersTitle = styled.p`

`;

const PRegistersValue = styled.p`

`;

const { TabPane } = Tabs;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TitleContent>Hola Admin,</TitleContent>
      <SubTitleContent>Dashboard</SubTitleContent>
      <Row>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>Transacciones realizadas</PShowInfo>
            <PValue></PValue>
          </ShowInfoContent>
        </Col>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>13% transportadores</PShowInfo>
            <PValue></PValue>
          </ShowInfoContent>
        </Col>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>13% usuarios</PShowInfo>
            <PValue></PValue>
          </ShowInfoContent>
        </Col>
        <Col xs={6}>
          <ShowInfoContent>
            <PShowInfo>Registrados</PShowInfo>
            <Row>
              <Col xs={24} md={12}>
                <PRegistersTitle>Transportadores</PRegistersTitle>
                <PRegistersValue></PRegistersValue>
              </Col>
              <Col xs={24} md={12}>
                <PRegistersTitle>Usuarios</PRegistersTitle>
                <PRegistersValue></PRegistersValue>
              </Col>
            </Row>
          </ShowInfoContent>
        </Col>
        <Col xs={24}>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Usuarios" key="1">

            </TabPane>
            <TabPane tab="Transportadores" key="2">

            </TabPane>
            <TabPane tab="Referidos" key="3">

            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;