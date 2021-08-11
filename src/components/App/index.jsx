import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../App.scss';
import 'antd/dist/antd.css';
import { useHistory, useLocation } from 'react-router-dom';
import SignUp from './Auth/SignUp/SignUp';
import LogIn from './Auth/LogIn/LogIn';
import { func } from 'prop-types';
import { signUpNotifier } from '../../redux/sagas/auth/actions/signUp';
import { logInNotifier } from '../../redux/sagas/auth/actions/logIn';
import { Col } from 'antd';
import styled from 'styled-components';

const MainRow = styled.div`
  margin-top: 60px;
`;

const AppContainer = ({ signUp, logIn, auth }) => {
  const [location, setlocation] = useState('');
  const history = useHistory();

  const redirect = (path) => {
    if (path) history.push({ pathname: `/${path}`, state: { component: path } });
  };
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
    if (state && state.component !== undefined) setlocation(state.component);
  }, []);


  return (
    <MainRow className="ant-row">
      <Col xs={24} md={12}>
        <LogIn logIn={logIn} auth={auth} />
      </Col>
      <Col xs={24} md={12}>
        <SignUp signUp={signUp} auth={auth} />
      </Col>
    </MainRow>
  );
}

AppContainer.propTypes = {
  signUp: func.isRequired,
  logIn: func.isRequired,
};

AppContainer.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  signUp: signUpNotifier,
  logIn: logInNotifier,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

