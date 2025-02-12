import { Fragment } from "react";
import { useDataContext } from "../contexts/DataContext";
import MovieCard from "./MovieCard";

export default function Main() {
  const { movies } = useDataContext();

  return (
    <Fragment>
      <main>
        {Array.isArray(movies) && movies.length > 0 ? (
          <h2 className="text-3xl font-semibold text-black mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent shadow-lg p-2">
            La ricerca ha prodotto i seguenti risultati:
          </h2>
        ) : (
          <h2 className="text-2xl font-light text-gray-700 mb-6">
            Nessun risultato trovato
          </h2>
        )}
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </Fragment>
  );
}
