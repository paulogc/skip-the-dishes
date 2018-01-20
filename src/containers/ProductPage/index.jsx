import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../actions/productActions';

const mapStateToProps = ({ products }) => products;

class ProductPage extends Component {

  static propTypes = {
    products: PropTypes.shape({
      ids: PropTypes.arrayOf(PropTypes.object),
      content: PropTypes.object,
    }),
    onFetchProducts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: { ids: [], content: {} },
  };

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <div>Product Page</div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    onFetchProducts: fetchProducts,
  },
)(ProductPage);
