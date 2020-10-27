import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
          <div>
            {directors.map((director) => {<p>{director.name}</p>
            {director.movies.map((movie) => <li>{movie}</li>)}})
          </div>
    </div>
  );

export default Directors
