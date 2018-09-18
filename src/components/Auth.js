import React, { Component } from 'react';
import cookies from 'react-cookies';



export default class Auth extends Component {

  


  render() {

    let JWT = cookies.load('userToken');
    let userInfo = atob(JWT.split('.')[1]);
    let parsedInfo = JSON.parse(userInfo);

    let hasCapability = parsedInfo.capabilities.includes(this.props.capability) ? true : false;

    return (
      hasCapability ? this.props.children : null
    );
  }
} 