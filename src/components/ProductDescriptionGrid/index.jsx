import React from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../../containers/ProductImage';

import './style.css';

const ProductDescriptionGrid = (props) => {
  const {
    image,
    description,
    name,
    productID,
  } = props;

  return (
    <div className="product-detail">
      <div className="image">
        <ProductImage
          imageURL={image}
          productID={productID}
          placeholder="Search..."
        />
      </div>
      <div className="product-information">
        <div>
          <div className="detail-text">Name: {name}</div>
          <div className="detail-text">Description: {description || 'NA'}</div>
        </div>
        <div
          className="add-buttom"
          onClick={() => props.onAddToCart(productID)}
          role="buttom"
        >
          +
        </div>
      </div>
    </div>
  );
};

ProductDescriptionGrid.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  productID: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
};

ProductDescriptionGrid.defaultProps = {
  image: '',
  description: '',
  name: '',
  productID: 0,
}

export default ProductDescriptionGrid;
