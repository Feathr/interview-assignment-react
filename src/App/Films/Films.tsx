import React from 'react';

import type { IFilm } from '../../swapi';

function Films(): JSX.Element {
  // Add global navigation.

  // Load a list of films.
  // API Endpoint: `https://swapi.dev/api/films/`

  // Allow filtering film by title
  // API Endpoint: `https://swapi.dev/api/films/?search=${searchString}`

  return (
    <>
      <h1>Movies</h1>
      <div>
        <input id={'search'} placeholder={'Find a movie...'} type={'search'} value={''} /><button>Search</button>
      </div>
      <ul>
        <li>{/* Summary of film with link to Film page. */}</li>
      </ul>
    </>
  );
}

export default Films;
