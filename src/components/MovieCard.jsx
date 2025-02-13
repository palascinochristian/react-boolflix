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
    <>
      <div className="relative group rounded-md overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <h2 className="text-lg font-bold">{movie.title}</h2>
          <h3 className="text-md italic">{movie.original_title}</h3>
          <div className="flex items-center mt-2">
            <span className="font-semibold mr-2">Lingua:</span>
            {languageFlags[movie.original_language] ? (
              <img
                src={languageFlags[movie.original_language]}
                alt={movie.original_language}
                className="w-6 h-4"
              />
            ) : (
              "🏳️"
            )}
          </div>
          <div className="mt-2 text-white">{voteStars(movie.vote_average)}</div>
        </div>
      </div>
    </>
  );
}
