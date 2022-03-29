import React from 'react';
import { useParams } from 'react-router-dom';

import type { IFilm } from '../../../swapi';

function Film(): JSX.Element {
  const { filmId } = useParams<{ filmId: string }>();

  // Add global navigation.

  // Load the film details.
  // API Endpoint: `https://swapi.dev/api/films/${filmId}/`

  // Add ability to mark the film as read. This status should be saved persistently across sessions.

  return (
    <>
      <div>
        <h1>
          {/* Display film's title. */} (Movie {filmId})
        </h1>
        <div>{/* List film details and link each character to its Person page. */}</div>
      </div>
    </>
  );
}

export default Film;
