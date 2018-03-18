import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cousines } from '../actions/cousines';

import loadingGif from '../assets/loading_spinner.gif';

import CousineTable from '../components/CousineTable';

class Cousines extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onLoadCousines: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  }

  componentDidMount() {
    if (!this.props.cousines.length) {
      this.props.onLoadCousines();
    }
  }

  handleSelectCousine = (cousineId) => {
    this.props.history.push(`cousine/${cousineId}/products`);
  }

  render() {
    const { cousines, loading } = this.props.cousines;

    if (loading) {
      return (
        <img alt="" src={loadingGif} />
      );
    }

    return (
      <CousineTable
        onSelectCousine={this.handleSelectCousine}
        cousines={cousines}
      />
    );
  }
}

export default connect(
  ({
    cousinesReducer,
  }) => ({
    cousines: cousinesReducer,
  }),
  {
    onLoadCousines: cousines,
  }
)(Cousines);
