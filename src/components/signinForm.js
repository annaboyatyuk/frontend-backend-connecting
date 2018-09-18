import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import {signin} from '../action/user-action.js';

import {signinThunk} from '../action/user-action.js';

class SigninForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signinThunk(this.state);
  }

  componentDidMount() {
    if(cookies.load('userToken')){
      this.props.signin();
    }
  }

  render() {

    if(this.props.userReducer.login) {
      return <Redirect to='/dashboard' />;
    }
    else {
      return (
        <React.Fragment>

          <form onSubmit={this.handleSubmit}>
            <label>username</label>
            <input onChange={this.handleChange} type="text" value={this.state.username} name='username'/>

            <label>password</label>
            <input onChange={this.handleChange} type="password" value={this.state.password} name='password'/>

            <input type="submit" />
          </form>

        </React.Fragment>
      );

    }
  }
}

const mapStateToProps = ({userReducer}) => ({userReducer});

const mapDispatchToProps = {signinThunk, signin};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);