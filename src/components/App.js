import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import SignupForm from './signinForm.js';
import Dashboard from './dashboard/Dashboard.js';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={SignupForm} />
            <Route path='/dashboard' component={Dashboard} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
