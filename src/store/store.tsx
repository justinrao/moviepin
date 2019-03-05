

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, PersistConfig, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  throttle: 1000,
  blacklist: ['movieSearch']
}

// Redux-Persist for state persist and rehydration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux-Saga for side-effect
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
