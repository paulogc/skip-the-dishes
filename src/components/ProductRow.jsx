import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ProductRow = ({
  description,
  id,
  name,
  price,
  onAddItem,
}) => (
  <tr>
    <td></td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{price}</td>
    <td>
      <Button
        onClick={() => onAddItem(id)}
      >
        Add
      </Button>
    </td>
  </tr>
);

export default ProductRow;
