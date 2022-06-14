import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducer";
import sagas from "./sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
