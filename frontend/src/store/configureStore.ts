import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store: any = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore);

export default wrapper;
