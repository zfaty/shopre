import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class SearchResult extends Component {
  renderResults() {
    return this.props.products.all.map((product) => {
      return (
        <li className="list-group-item" key={product.title}>
            <strong>{product.title}</strong>

        </li>
      );
    });
  }
  render() {
    console.log('this.props',this.props);
    console.log('this.props.products',this.props.products);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Search Result for {this.props.params.term}</h3>
        <ul className="list-group">
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(SearchResult);
