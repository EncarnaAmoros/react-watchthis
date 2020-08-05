import { SEARCH_MOVIES_URL, POPULAR_MOVIES } from "../../api/urls";

export const getMovies = (term) => {
  return fetch(SEARCH_MOVIES_URL.concat(term))
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data.results;
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getPopularMovies = () => {
  return fetch(POPULAR_MOVIES)
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return Promise.reject(data);
        // return data.results;
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
