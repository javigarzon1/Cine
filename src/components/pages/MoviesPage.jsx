import { useState, useMemo } from "react";
import { getMovies, getYears } from "../../services/api";
import MediaCard from "../common/MediaCard";
import MediaDetailModal from "../common/MediaDetailModal";
import FilterBar from "../common/FilterBar";

const MoviesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState("rating");
  const allMovies = getMovies();
  const years = getYears();
  const filtered = useMemo(() => {
    let result = [...allMovies];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((m) =>
        m.title.toLowerCase().includes(q) || m.genres.some((g) => g.toLowerCase().includes(q))
      );
    }
    if (year !== "all") {
      result = result.filter((m) => m.year === Number(year));
    }
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sort === "year") result.sort((a, b) => b.year - a.year);
    else if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [allMovies, search, year, sort]);
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">🎬 Películas</h1>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        year={year}
        onYearChange={setYear}
        sort={sort}
        onSortChange={setSort}
        years={years}
        resultCount={filtered.length}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {filtered.map((item) => (
          <MediaCard key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No se encontraron películas</p>
          <p className="text-sm mt-1">Prueba con otros filtros</p>
        </div>
      )}
      <MediaDetailModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
export default MoviesPage;