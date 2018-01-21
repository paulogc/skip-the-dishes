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
        />
      </div>
      <div className="product-information">
        <div>{name}</div>
        <div>{description || 'NA'}</div>
      </div>
    </div>
  );
};

ProductDescriptionGrid.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  productID: PropTypes.number,
};

ProductDescriptionGrid.defaultProps = {
  image: '',
  description: '',
  name: '',
  productID: 0,
}

export default ProductDescriptionGrid;
