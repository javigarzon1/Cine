import React from 'react';
import { Star } from 'lucide-react';

const MediaCard = ({ item, type }) => {
  return (
    <div className="group cursor-pointer w-full">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
        <div className="relative h-72 w-full flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/33129/movie-popcorn-entertainment.jpg?w=500&h=700&fit=crop';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-blue-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase rounded-full">
              {type === 'movie' ? 'Película' : 'Serie'}
            </span>
          </div>

          {item.rating && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-white">{item.rating}</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-white text-sm font-semibold line-clamp-2 mb-2 leading-tight group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">{item.year}</span>
            {item.genre && <span className="text-cyan-400">{item.genre}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;