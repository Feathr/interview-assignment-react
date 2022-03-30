import React from 'react';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  // Add global navigation.

  // Implement login funcationality.

  return (
    <>
      <h1>Log In</h1>
      <div>
        <label htmlFor={'username'}>Username</label>
        <input id={'username'} placeholder={'Enter your username...'} type={'text'} value={''} />
        <label htmlFor={'password'}>Password</label>
        <input
          id={'password'}
          placeholder={'Enter your password...'}
          type={'password'}
          value={''}
        />
        <button>Log in</button>
      </div>
      <p>
        Don't have an account yet? <Link to={'/signup'}>Sign up</Link>.
      </p>
    </>
  );
}

export default Login;
