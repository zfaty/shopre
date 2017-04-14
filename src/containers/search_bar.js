import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductAsync } from '../actions/index';
import { Link } from 'react-router';

class SearchBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchProductAsync(this.state.term);
    this.setState({ term: '' });
    //console.log('Submit',this.state);
    this.context.router.push('/search/'+this.state.term);
  }

  render() {
  //  console.log('this.props.products',this.props.products)
    return (
      <div className="clearfix" id="search">
        <form onSubmit={this.onFormSubmit} action="" className="navbar-form">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn search-btn-group">
            <button type="submit" className="btn btn-primary "><i className="fa fa-search"></i></button>
          </span>
        </form>
    </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProductAsync }, dispatch);
}

// function mapStateToProps({ products }) {
//   return { products };
// }

export default connect(null, mapDispatchToProps)(SearchBar);
