import { getUrlMovieById } from "../../api/urls";

export const getMovie = (id) => {
  const url = getUrlMovieById(id);

  return fetch(url)
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
