import { isMovieSaved } from '../../utils/utils';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ movies, isLoading, onSave, onDelete, savedMovies }) {

  return (
    <div className="cards">
      <ul className="cards__list">
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map(movie => (
            <MoviesCard key={movie.id || movie._id} movie={movie} saved={isMovieSaved(savedMovies, movie)} onSave={onSave} onDelete={onDelete} />
          ))
        )}
      </ul>
    </div>
  );
}

export default MoviesCardList;
