import React from "react";
import Logo from "../../assets/logo-image-letter.png";
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

const NavBar = ({ location }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={Logo} alt='Logo of Gig' />

      {!isAuthenticated && (
        <button
          className='primary-btn primary-btn--log-in'
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <ul className='navbar__links'>
          <li>
            <Link
              to='/home'
              className={
                "navbar__link" +
                (location.pathname === "/" || location.pathname === "/home"
                  ? " navbar__link--selected"
                  : "")
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/events'
              className={
                "navbar__link" +
                (location.pathname === "/events"
                  ? " navbar__link--selected"
                  : "")
              }
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to='/my-events'
              className={
                "navbar__link" +
                (location.pathname === "/my-events"
                  ? " navbar__link--selected"
                  : "")
              }
            >
              My events
            </Link>
          </li>
          <li>
            <button
              className='primary-btn primary-btn--log-out'
              onClick={() => logout()}
            >
              Log out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default withRouter(NavBar);
