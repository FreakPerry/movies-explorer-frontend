import { IMAGE_URL_API } from './constants';

const filterShortFilms = (movies, isShort) => {
  return isShort ? movies.filter(movie => movie.duration <= 41) : movies;
};

function isMovieSaved(savedMovies, movie) {
  return savedMovies.some(savedMovie => savedMovie.movieId === String(movie.id));
}

function transformMovies(movies) {
  return movies.map(movie => {
    const transformedMovie = { ...movie };

    transformedMovie.image = movie.image
      ? `${IMAGE_URL_API}${movie.image.url}`
      : 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    transformedMovie.thumbnail = movie.thumbnail
      ? `${IMAGE_URL_API}${movie.image.formats.thumbnail.url}`
      : 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    transformedMovie.country = movie.country || 'Country';
    transformedMovie.nameEN = movie.nameEN || movie.nameRU;

    return transformedMovie;
  });
}

export { isMovieSaved, transformMovies, filterShortFilms };
