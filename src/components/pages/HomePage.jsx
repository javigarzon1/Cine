import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const featuredItems = [
    {
      id: 1,
      title: "Dune: Part Two",
      year: 2024,
      description: "La continuación épica del viaje de Paul Atreides.",
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: 2023,
      description: "La historia del padre de la bomba atómica.",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      year: 2023,
      description: "Miles Morales regresa al multiverso.",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    },
    {
      id: 4,
      title: "The Batman",
      year: 2022,
      description: "Una versión más oscura del caballero de Gotham.",
      image: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      description: "Un ladrón roba secretos a través de los sueños.",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    },
    {
      id: 6,
      title: "Interstellar",
      year: 2014,
      description: "Viaje interestelar para salvar a la humanidad.",
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SIMPLE */}
      <div className="relative h-[70vh] flex items-center px-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">MOVIEW</h1>
          <p className="text-gray-400 max-w-lg">
            Descubre las mejores películas y series.
          </p>
        </div>
      </div>

      {/* CARRUSELES */}
      <div className="space-y-16 pb-20">
        <Carousel
          title="Títulos Destacados"
          items={featuredItems}
          onSelect={setSelectedItem}
        />
        <Carousel
          title="Películas Populares"
          items={featuredItems}
          onSelect={setSelectedItem}
        />
      </div>

      {/* MODAL */}
      {selectedItem && (
        <MovieModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

/* ===================== CARRUSEL ===================== */

const Carousel = ({ title, items, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 600;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-10 relative group">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {/* Botones laterales */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition bg-black/60 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Scroll horizontal */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className="min-w-[220px] cursor-pointer transform transition hover:scale-110"
          >
            <div className="relative h-[330px] rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/60 transition flex items-center justify-center">
                <Play className="opacity-0 hover:opacity-100 transition" />
              </div>
            </div>
            <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-xs">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===================== MODAL ===================== */

const MovieModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#111] rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl animate-fadeIn">
        
        {/* Imagen */}
        <div className="relative h-[400px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/70 p-2 rounded-full"
          >
            <X />
          </button>
        </div>

        {/* Info */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-400 mb-4">{item.year}</p>
          <p className="text-gray-300 mb-6">{item.description}</p>

          <button className="bg-[#22c55e] hover:bg-[#16a34a] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2">
            <Play size={18} /> Reproducir
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;