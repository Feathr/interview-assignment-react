import React from 'react';
import { Navigate } from 'react-router';

function Logout(): JSX.Element {
  // Implement logout funcationality.

  // Then redirect to login.
  return <Navigate to={'/login'} replace={true} />;
}

export default Logout;
