import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, searchTerm, setSearchTerm }) => {
  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50">
      <div className="w-full">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div 
              className="cursor-pointer flex-shrink-0"
              onClick={() => setCurrentPage('home')}
            >
              <h1 className="text-2xl font-black tracking-tighter">
                <span className="text-white">MOVIEW</span>
                <span className="text-[#22c55e]">PELICULAS Y SERIES</span>
              </h1>
            </div>

            {/* Navegación */}
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  currentPage === 'home'
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                INICIO
              </button>
              <button
                onClick={() => setCurrentPage('movies')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  currentPage === 'movies'
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                PELÍCULAS
              </button>
              <button
                onClick={() => setCurrentPage('tv-shows')}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  currentPage === 'tv-shows'
                    ? 'text-white'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                SERIES
              </button>
              <button className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors">
                GÉNEROS ▾
              </button>
              <button className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors">
                TELEGRAM
              </button>
            </nav>

            {/* Buscador */}
            <div className="ml-auto w-72">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;