import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Login } from '../pages/login/Login';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Login />
      </div>
    );
  }
}
