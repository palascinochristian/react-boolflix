import axios from "axios";
import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const { setMovies } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    Promise.all([
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "f414dc48df2510f2362275c699d5832c",
          language: "it-IT",
          query: search,
        },
      }),
      axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "f414dc48df2510f2362275c699d5832c",
          language: "it-IT",
          query: search,
        },
      }),
    ]).then(([moviesRes, seriesRes]) => {
      const catalogue = [...moviesRes.data.results, ...seriesRes.data.results];
      setMovies(catalogue);
    });
  };

  return (
    <>
      <form
        className="flex items-center self-center border border-gray-500 rounded-sm bg-black px-3 h-8 w-80"
        onSubmit={handleSearch}
      >
        <input
          className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-sm"
          name="search"
          type="search"
          placeholder="Cerca.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-gray-400 w-4 h-4 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
