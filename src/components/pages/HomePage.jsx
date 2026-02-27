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
  <div className="min-h-screen bg-black text-white">

    {/* HERO GRANDE VISUAL */}
    <div className="relative h-screen">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex flex-col justify-center h-full px-20">
        <h1 className="text-7xl font-extrabold mb-6">
          MOVIEW
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mb-8">
          La nueva experiencia de películas y series.
        </p>
        <button className="bg-[#22c55e] text-black px-8 py-4 rounded-xl font-bold w-fit">
          Ver ahora
        </button>
      </div>
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