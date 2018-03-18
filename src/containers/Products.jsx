import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { products } from '../actions/products';
import { cousines } from '../actions/cousines';
import { addProduct } from '../actions/cart';

import ProductTable from '../components/ProductTable';

class Products extends Component {
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

  handleAddProduct = (id) => {
    const product = this.props.products.find(product => product.id === id);
    this.props.onAddProduct({ id, quantity: 1, product });
  }

  render() {
    const { products, cousine } = this.props;
    
    return (
      <div className="propduct-table">
        <h2>{cousine.name}</h2>
        <ProductTable
          products={products}
          action={this.handleAddProduct}
        />
        <Link to="/cart">
          <h3>Go to cart</h3>
        </Link>
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
    onAddProduct: addProduct,
  }
)(Products);
