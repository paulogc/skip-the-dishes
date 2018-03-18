import React from 'react';
import { Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, NavItem, MenuItem } from 'react-bootstrap';

const Nav = (props) =>  {
  const cartItemsQuantity = 3;

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>  
      </Nav>
    </Navbar>
  );
};

export default Nav;