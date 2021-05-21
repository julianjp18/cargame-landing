import { takeLatest } from 'redux-saga/effects';
import {
  LOG_IN,
  VERIFY_TOKEN,
  SIGN_UP,
  LOG_OUT,
  UPLOAD_DRIVER_DOCS,
  //RESTORE_PASSWORD,
} from './constants';
import { logInAction, logOutAction } from './actions/logIn';
import { verifyTokenAction } from './actions/verifyToken';
import { signUpAction } from './actions/signUp';
import { uploadDriverDocsAction } from './actions/driver';
//import { restorePasswordAction } from './actions/restorePassword';

export default [
  takeLatest(LOG_IN, logInAction),
  takeLatest(SIGN_UP, signUpAction),
  takeLatest(VERIFY_TOKEN, verifyTokenAction),
  takeLatest(LOG_OUT, logOutAction),
  takeLatest(UPLOAD_DRIVER_DOCS, uploadDriverDocsAction),
  //takeLatest(RESTORE_PASSWORD, restorePasswordAction),
];
