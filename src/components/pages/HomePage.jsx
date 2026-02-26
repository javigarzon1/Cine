import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const featuredItems = [
    {
      id: 1,
      title: "Dune: Part Two",
      year: 2024,
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: 2023,
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    },
    {
      id: 4,
      title: "The Batman",
      year: 2022,
      image: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    },
    {
      id: 5,
      title: "Inception",
      year: 2021,
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    },
    {
      id: 6,
      title: "Interstellar",
      year: 2022,
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full">
        <div className="max-w-[1600px] mx-auto px-6 py-8">
          
          {/* Títulos destacados */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">
                Títulos destacados
              </h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded flex items-center justify-center transition-colors border border-gray-900">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded flex items-center justify-center transition-colors border border-gray-900">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {featuredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative mb-3 rounded overflow-hidden bg-[#0a0a0a]">
                    {/* Badge DESTACADO */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="px-2.5 py-1 bg-[#22c55e] text-black text-[10px] font-bold uppercase rounded">
                        DESTACADO
                      </span>
                    </div>
                    
                    {/* Imagen */}
                    <div className="relative h-[320px]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Más secciones aquí */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">
                Películas más recientes
              </h2>
              <button 
                onClick={() => setCurrentPage('movies')}
                className="text-[#22c55e] text-sm font-semibold hover:underline"
              >
                Ver todas
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {featuredItems.map((item) => (
                <div key={`movie-${item.id}`} className="group cursor-pointer">
                  <div className="relative mb-3 rounded overflow-hidden bg-[#0a0a0a]">
                    <div className="relative h-[320px]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                    </div>
                    
                    {/* Badge PELÍCULA */}
                    <div className="absolute bottom-2 right-2">
                      <span className="px-2.5 py-1 bg-[#22c55e] text-black text-[10px] font-bold uppercase rounded">
                        PELÍCULA
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Series */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">
                Series más recientes
              </h2>
              <button 
                onClick={() => setCurrentPage('tv-shows')}
                className="text-[#22c55e] text-sm font-semibold hover:underline"
              >
                Ver todas
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {featuredItems.map((item) => (
                <div key={`series-${item.id}`} className="group cursor-pointer">
                  <div className="relative mb-3 rounded overflow-hidden bg-[#0a0a0a]">
                    <div className="relative h-[320px]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                    </div>
                    
                    {/* Badge SERIE */}
                    <div className="absolute bottom-2 right-2">
                      <span className="px-2.5 py-1 bg-[#22c55e] text-black text-[10px] font-bold uppercase rounded">
                        SERIE
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer info */}
          <div className="border-t border-gray-900 pt-10 mt-12">
            <div className="text-center">
              <h2 className="text-white text-xl font-bold mb-4">
                MOVIEW - Películas y Series.
              </h2>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;