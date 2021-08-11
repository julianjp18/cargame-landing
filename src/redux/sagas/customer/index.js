import { takeLatest } from 'redux-saga/effects';
import { requestChangesAction, verifyInformationAction, viewDriverAction } from './actions/customer';
import {
  REQUEST_CHANGES,
  VERIFY_INFORMATION,
  VIEW_DRIVER_PROFILE
} from './constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(VIEW_DRIVER_PROFILE, viewDriverAction),
  takeLatest(VERIFY_INFORMATION, verifyInformationAction),
  takeLatest(REQUEST_CHANGES, requestChangesAction),
];
