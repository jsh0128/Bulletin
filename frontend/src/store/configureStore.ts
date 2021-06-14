import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import createSagaMiddleware, { END } from "redux-saga";

import rootReducer, { IState } from "./reducers";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store: any = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore);

export default wrapper;

// const makeStore = (initialState) => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [sagaMiddleware];
//   const enhancer = composeWithDevTools(applyMiddleware(...middleware));
//   // Make exception for redux dev tools
//   /* eslint-disable no-underscore-dangle */
//   /* eslint-disable no-undef */
//   /* eslint-enable */
//   const store = createStore(rootReducer, initialState, enhancer) as Test;

//   store.runSaga = () => {
//     // Avoid running twice
//     if (store.saga) return;
//     store.saga = sagaMiddleware.run(rootSaga);
//   };

//   store.stopSaga = async () => {
//     // Avoid running twice
//     if (!store.saga) return;
//     store.dispatch(END);
//     await store.saga.done;
//     store.saga = null;
//   };

//   store.execSagaTasks = async (isServer, tasks) => {
//     // run saga
//     store.runSaga();
//     // dispatch saga tasks
//     tasks(store.dispatch);
//     // Stop running and wait for the tasks to be done
//     await store.stopSaga();
//     // Re-run on client side
//     if (!isServer) {
//       store.runSaga();
//     }
//   };

//   // Initial run
//   store.runSaga();

//   return store;
// };

// const wrapper = createWrapper(makeStore);

// export default wrapper;
