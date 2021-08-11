import { takeLatest } from 'redux-saga/effects';
import {
  UPLOAD_DOCS_FOR_CHANGE,
  UPLOAD_DRIVER_DOCS,
} from './constants';
import { uploadDocsForChangeAction, uploadDriverDocsAction } from './actions/driver';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(UPLOAD_DRIVER_DOCS, uploadDriverDocsAction),
  takeLatest(UPLOAD_DOCS_FOR_CHANGE, uploadDocsForChangeAction),
];
