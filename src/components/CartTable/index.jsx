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

CartTable.propType = {
  cartItems: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.number),
    content: PropTypes.object,
  }),
}

export default CartTable;
