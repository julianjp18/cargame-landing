import React from 'react';
import '../../App.scss';
import 'antd/dist/antd.css';
import { useLocation } from 'react-router-dom';
import SignUp from './Auth/SignUp/SignUp';
import LogIn from './Auth/LogIn/LogIn';


const HomeApp = () => {
  const { state } = useLocation();
  console.log(state);
  return state.component === 'sign-up' ? (
    <SignUp />
  ) : (
      <LogIn />
    );
}

export default HomeApp;