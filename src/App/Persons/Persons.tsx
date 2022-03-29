import React from 'react';

import type { IPeople } from '../../swapi';

function Persons(): JSX.Element {
  // Add global navigation.

  // Load a list of persons.
  // API Endpoint: `https://swapi.dev/api/people/`

  // Allow filtering persons by name
  // API Endpoint: `https://swapi.dev/api/people/?search=${searchString}`

  return (
    <>
      <h1>Characters</h1>
      <div>
        <input id={'search'} placeholder={'Find a person...'} type={'search'} value={''} />
        <button>Search</button>
      </div>
      <ul>
        <li>{/* Summary of person with link to Person page. */}</li>
      </ul>
    </>
  );
}

export default Persons;
