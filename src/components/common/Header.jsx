import React from 'react';
import { Search, Film } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, searchTerm, setSearchTerm }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-md">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <Film className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-black text-white">MOVIEW</div>
              <div className="text-xs text-gray-400 font-semibold">STREAMING</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            <NavButton
              label="Inicio"
              isActive={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
            />
            <NavButton
              label="Películas"
              isActive={currentPage === 'movies'}
              onClick={() => setCurrentPage('movies')}
            />
            <NavButton
              label="Series"
              isActive={currentPage === 'tv-shows'}
              onClick={() => setCurrentPage('tv-shows')}
            />
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar películas, series..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10 py-2.5 w-full bg-slate-800/50 border-slate-700/50"
              />
            </div>

            <button className="hidden lg:block px-4 py-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
              Sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
        isActive
          ? 'text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
      {isActive && (
        <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
      )}
    </button>
  );
};

export default Header;