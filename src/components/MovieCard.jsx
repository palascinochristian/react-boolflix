const languageFlags = {
  it: "https://flagcdn.com/w40/it.png",
  en: "https://flagcdn.com/w40/gb.png",
  fr: "https://flagcdn.com/w40/fr.png",
  es: "https://flagcdn.com/w40/es.png",
  de: "https://flagcdn.com/w40/de.png",
  ja: "https://flagcdn.com/w40/jp.png",
  ko: "https://flagcdn.com/w40/kr.png",
  zh: "https://flagcdn.com/w40/cn.png",
};

const voteStars = (vote) => {
  const stars = Math.round(Math.min(vote / 2, 5));
  return "⭐".repeat(stars) + "★".repeat(5 - stars);
};

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-md shadow-lg p-4 flex flex-col justify-between h-full">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>

      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
        className="mb-2 rounded-md"
      />
      <h3 className="text-xl font-light mb-2">{movie.original_title}</h3>

      <div className="text-gray-700 mb-2">
        <span className="font-semibold">Lingua Originale:</span>
        {languageFlags[movie.original_language] ? (
          <img
            src={languageFlags[movie.original_language]}
            alt={movie.original_language}
            className="w-6 h-4 inline-block ml-2"
          />
        ) : (
          "🏳️"
        )}
      </div>

      <div className="text-black-500 text-xl">
        <span className="font-semibold">Voto:</span>{" "}
        {voteStars(movie.vote_average)}
      </div>
    </div>
  );
}
