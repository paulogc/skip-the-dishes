import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import CousineRow from './CousineRow';

const CousineTable = ({ cousines, onSelectCousine }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Restaurant</th>
        <th>Address</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        cousines.map(cousine =>
          <CousineRow
            key={`cousine-row-${cousine.id}`}
            name={cousine.name}
            address={cousine.address}
            id={cousine.id}
            onSelectCousine={onSelectCousine}
          />
        )
      }
    </tbody>
  </Table>
);

CousineTable.propTypes = {
  cousines: PropTypes.arrayOf(PropTypes.object),
  onSelectCousine: PropTypes.func.isRequired,
};

CousineTable.defaultProps = {
  cousines: [],
}

export default CousineTable;
