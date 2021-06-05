import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Tabs } from 'antd';
import { firestoreDB } from '../../utils/firebase';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../utils/colors';
import ActiveDriversList from './DriversList/ActiveDriversList';
import DeactiveDriversList from './DriversList/DeactiveDriversList';

const Title = styled.p`
  margin-top: 30px;
  margin-bottom: 0;
  padding-left: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const CustomerContainer = styled.div`
  min-height: 94vh;
  padding: 0 20px;
`;

const { TabPane } = Tabs;

const Customer = ({ auth }) => {
  const [activeDriversList, setactiveDriversList] = useState([]);
  const [deactiveDriversList, setdeactiveDriversList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (auth && auth.role) {
      if (!auth.role) history.push('/log-out');
    }
  }, [auth, history]);

  useEffect(() => {
    showActiveDrivers();
    showDeactiveDrivers();
  }, []);

  const showActiveDrivers = () => {
    const data = firestoreDB.collection("Drivers").where("isVerified", "==", true);

    data.onSnapshot((drivers) => {
      setactiveDriversList([]);
      const newDriversList = [];

      drivers.forEach((driver) => {

        if (driver.data().name && driver.data().numberId) {
          newDriversList.push({
            ...driver.data(),
            key: driver.id,
          });
        }

      });

      if (newDriversList.length > 0) setactiveDriversList(newDriversList);
    });
  };

  const showDeactiveDrivers = () => {
    const data = firestoreDB.collection("Drivers").where("isVerified", "==", false);

    data.onSnapshot((drivers) => {
      setdeactiveDriversList([]);
      const newDriversList = [];

      drivers.forEach((driver) => {

        if (driver.data().name && driver.data().numberId) {
          newDriversList.push({
            ...driver.data(),
            key: driver.id,
          });
        }

      });

      if (newDriversList.length > 0) setdeactiveDriversList(newDriversList);
    });
  };

  return (
    <Row>
      <Title>Hola Customer,</Title>
      <Col xs={24}>
        <CustomerContainer>
          <Tabs className="tabs-container" defaultActiveKey="1">
            <TabPane tab="Activos" key="1">
              <ActiveDriversList drivers={activeDriversList} />
            </TabPane>
            <TabPane tab="No activos" key="2">
              <DeactiveDriversList drivers={deactiveDriversList} />
            </TabPane>
          </Tabs>
        </CustomerContainer>
      </Col>
    </Row>
  );
}

Customer.propTypes = {};

Customer.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Customer);