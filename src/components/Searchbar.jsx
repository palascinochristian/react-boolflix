import axios from "axios";
import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const { setMovies } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "f414dc48df2510f2362275c699d5832c",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="mr-5"
          name="search"
          type="search"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </>
  );
}
