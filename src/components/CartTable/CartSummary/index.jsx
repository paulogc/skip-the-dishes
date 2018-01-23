import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CartSummary = ({ total }) => <h1 className="cart-summary-text">Total Price: {total}$</h1>;

CartSummary.propTypes = {
  total: PropTypes.number,
};

CartSummary.defaultProps = {
  total: 0,
};

export default CartSummary;
