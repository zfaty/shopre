import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import TopBar from './topbar';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <NavBar />
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
