import React from "react";
import { Icon } from "antd";
import Logo from "../../assets/logo-image-letter.png";
import { Link, withRouter } from "react-router-dom";

const NavBar = ({ location }) => {
  console.log(location);
  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={Logo} alt='Logo of Gig' />
      <Icon className='navbar__menu' type='menu' />
      <ul className='navbar__links'>
        <Link
          to='/'
          className={
            "navbar__link" +
            (location.pathname === "/" || location.pathname === "/home"
              ? " navbar__link--selected"
              : "")
          }
        >
          Home
        </Link>
        <Link
          to='/'
          className={
            "navbar__link" +
            (location.pathname === "/events" ? " navbar__link--selected" : "")
          }
        >
          Events
        </Link>
        <Link
          to='/'
          className={
            "navbar__link" +
            (location.pathname === "/my-events"
              ? " navbar__link--selected"
              : "")
          }
        >
          My events
        </Link>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
