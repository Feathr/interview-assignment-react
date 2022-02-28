import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Films from './Films';
import Film from './Films/Film';
import Persons from './Persons';
import Person from './Persons/Person';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact={true}>
          <Redirect
            exact={true}
            from={'/'}
            to={'/films'}
          />
        </Route>
        <Route path={'/films'}>
          <Films />
        </Route>
        <Route path={'/films/:filmId'} exact={true}>
          <Film />
        </Route>
        <Route path={'/persons'}>
          <Persons />
        </Route>
        <Route path={'/persons/:personId'} exact={true}>
          <Person />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
