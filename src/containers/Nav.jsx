import React from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';

import { logout } from '../actions/auth';

const CustomNav = ({ ids, authenticated, onLogout }) => {
  if (!authenticated) {
    return null;
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/cousines">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav key="cart-items">
        <Navbar.Brand>
        <Link to="/cart">Items in your cart: {ids.length}</Link>
        </Navbar.Brand>
      </Nav>
      <Nav pullRight>
        <Navbar.Brand>
          <Link to="/" onClick={onLogout}>Logout</Link>
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default connect(
  ({ cartReducer, authReducer }) => ({ ...cartReducer, ...authReducer }),
  { onLogout: logout },
)(CustomNav);