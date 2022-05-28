/* import Auth from '../../utils/auth'; */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

/*   const logout = event => {
    event.preventDefault();
  }; */
  
  return (
    <header className="flex-row align-center container " >
      <div className="flex-row justify-space-between-sm justify-center align-center">
        <Link to='/' className="col-sm-1"><h1>The Spot</h1></Link>
        <nav className='text-center'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header 