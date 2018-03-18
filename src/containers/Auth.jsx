import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Label, FormGroup, FormControl  } from 'react-bootstrap';

import loadingGif from '../assets/loading_spinner.gif';
import { auth } from '../actions/auth';
import './Auth.css';

class Auth extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onAuthenticate: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.loading && !nextProps.loading && !nextProps.error) {
      this.props.history.push('/products');
    }
  }

  handleAuthenticate = (event) => {
    const {
      email,
      password,
    } = this.state;
    
    this.props.onAuthenticate({ email, password });
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    const { error, loading } = this.props;

    return (
      <div className="authentication-container" >
        <form
          className="authentication-container-form"
          onSubmit={this.handleAuthenticate}
        >
          <FormGroup>
            <FormControl
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            type="submit"
            disabled={!email || !password || loading}
          >
            Entrar
          </Button>
        </form>
        {error &&
          <h1>
            <Label bsStyle="danger">Invalid password or email</Label>
          </h1>
        }
        {loading &&
          <img src={loadingGif} />
        }
      </div>
    );
  }
}

export default connect(
  ({ authReducer }) => ({ ...authReducer }),
  {
    onAuthenticate: auth,
  },
)(Auth);
