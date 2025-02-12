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
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-800 rounded-full px-4 py-2"
      >
        <input
          className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-lg"
          name="search"
          type="search"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-600 text-white rounded-sm p-1 ml-2"
          type="submit"
        >
          Ricerca
        </button>
      </form>
    </>
  );
}
