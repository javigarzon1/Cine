import React, { useState } from 'react';
import Header from './components/common/Header';
import HomePage from './components/pages/HomePage';
import TvShowsPage from './components/pages/TvShowsPage';
import MoviesPage from './components/pages/MoviesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'tv-shows':
        return <TvShowsPage globalSearchTerm={globalSearchTerm} />;
      case 'movies':
        return <MoviesPage globalSearchTerm={globalSearchTerm} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        searchTerm={globalSearchTerm}
        setSearchTerm={setGlobalSearchTerm}
      />
      <main className="w-full">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default App;