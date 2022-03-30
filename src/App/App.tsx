import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Films from './Films';
import Film from './Films/Film';
import Login from './Login';
import Logout from './Logout';
import Persons from './Persons';
import Person from './Persons/Person';
import SignUp from './SignUp';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index={true} element={<Navigate to={'films'} />} />
          <Route path={'films'}>
            <Route index={true} element={<Films />}></Route>
            <Route path={':filmId'} element={<Film />}></Route>
          </Route>
          <Route path={'persons'}>
            <Route index={true} element={<Persons />}></Route>
            <Route path={':personId'} element={<Person />}></Route>
          </Route>
          <Route path={'login'} element={<Login />}></Route>
          <Route path={'logout'} element={<Logout />}></Route>
          <Route path={'signup'} element={<SignUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
