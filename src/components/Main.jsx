import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();

  return (
    <main>
      <h2>La ricerca ha prodotto i seguenti risultati:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
