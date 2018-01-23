import React from 'react';
import PropTypes from 'prop-types';

import CartRow from './CartRow';

import './style.css';

const CartTable = (props) => {
  const { ids, content } = props.cartItems;

  const items = ids.map((id) => {
    const item = content[id];
    return (
      <CartRow
        key={id}
        item={item}
        onDecreseQuantity={props.onDecreseQuantity}
        onIncreaseQuantity={props.onIncreaseQuantity}
        onRemoveItemFromCart={props.onRemoveItemFromCart}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Price</th> 
          <th>Q-ty</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
};

CartTable.propTypes = {
  cartItems: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.number),
    content: PropTypes.object,
  }),
  onDecreseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onRemoveItemFromCart: PropTypes.func.isRequired,
}

CartTable.defaultProps = {
  cartItems: { ids: [], content: {} },
}

export default CartTable;
