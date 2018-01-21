import React from 'react';
import PropTypes from 'prop-types';

import ProductImage from '../../containers/ProductImage';

const ProductDescriptionGrid = (props) => {
  const {
    image,
    description,
    name,
    productID,
  } = props;

  return (
    <div>
      <ProductImage
        imageURL={image}
        productID={productID}
      />
      <div>{name}</div>
      <div>{description || 'NA'}</div>
      <div>{productID}</div>
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
