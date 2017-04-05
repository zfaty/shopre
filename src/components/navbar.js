import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import SearchBar from '../containers/search_bar';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-default yamm" role="navigation" id="navbar">
          <div className="container">
              <div className="navbar-header">
                  <Link to="/" >
                      <img src="/assets/img/logo.png" alt="Obaju logo" className="hidden-xs" />
                      <img src="/assets/img/logo-small.png" alt="Obaju logo" className="visible-xs" />
                      <span className="sr-only">Obaju - go to homepage</span>
                  </Link>
                  <div className="navbar-buttons">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                          <span className="sr-only">Toggle navigation</span>
                          <i className="fa fa-align-justify"></i>
                      </button>
                      <Link to="/search/test" className="btn btn-default navbar-toggle">
                          <i className="fa fa-shopping-cart"></i>  <span className="hidden-xs">3 items in cart</span>
                      </Link>
                  </div>
              </div>
              <div className="navbar-collapse collapse" id="navigation">
                  <ul className="nav navbar-nav navbar-left">
                      <li className="active">
                          <Link to="/" >Home</Link>
                      </li>
                      <li className="dropdown yamm-fw">
                          <Link to="/" >Categorie 1</Link>
                      </li>
                  </ul>
              </div>
              <div className="navbar-buttons">
                  <div className="navbar-collapse collapse right" id="basket-overview">
                      <Link to="/search/test" className="btn btn-primary navbar-btn">
                        <i className="fa fa-shopping-cart"></i><span className="hidden-sm">3 items in cart</span>
                      </Link>
                  </div>
              </div>
              <SearchBar />
          </div>
      </div>
    );
  }
}
