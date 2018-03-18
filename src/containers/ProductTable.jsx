import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { products } from '../actions/products';
import { cousines } from '../actions/cousines';

import ProductRow from '../components/ProductRow';

class ProductTable extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    cousine: PropTypes.shape({ name: PropTypes.string }), 
    restaurantName: PropTypes.string,
  };

  static defaultProps = {
    products: [],
    cousine: {},
    restaurantName: '',
  };

  componentDidMount() {
    if (!this.props.cousine.name) {
      this.props.onLoadCousines();
    }

    if (!this.props.products.length) {
      this.props.onLoadProducts();
    }
  }

  render() {
    const { products, cousine } = this.props;
    
    return (
      <div className="propduct-table">
        <h2>{cousine.name}</h2>
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
                  description={product.description}
                  name={product.name}
                  price={product.price}
                />
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ cousinesReducer, productsReducer }, { match }) => {
  const { cousineId } = match.params;
  const cousine = cousinesReducer.cousines
    .find(cousine => `${cousine.id}` === cousineId);

  const products = productsReducer.products
    .filter(product => `${product.storeId}` === cousineId);

  return {
    products,
    cousine,
  };
};

export default connect(
  mapStateToProps,
  {
    onLoadCousines: cousines,
    onLoadProducts: products,
  }
)(ProductTable);
