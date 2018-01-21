import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TYPE_PRODUCT from '../../constants/communicationType';
import { UPDATED } from '../../constants/communicationStatus';

import { fetchProducts } from './actions';

class ProductPage extends Component {

  static propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.shape({
      ids: PropTypes.arrayOf(PropTypes.number),
      content: PropTypes.object,
    }),
    onFetchProducts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoading: true,
    products: { ids: [], content: {} },
  };

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    console.log(this.props);
    return (
      <div>Product Page</div>
    );
  }
}

export default connect(
  ({ products, appStatus }) => ({
    products,
    isLoading: appStatus[TYPE_PRODUCT] !== UPDATED,
  }),
  {
    onFetchProducts: fetchProducts,
  },
)(ProductPage);
