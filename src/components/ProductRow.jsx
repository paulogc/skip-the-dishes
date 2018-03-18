import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ProductRow = ({
  buttonLabel,
  description,
  id,
  name,
  price,
  action,
}) => (
  <tr>
    <td></td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{price}</td>
    <td>
      <Button
        onClick={() => action(id)}
      >
        {buttonLabel}
      </Button>
    </td>
  </tr>
);

ProductRow.propTypes = {
  buttonLabel: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  action: PropTypes.func.isRequired,
};

ProductRow.defaultProps = {
  buttonLabel: 'Add',
  description: '',
  name: '',
  id: null,
  price: null,
};

export default ProductRow;
