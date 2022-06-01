/* import Auth from '../../utils/auth'; */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {

/*   const logout = event => {
    event.preventDefault();
  }; */
  
  return (
    <header>
      <div>
        <nav className='text-center'>
          <Link to='/'><h1>The Spot</h1></Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header 