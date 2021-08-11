import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeNavbarToggler = () => setIsOpen(false);

  const cart = useSelector((state) => state.cart);
  return (
    <Navbar className={`${styles.navbar} fixed-top w-100`} expand="md">
      <div className="container">
        <Link to="/" className={`navbar-brand h1 m-0 ${styles.navbarBrand}`}>
          Styletude
        </Link>
        <button onClick={toggle} className={`btn ${styles.navToggleBtn}`}>
          <BsList
            className={`border border-white rounded text-white ${styles.toggleIcon}`}
          />
        </button>
        <Collapse isOpen={isOpen} navbar className="flex-grow-0">
          <Nav navbar>
            <NavItem>
              <NavLink
                to="/"
                exact
                className={`nav-link ${styles.navLink}`}
                activeClassName={styles.activeRoute}
                onClick={closeNavbarToggler}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/cart"
                exact
                className={`nav-link ${styles.navLink}`}
                activeClassName={styles.activeRoute}
                onClick={closeNavbarToggler}
              >
                <FaShoppingCart className="pr-2" />{" "}
                <span>{cart.totalQuantity}</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
