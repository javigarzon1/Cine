import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Play, Zap } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const featuredItems = [
    {
      id: 1,
      title: "Dune: Part Two",
      year: 2024,
      description: "La continuación épica del viaje de Paul Atreides.",
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
      rating: 8.9,
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: 2023,
      description: "La historia del padre de la bomba atómica.",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
      rating: 8.8,
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      description: "Miles Morales regresa al multiverso.",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
      rating: 9.0,
    },
    {
      id: 4,
      title: "The Batman",
      year: 2022,
      description: "Una versión más oscura del caballero de Gotham.",
      image: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
      rating: 8.1,
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      description: "Un ladrón roba secretos a través de los sueños.",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 8.8,
    },
    {
      id: 6,
      title: "Interstellar",
      year: 2014,
      description: "Viaje interestelar para salvar a la humanidad.",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 8.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="site-container">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300">LO MÁS VISTO AHORA</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Descubre tu próxima
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"> película favorita</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Explora miles de películas y series de TV. Encuentra exactamente lo que buscas con nuestro catálogo curado.
            </p>

            <button
              onClick={() => setCurrentPage("movies")}
              className="btn btn-primary inline-flex"
            >
              <Play className="w-5 h-5" />
              Ver películas
            </button>
          </div>
        </section>

        <section className="space-y-20 pb-20">
          <Carousel
            title="Estrenos Destacados"
            items={featuredItems.slice(0, 4)}
            onSelect={setSelectedItem}
          />
          <Carousel
            title="Lo Más Popular"
            items={featuredItems}
            onSelect={setSelectedItem}
          />
        </section>
      </div>

      {selectedItem && (
        <MovieModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

const Carousel = ({ title, items, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 400;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        {title}
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
      </h2>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-24 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-24 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className="min-w-[240px] flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 group/card">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                <div className="bg-blue-500 rounded-full p-4 transform scale-0 group-hover/card:scale-100 transition-transform duration-300 shadow-lg">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {item.rating && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg">
                  <span className="text-sm font-bold text-white">{item.rating}</span>
                </div>
              )}
            </div>

            <div className="pt-4">
              <h3 className="text-white font-semibold line-clamp-2 group-hover/card:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-fadeIn border border-slate-800">
        <div className="relative h-80">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-4xl font-bold mb-3">{item.title}</h2>
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
            <span>{item.year}</span>
            {item.rating && (
              <>
                <span>•</span>
                <span className="text-amber-400 font-semibold">★ {item.rating}/10</span>
              </>
            )}
          </div>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">{item.description}</p>

          <button className="btn btn-primary">
            <Play className="w-5 h-5" />
            Reproducir ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;