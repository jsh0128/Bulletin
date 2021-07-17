// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";

import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

export const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store: any = createStore(rootReducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });

// export const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [sagaMiddleware];
//   const enhancer = composeWithDevTools(applyMiddleware(...middleware));
//   const store: any = createStore(rootReducer, enhancer);
//   store.sagaTask = sagaMiddleware.run(rootSaga);
//   return store;
// };

// const wrapper = createWrapper(configureStore);

export default wrapper;
