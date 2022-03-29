import React from 'react';
import { useParams } from 'react-router-dom';

import type { IPeople } from '../../../swapi';

function Person(): JSX.Element {
  const { personId } = useParams<{ personId: string }>();

  // Add global navigation.

  // Load the person's details.
  // API Endpoint: `https://swapi.dev/api/people/${personId}/`

  return (
    <>
      <div>
        <h1>
          {/* Display person's name. */} (Person {personId})
        </h1>
        <div>{/* List person details and link each film to its Film page. */}</div>
      </div>
    </>
  );
}

export default Person;
