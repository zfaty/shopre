import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import LoginModal from './login_modal';

export default class TobBar extends Component {
  constructor(props) {
    super(props);
    this.state = {modalShow: false};
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div id="top">
          <div className="container">
              <div className="col-md-offset-6 col-md-6" data-animate="fadeInDown">
                  <ul className="menu">
                      <li>
                          <a href="#" onClick={()=>this.setState({ modalShow: true })}>Login</a>
                      </li>
                      <li>
                        <Link to="/register" >Register</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <LoginModal show={this.state.modalShow} onHide={modalClose} />
      </div>
    );
  }
}
