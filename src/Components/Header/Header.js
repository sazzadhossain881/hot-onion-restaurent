import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/homepage/logo2.png';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Banner from '../Banner/Banner';

const mapSateToProps = state => {
  return {
    token: state.token
  }
}

const Header = (props) => {
  const { totalQuantities } = useSelector(state => state.cartReducers);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let links = null;
  if (props.token === null) {
    links = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink exact to="/login" className="NavLink" style={{ fontSize: "18px", color: "red", textDecoration: "none", marginRight: "5px" }} >Login</NavLink>
        </NavItem>
      </Nav>
    )
  } else {
    links = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink exact to="/cart" className=" NavLink box">
            <FontAwesomeIcon style={{ fontSize: "30px", color: "red" }} icon={faShoppingCart}></FontAwesomeIcon>
            <span >{totalQuantities}</span>
          </NavLink>
        </NavItem>
      </Nav>)
  }




  return (
    <div>
      <Navbar className="sticky-md-top" color="light" light expand="md">
        <Link to="/"><img src={logo} className="img-fluid w-25" alt="" /></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {links}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect(mapSateToProps)(Header);