import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { products } from '../actions/products';
import { cousines } from '../actions/cousines';

class Products extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onLoadProducts: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  }

  componentDidMount() {
    if (!this.props.products.length) {
      this.props.onLoadProducts();
      this.props.onLoadCousines();
    }
  }

  render() {
    return (
      <div>Propducts</div>
    );
  }
}

export default connect(
  ({
    productsReducer,
    cousinesReducer,
  }) => ({
    products: productsReducer,
    cousines: cousinesReducer,
  }),
  {
    onLoadProducts: products,
    onLoadCousines: cousines,
  }
)(Products);
