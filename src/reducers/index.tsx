/**
 * index.tsx file
 */
import { combineReducers } from 'redux';
import task from './task';

const todoApp = combineReducers({
  task
});

export default todoApp;
