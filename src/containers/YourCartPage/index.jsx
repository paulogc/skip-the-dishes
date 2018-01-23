import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateQuantity, removeFromCart } from './actions';

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
    onChangeQuantity: PropTypes.func.isRequired,
    onRemoveItemFromCart: PropTypes.func.isRequired,
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

  handleRemoveItemFromCart = (productID) => {
    this.props.onRemoveItemFromCart(productID)
  }

  handleIncreaseQuantity = (productID, quantity, unitsInStock) => {
    if (quantity < unitsInStock) {
      const newQuantity = quantity + 1;
      this.props.onChangeQuantity({ productID, quantity: newQuantity });
    }
  }

  handleDecreaseQuantity = (productID, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      this.props.onChangeQuantity({ productID, quantity: newQuantity });
    }
  }

  render() {
    const cartItems = this.getCartItems();
    return (
      <div className="you-cart-page">
        <h1>Your Cart</h1>
        {cartItems.ids.length ? 
          <CartTable
            cartItems={cartItems}
            onDecreseQuantity={this.handleDecreaseQuantity}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onRemoveItemFromCart={this.handleRemoveItemFromCart}
          />
          :
          <h2>There is no products in your cart</h2>
        }
      </div>
    );
  }
}

export default connect(
  ({ cart, products }) => ({ cart, products }),
  {
    onChangeQuantity: updateQuantity,
    onRemoveItemFromCart: removeFromCart,
  },
)(YourCartPage);
