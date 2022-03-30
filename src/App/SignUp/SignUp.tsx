import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(): JSX.Element {
  // Add global navigation.

  // Implement sign up funcationality.

  return (
    <>
      <h1>Sign Up</h1>
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
        <label htmlFor={'confirmpassword'}>Confirm password</label>
        <input
          id={'confirmpassword'}
          placeholder={'Enter your password again...'}
          type={'password'}
          value={''}
        />
        <button>Sign up</button>
      </div>
      <p>
        Already registered? <Link to={'/login'}>Log in</Link>.
      </p>
    </>
  );
}

export default SignUp;
