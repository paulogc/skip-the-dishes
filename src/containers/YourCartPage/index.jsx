import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateQuantity } from './actions';

import CartTable from '../../components/CartTable';

import './style.css';

class YourCartPage extends Component {

  static propTypes = {
    cart: PropTypes.shape({
      ids: PropTypes.arrayOf(PropTypes.number),
      content: PropTypes.object,
    }),
    products: PropTypes.shape({
      ids: PropTypes.arrayOf(PropTypes.number),
      content: PropTypes.object,
    }),
  };

  static defaultProps = {
    cart: { ids: [], content: {} },
  };

  getCartItems = () => {
    const content = {};
    const {
      ids,
      content: cartContent,
    } = this.props.cart;

    const {
      content: productsContent,
    } = this.props.products;

    ids.forEach((id) => {
      content[id] = {
        ...productsContent[id],
        ...cartContent[id],
      };
    });

    return { ids, content };
  }

  handleUpdateQuantity = (productID, quantity) => {
    console.log(productID, quantity);
  }

  render() {
    const cartItems = this.getCartItems();
    return (
      <div className="you-cart-page">
        <h1>Your Cart</h1>
        <div>
          <CartTable
            cartItems={cartItems}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ cart, products }) => ({ cart, products }),
  {
    onChangeQuantity: updateQuantity,
  },
)(YourCartPage);
