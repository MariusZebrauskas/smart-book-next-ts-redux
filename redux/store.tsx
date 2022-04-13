import { combineReducers, createStore } from 'redux';
import { menuReducer } from './menuRedux';
import { pageReducer } from './pageReducer';
import { submenuReducer } from './submenuReducer';
import { todosReducer } from './todoReducer';
import { userReducer } from './userReducer';

// combine reducers

const reducers = combineReducers({
  user: userReducer,
  menu: menuReducer,
  submenu: submenuReducer,
  page: pageReducer,
  todo: todosReducer
});

// store

export const store = createStore(reducers);
