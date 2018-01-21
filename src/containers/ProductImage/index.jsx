import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loading from '../../loading.gif'; 

import { fetchImage } from './actions';

import { TYPE_PROCUCT_IMAGE } from '../../constants/communicationType';
import { LOADING } from '../../constants/communicationStatus';

import './style.css';

class ProductImage extends Component {
  static proptype = {
    imageURL: PropTypes.string,
    productID: PropTypes.number,
    onFetchImage: PropTypes.func.isRequired,
    src: PropTypes.string,
  };
  
  static defaultProps = {
    imageURL: '',
    productID: 0,
    src: '',
  };

  componentDidMount() {
    const {
      src,
      onFetchImage,
      productID,
      isLoading,
      imageURL,
    } = this.props;

    if (!src && !isLoading) {
      onFetchImage({ imageURL, productID });
    }
  }

  render() {
    const {
      isLoading,
      src,
    } = this.props;

    if (isLoading) {
      return <img alt="" className="product-image" src={loading} />
    }

    return <img alt="" className="product-image" src={src} />
  }
}

export default connect(
  ({ products, appStatus }, { productID }) => ({
    src: products.content[productID] ? products.content[productID].imageSrc : '',
    isLoading: appStatus[`${TYPE_PROCUCT_IMAGE}:${productID}`] &&
      appStatus[`${TYPE_PROCUCT_IMAGE}:${productID}`] === LOADING,
  }),
  {
    onFetchImage: fetchImage,
  },
)(ProductImage);
