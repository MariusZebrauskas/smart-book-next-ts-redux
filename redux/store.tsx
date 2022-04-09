import { combineReducers, createStore } from 'redux';
import { menuReducer } from './menuRedux';
import { pageReducer } from './pageReducer';
import { submenuReducer } from './submenuReducer';
import { userReducer } from './userReducer';

// combine reducers

const reducers = combineReducers({
  user: userReducer,
  menu: menuReducer,
  submenu: submenuReducer,
  page: pageReducer,
});

// store

export const store = createStore(reducers);
