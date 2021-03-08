import { takeLatest } from 'redux-saga/effects';
import {
  LOG_IN,
  VERIFY_TOKEN,
  SIGN_UP,
  //RESTORE_PASSWORD,
} from './constants';
import { logInAction } from './actions/logIn';
import { verifyTokenAction } from './actions/verifyToken';
import { signUpAction } from './actions/signUp';
//import { restorePasswordAction } from './actions/restorePassword';

export default [
  takeLatest(LOG_IN, logInAction),
  takeLatest(SIGN_UP, signUpAction),
  takeLatest(VERIFY_TOKEN, verifyTokenAction),
  //takeLatest(RESTORE_PASSWORD, restorePasswordAction),
];
