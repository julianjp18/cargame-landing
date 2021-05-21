import React, { useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useHistory } from 'react-router';
import { deleteDataToStorage } from '../../../../redux/helpers/localStorage';
import { connect } from 'react-redux';
import { logOutNotifier } from '../../../../redux/sagas/auth/actions/logIn';
import { func } from 'prop-types';

const LogOut = ({ logOut, auth }) => {
  const history = useHistory();

  useEffect(() => {
    if (auth && auth.role) {
      deleteDataToStorage();
      logOut();
      history.push('/landing-page');
    }
  }, [auth]);

  return (
    <Row className="log-in-container">
      <Col xs={24}>
        <Skeleton active />
      </Col>
    </Row>
  );
};

LogOut.propTypes = {
  logOut: func.isRequired,
};

LogOut.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logOut: logOutNotifier,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogOut);

