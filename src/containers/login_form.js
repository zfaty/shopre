import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { credentials: {username: '', password: ''} };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('this.state',this.state.credentials);
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} action="" >
          <div className="form-group">
              <input type="text" className="form-control" id="username" placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.onInputChange}
              />
          </div>
          <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
          </div>

          <p className="text-center">
              <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
          </p>

      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

// function mapStateToProps({ account }) {
//   return { account };
// }

export default connect(null, mapDispatchToProps)(LoginForm);
