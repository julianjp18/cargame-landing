import { all } from 'redux-saga/effects';
import authWatchers from './auth';
import customerWatchers from './customer';
import driverWatchers from './driver';

export default function* rootSaga() {
  yield all([
    ...authWatchers,
    ...driverWatchers,
    ...customerWatchers,
  ]);
}
