import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductTable from '../components/ProductTable';

import { normalizeOrder } from '../utils/normalizeOrder';
import { removeProduct } from '../actions/cart';

const calculateTotal = (products) => {
  const total = 0;
  products.forEach(product => total += product.price);
  return total;
};

const getProductsArray = (products) =>
  Object.values(content).map(product => product.product);

class Cart extends Component {
  static propTypes = {
    onRemoveProduct: PropTypes.func.isRequired,
    content: PropTypes.shape({
      id: PropTypes.number,
    }),
    ids: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    ids: [],
    content: {},
  }

  handleRemoveProduct = (id) => {
    this.props.onRemoveProduct(id);
  }
  
  handleOrderSubmit = () => {
    const { content } = this.props;
    const products = getProductsArray(content);
    let total = calculateTotal(products);

    const order = normalizeOrder(products, null, total);
  }

  render() {
    const { content } = this.props;
    const products = getProductsArray(content);
    let total = calculateTotal(products);
    
    if (!products.length) {
      return <h2>There are no products in your cart</h2>
    }

    return (
      <div>
        <ProductTable
          products={products}
          action={this.handleRemoveProduct}
          buttonLabel="Remove"
        />
        <h3>Total: {total}</h3>
      </div>
    );
  }
}

export default connect(
  ({ cartReducer }) => ({ ...cartReducer }),
  {
    onRemoveProduct: removeProduct,
  },
)(Cart);
