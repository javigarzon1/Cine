import React from 'react';
import MediaList from '../layout/MediaList';
import { getTvShows } from '../../services/api';

const TvShowsPage = ({ globalSearchTerm }) => {
  const tvShows = getTvShows();
  
  return (
    <MediaList
      items={tvShows}
      type="tv"
      title="Series de TV"
      globalSearchTerm={globalSearchTerm}
    />
  );
};

export default TvShowsPage;