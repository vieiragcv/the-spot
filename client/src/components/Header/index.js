import Auth from '../../utils/auth';
import React from 'react';
import { Link } from 'react-router-dom';

/*------------------------------------------------------------
-           COMPONENT: HEADER
------------------------------------------------------------*/

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <header className="flex-row align-center container " >
      <div className="flex-row justify-space-between-sm justify-center align-center">
        
        <nav className='text-center'>
          <Link to='/'><h1>The Spot</h1></Link>
          {Auth.loggedIn() ? (
            <>
              <Link to='/inbox'>Inbox</Link>
              <Link to='/'>Home</Link>
              <a href='/' onClick={logout}>Logout</a>
            </>
          ) : (
            <>
              
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </>
          )}

        </nav>
      </div>
    </header>
  );
};

export default Header 