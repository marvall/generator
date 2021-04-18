import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import constructorReducer from './constructor/constructor-reducer';
import userReducer from './user/user-reducer';

const authPersistConfig = {
  key: 'user', //'token'
  version: 1,
  storage,
  //TODO раскомментить когда будет бекэнд с авторизацией
  //   whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    constructor: constructorReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //TODO раскомментить перед продакшином
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
