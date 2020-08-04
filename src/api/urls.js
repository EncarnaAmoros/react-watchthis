export const BASE_URL = "https://api.themoviedb.org/3/";

export const API_KEY = "api_key=addc19a6765ce0726200bfecc1eabb0f";

export const DISCOVER_URL = "discover/movie?";

export const POPULAR_MOVIES = BASE_URL.concat(DISCOVER_URL).concat(API_KEY);

export const SEARCH_URL = "search/movie?";

export const MOVIE_URL = "movie/";

export const SEARCH_MOVIES_URL = BASE_URL.concat(SEARCH_URL)
  .concat(API_KEY)
  .concat("&query=");

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const getUrlMovieById = (id) => {
  return BASE_URL.concat(MOVIE_URL).concat(id).concat("?").concat(API_KEY);
};
