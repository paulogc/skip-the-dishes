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

ProductRow.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  onAddItem: PropTypes.func.isRequired,
};

ProductRow.defaultProps = {
  description: '',
  name: '',
  id: null,
  price: null,
};

export default ProductRow;
