import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducer from './authReducer';
import customerReducer from './customerReducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default (history) =>
  combineReducers({
    auth: authReducer,
    customer: customerReducer,
    form: formReducer,
    router: connectRouter(history),
  });

