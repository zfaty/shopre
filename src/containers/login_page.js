import React, { Component, PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import LoginForm from '../containers/login_form';

const form_fields = {
  username: {
    validate:{message:'Enter a username..'},
    type : 'text',
    label : 'Username'
  },
  password: {
    validate:{message:'Enter a password...'},
    type : 'password',
    label : 'Password'
  }
};

class LoginPage extends Component {

  render() {
    const { fields, handleSubmit } = this.props;
    return (
      <div className="col-md-offset-3 col-md-6">
          <div className="box">
              <h1>Login</h1>
              <hr/>

              <LoginForm />
          </div>
      </div>
    );
  }
}



export default LoginPage;
