import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginForm from '../containers/login_form';

export default class LoginModal extends Component {
  render() {
    return (
      <Modal  {...this.props} bsSize="small" dialogClassName="custom-modal" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Customer login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          <p className="text-center text-muted">Not registered yet?</p>
          <p className="text-center text-muted"><a href="register.html"><strong>Register now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special discounts and much more!</p>

        </Modal.Body>
      </Modal>
    );
  }
}
