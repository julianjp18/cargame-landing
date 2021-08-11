import { takeLatest } from 'redux-saga/effects';
import {
  LOG_IN,
  VERIFY_TOKEN,
  SIGN_UP,
  LOG_OUT,
  FORGOT_PASSWORD,
  RESTORE_PASSWORD,
} from './constants';
import { logInAction, logOutAction } from './actions/logIn';
import { verifyTokenAction } from './actions/verifyToken';
import { signUpAction } from './actions/signUp';
import { forgotPasswordAction } from './actions/ForgotPassword';
import { restorePasswordAction } from './actions/RestorePassword';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(LOG_IN, logInAction),
  takeLatest(SIGN_UP, signUpAction),
  takeLatest(VERIFY_TOKEN, verifyTokenAction),
  takeLatest(LOG_OUT, logOutAction),
  takeLatest(FORGOT_PASSWORD, forgotPasswordAction),
  takeLatest(RESTORE_PASSWORD, restorePasswordAction),
];
