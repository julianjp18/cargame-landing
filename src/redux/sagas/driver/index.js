import { takeLatest } from 'redux-saga/effects';
import {
  UPLOAD_DRIVER_DOCS,
} from './constants';
import { uploadDriverDocsAction } from './actions/driver';

export default [
  takeLatest(UPLOAD_DRIVER_DOCS, uploadDriverDocsAction),
];
