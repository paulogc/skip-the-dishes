import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductDescriptionGrid from '../../components/ProductDescriptionGrid';

import { fetchProducts } from './actions';

import { TYPE_PRODUCT } from '../../constants/communicationType';
import { UPDATED } from '../../constants/communicationStatus';

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
    if (!this.props.products.length) {
      this.props.onFetchProducts();
    }
  }

  renderProductDescrition() {
    const { products } = this.props;
    return products.ids.map((productID) => {
      const {
        description,
        image,
        name,
      } = products.content[productID];

      return (
        <ProductDescriptionGrid
          key={productID}
          image={image}
          description={description}
          name={name}
          productID={productID}
        />
      );
    });
  }

  render() {
    return (
      <div className="porduct-page">
        <div className="product-page-header"></div>
        <div className="product-page-grid">
          {!this.props.isLoading && this.renderProductDescrition()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ products, appStatus }) => ({
    products,
    isLoading: appStatus[`${TYPE_PRODUCT}:all`] !== UPDATED,
  }),
  {
    onFetchProducts: fetchProducts,
  },
)(ProductPage);
