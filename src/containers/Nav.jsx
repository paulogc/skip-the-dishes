import React from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const CustomNav = ({ ids }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/cousines">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav key="cart-lin">
      <Navbar.Brand>
        <Link to="/cart">Your Cart</Link>
      </Navbar.Brand>
    </Nav>
    <Nav key="cart-items">
      <Navbar.Brand>
        Items in your cart: {ids.length}
      </Navbar.Brand>
    </Nav>
    <Nav pullRight>
      <Navbar.Brand>
        <Link to="/">Logout</Link>
      </Navbar.Brand>
    </Nav>
  </Navbar>
);

export default connect(({ cartReducer }) => ({ ...cartReducer }))(CustomNav);