import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import reducers from '../redux/reducers';
import sagas from '../redux/sagas';
import history from '../routing/history';

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers(history),
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(sagas);
  return store;
};
