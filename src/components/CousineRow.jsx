import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CousineRow = ({ address, id, name, onSelectCousine }) => (
  <tr>
    <td></td>
    <td>{name}</td>
    <td>{address}</td>
    <td>
      <Button
        onClick={() => onSelectCousine(id)}
      >
        Select
      </Button>
    </td>
  </tr>
);

CousineRow.propTypes = {
  address: PropTypes.string,
  name: PropTypes.string,
  onSelectCousine: PropTypes.func.isRequired,
};

CousineRow.defaultProps = {
  address: '',
  name: '',
};

export default CousineRow;
