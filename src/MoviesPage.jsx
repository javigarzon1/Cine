import React from 'react';
import MediaList from '../layout/MediaList';
import { getMovies } from '../../services/api';

const MoviesPage = ({ globalSearchTerm }) => {
  const movies = getMovies();
  
  return (
    <MediaList
      items={movies}
      type="movie"
      title="Películas"
      globalSearchTerm={globalSearchTerm}
    />
  );
};

export default MoviesPage;