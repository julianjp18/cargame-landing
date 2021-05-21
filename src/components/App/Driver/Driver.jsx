import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { uploadDriverDocsNotifier } from '../../../redux/sagas/auth/actions/driver';
import { func } from 'prop-types';
import DriverForm from './DriverForm/DriverForm';
import { useHistory } from 'react-router';

const Driver = ({ uploadDriverDocs, auth }) => {
  const history = useHistory();
  useEffect(() => {
    if (auth && auth.role) {
      if (!auth.role) history.push('/log-out');
    }
  }, [auth]);


  return auth.isVerified ? (
    <Row>
      <p>Home</p>
    </Row>
  ) : (
    <DriverForm uploadDriverDocs={uploadDriverDocs} />
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