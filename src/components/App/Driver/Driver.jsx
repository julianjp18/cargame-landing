import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { uploadDriverDocsNotifier } from '../../../redux/sagas/driver/actions/driver';
import { func } from 'prop-types';
import DriverForm from './DriverForm/DriverForm';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../utils/colors';
import Profile from '../Profile';

const Title = styled.p`
  margin-top: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
`;

const HomeDriverContainer = styled.div`
  min-height: 94vh;
`;

const Driver = ({ uploadDriverDocs, auth }) => {
  const history = useHistory();
  useEffect(() => {
    if (auth && auth.role) {
      if (!auth.role) history.push('/log-out');
    }
  }, [auth]);


  return auth.isVerified ? (
    <Row>
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
    </Row>
  ) : (
    <DriverForm uploadDriverDocs={uploadDriverDocs} auth={auth} />
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