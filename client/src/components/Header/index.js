<<<<<<< HEAD
import Auth from '../../utils/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
=======
import Auth from "../../utils/auth";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SPOT from "../../pages/assets/images/vinyl.svg";
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8

/*------------------------------------------------------------
-           COMPONENT: HEADER
------------------------------------------------------------*/

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
<<<<<<< HEAD
    <header className="flex-row align-center container " >
      <div className="flex-row justify-space-between-sm justify-center align-center">
        
        <nav className='text-center'>
          <Link to='/'><h1>The Spot</h1></Link>
          {Auth.loggedIn() ? (
            <>
              <Link to='/profile'>My Profile</Link>
              <Link to='/inbox'>Inbox</Link>
              <a href='/' onClick={logout}>Logout</a>
              <Link to='/myaccount'>My Account</Link>
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
=======
    <header>
      <div>
        <div className="container">
          <Link to="/">
            <div className="text-center">
              <span className="text-center">
                <img id="record" src={SPOT} alt="Record" />
              </span>
            </div>
            <h1 className="text-center">
              The Spot{" "}
            </h1>
            </Link>
        </div>
        <nav className="text-center">
          
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
>>>>>>> 64ac7a7b32957713a4a80363fe4eb1ee86e6a8b8
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
