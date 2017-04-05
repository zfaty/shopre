import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';

export default class LoginModal extends Component {
  render() {
    return (
      <Modal  {...this.props} bsSize="small" dialogClassName="custom-modal" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Customer login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="customer-orders.html" method="post">
              <div className="form-group">
                  <input type="text" className="form-control" id="email-modal" placeholder="email" />
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" id="password-modal" placeholder="password" />
              </div>

              <p className="text-center">
                  <button className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
              </p>

          </form>

          <p className="text-center text-muted">Not registered yet?</p>
          <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>

        </Modal.Body>
      </Modal>
    );
  }
}
