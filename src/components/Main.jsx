import { Fragment } from "react";
import { useDataContext } from "../contexts/DataContext";
import MovieCard from "./MovieCard";

export default function Main() {
  const { movies } = useDataContext();

  return (
    <Fragment>
      <main className="p-2">
        {Array.isArray(movies) && movies.length > 0 ? (
          <h2 className="text-2xl font-semibold text-red-700 p-3">
            La ricerca ha prodotto i seguenti risultati:
          </h2>
        ) : (
          <h2 className="text-2xl font-light text-gray-700 mb-6">
            Nessun risultato trovato
          </h2>
        )}
        <div className="grid grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </Fragment>
  );
}
