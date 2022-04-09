import { combineReducers, createStore } from 'redux';
import { userReducer } from './userReducer';

// combine reducers

const reducers = combineReducers({
  user: userReducer,
});

// store

export const store = createStore(reducers);
