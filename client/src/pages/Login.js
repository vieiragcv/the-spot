import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';


/*------------------------------------------------------------
-        PAGES: LOGIN
------------------------------------------------------------*/

const Login = () => {

  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error}] = useMutation(LOGIN_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log(data);
    }
    catch (e) {
      console.error(e);
    }
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex-row justify-center'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Welcome Back to The Spot</h4>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <input
                className='form-input'
                placeholder='Type in your email..'
                name='email'
                id='email'
                type='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Type in your password..'
                id='password'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn w-100'>Log In</button>
            </form>
            {error && <div className='w-100'>Wrong Email or Password...</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;