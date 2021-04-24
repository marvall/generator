import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import constructorActions from './constructor-actions';

//TODO Болванки на constructor
const keyses = (state = [], action) => state; //просто для примера
const tests = (state = [], action) => state; //просто для примера

export default combineReducers({
  keyses,
  tests,
});
