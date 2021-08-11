import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../utils/colors';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import RegisterVehicleList from '../Driver/RegisterVehicle/RegisterVehicleList';

const Title = styled.p`
  margin-top: 20px;
  color: ${PRIMARY_COLOR};
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const ExtraInfoContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${WHITE_COLOR};
`;

const Profile = ({ auth, isFromOtherView }) => {
  useEffect(() => {

  }, []);

  return (
    <Row>
      <Col xs={24}>
        <Row>
          <Col xs={24}>
            <Title>Mis datos personales</Title>
          </Col>
        </Row>
        <ProfileInfo data={auth} />
      </Col>
      {auth.role === 'driver' && (
        <Col xs={24}>
          <RegisterVehicleList data={{}} />
        </Col>
      )}
      {!isFromOtherView && (
        <ExtraInfoContainer />
      )}
    </Row>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
