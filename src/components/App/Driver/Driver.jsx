import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import DriverForm from './DriverForm/DriverForm';
import { PRIMARY_COLOR } from '../../utils/colors';
import Profile from '../Profile';
import { uploadDriverDocsNotifier } from '../../../redux/sagas/driver/actions/driver';

const Title = styled.p`
  margin-top: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const HomeDriverContainer = styled.div`
  min-height: 100vh;
`;

const MainRow = styled.div`
  margin-top: 40px;
`;

const NotificationContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const NotificationText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: auto;
`;

const Driver = ({ uploadDriverDocs, auth }) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    if (auth && auth.role) {
      if (!auth.role) history.push('/log-out');
    }
  }, [auth]);


  return auth.isVerified ? (
    <MainRow className="ant-row">
      <Col xs={24}>
        <HomeDriverContainer>
          <Profile auth={auth} isFromOtherView />
          <Row>
            <Col xs={24}>
              <Title>Mis vehiculos registrados</Title>
            </Col>
          </Row>
        </HomeDriverContainer>
      </Col>
    </MainRow>
  ) : (
    auth.isInfoCompleted ? (
      <NotificationContainer>
        <NotificationText>
          Tus datos se encuentran en proceso de verificación. Por favor revisa la sección de notificaciones para más información.
        </NotificationText>
      </NotificationContainer>
    ) : (
      <DriverForm uploadDriverDocs={uploadDriverDocs} auth={auth} />
    )
  );
}

Driver.propTypes = {
  uploadDriverDocs: func.isRequired,
};

Driver.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  uploadDriverDocs: uploadDriverDocsNotifier,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Driver);
