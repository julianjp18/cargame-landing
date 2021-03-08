import { all } from 'redux-saga/effects';
import authWatchers from './auth';

export default function* rootSaga() {
  yield all([
    ...authWatchers,
  ]);
}
