import Auth from '../../utils/auth';
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

  const logout = event => {
    event.preventDefault();
  };
  
  return (
    <header className="" >
      <div className="">
        <Link to='/'>
          <h1>The Spot</h1>
        </Link>
        <nav className=''>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header 