let initialState = {login: false};

import {LOGIN} from '../action/user-action.js';

export default (state = initialState, action) => {

  let {type, payload} = action;
  // let type = action.type;
  // let payload = action.payload;

  switch(type) {
    case LOGIN: return {...state, ...payload};
    default: return state;
  }
  
};


