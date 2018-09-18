let initialState = [];

import {FETCH_ALL} from '../action/coffee-action.js';

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    case FETCH_ALL: return [...state, ...payload];
    default: return state;
  }

};