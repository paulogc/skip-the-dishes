import React from 'react';
import PropTypes from 'prop-types';

import closeButton from '../../../assets/close-button.png';

import './style.css'

const CartRow = ({ item, onDecreseQuantity, onIncreaseQuantity, onRemoveItemFromCart }) => {
  const {
    name,
    imageSrc,
    quantity,
    productID,
    unitPrice,
    unitsInStock,
  } = item;

  return (
    <tr>
      <td>
        <img alt="" className="row-cart-image" src={imageSrc} />
      </td>
      <td>
        <div>{name}</div>
        <div className="row-items-left">Items left in stock: {unitsInStock}</div>
      </td>
      <td>Price: {unitPrice}$</td>
      <td>
        <div className="row-input-button">
          <input
            name="quantity"
            min="1"
            max={unitsInStock}
            value={quantity}
            readOnly
          />
          <div className="row-buttons">
            <button
              className="row-plus-button"
              onClick={() => onIncreaseQuantity(productID, quantity, unitsInStock)}
            >
              +
            </button>
            <button
              className="row-minus-button"
              onClick={() => onDecreseQuantity(productID, quantity)}
            >
              -
            </button>
          </div>
        </div>
      </td>
      <td>
        <img
          role="button"
          onClick={() => onRemoveItemFromCart(productID)}
          alt=""
          className="row-close-image"
          src={closeButton} />
      </td>
    </tr>
  );
};

CartRow.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    productID: PropTypes.number,
    image: PropTypes.string,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    unitsInStock: PropTypes.number,
  }),
  onDecreseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onRemoveItemFromCart: PropTypes.func.isRequired,
};

CartRow.defaultProps = {
  item: {},
};

export default CartRow;
