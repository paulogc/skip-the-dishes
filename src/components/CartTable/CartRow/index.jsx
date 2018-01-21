import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

const CartRow = ({ item, onChangeQuantity }) => {
  const {
    name,
    imageSrc,
    quantity,
    unitPrice,
    unitsInStock,
  } = item;

  const itemsLeft = unitsInStock - quantity;
  return (
    <tr>
      <td>
        <img alt="" className="cart-image" src={imageSrc} />
      </td>
      <td>
        <div>{name}</div>
        <div className="items-left">Items left in stock: {itemsLeft}</div>
      </td>
      <td>Price: {unitPrice}$</td>
      <td>{quantity}</td>
      <td>
        <input
          type="number"
          name="quantity"
          min="1"
          max={unitsInStock}
          value={quantity}
          onChange={onChangeQuantity}
        />
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
  onChangeQuantity: PropTypes.func.isRequired,
};

CartRow.defaultProps = {
  item: {},
};

export default CartRow;
