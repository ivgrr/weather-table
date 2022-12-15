import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducer';
import axios from 'axios';
import thunk from 'redux-thunk';

import * as api from '../client';

const rootReducer = combineReducers(reducers);

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      axios,
      api,
    }),
  ),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
