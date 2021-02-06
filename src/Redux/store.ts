import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer, { RootStateType } from 'Redux/Reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers)

  const persistConfig = {
    key: 'CC_Invoice_APP',
    storage,
    whitelist: ['employeeData']
  } as PersistConfig<RootStateType>;

  const persistedReducer = persistReducer<RootStateType, any>(persistConfig, reducer);

  const store = createStore(persistedReducer, composedEnhancers);
  const persistore = persistStore(store);

  return { store, persistore };
};
