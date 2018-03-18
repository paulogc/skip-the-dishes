import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ProductRow from './ProductRow';

const ProductTable = ({ products, action, buttonLabel }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Plate</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product =>
          <ProductRow
            key={`product-row-${product.id}`}
            id={product.id}
            description={product.description}
            name={product.name}
            price={product.price}
            action={action}
            buttonLabel={buttonLabel}
          />
        )
      }
    </tbody>

  </Table>
);

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func.isRequired,
};

ProductTable.defaultProps = {
  products: [],
}

export default ProductTable;

