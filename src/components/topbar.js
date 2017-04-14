import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';

import LoginModal from './login_modal';

class TobBar extends Component {
  constructor(props) {
    super(props);
    this.state = {modalShow: false};
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    console.log('this.props',this.props);
    this.setState({ modalShow: false });
    this.props.actions.logOutUser();

  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    if (this.props.logged_in) {
      return (
        <div id="top">
            <div className="container">
                <div className="col-md-offset-6 col-md-6" data-animate="fadeInDown">
                    <ul className="menu">
                        <li>
                            <Link to="/logout" onClick={this.logOut} >LogOut</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      );
    }else{
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
}

// TobBar.propTypes = {
//   actions: PropTypes.object.isRequired
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

export default connect(mapStateToProps,mapDispatchToProps)(TobBar);
