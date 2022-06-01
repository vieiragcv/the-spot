import Auth from "../../utils/auth";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SPOT from "../../pages/assets/images/vinyl.svg";

/*------------------------------------------------------------
-           COMPONENT: HEADER
------------------------------------------------------------*/

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <nav className="text-center">
          <Link to="/">
            <h1>
              The Spot{" "}
              <span className="spot__img">
                <img id="record" src={SPOT} alt="Record" />
              </span>
            </h1>
          </Link>
          {Auth.loggedIn() ? (
            <>
            <li>
              <Link to='/profile'>My Profile</Link>
              </li>
              <li>
              <Link to='/inbox'>Inbox</Link>
              </li>
              <li>
              <a href='/' onClick={logout}>Logout</a>
              </li>
              <li>
              <Link to='/myaccount'>My Account</Link>
              </li>
            </>
          ) : (
            <>
            <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

// className="flex-row align-center container "
// className="flex-row justify-space-between-sm justify-center align-center">
