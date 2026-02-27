import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-2xl">🍅</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
              MOVIEW <span className="text-[#22c55e]">PELICULAS Y SERIES</span>
            </h1>
            <p className="text-xs text-gray-400">Tu guía de entretenimiento</p>
          </div>
        </div>
        
        {currentPage !== 'home' && (
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
            <span className="text-white font-semibold">Inicio</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;