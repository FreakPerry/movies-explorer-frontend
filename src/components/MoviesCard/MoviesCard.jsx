import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onSave, onDelete, saved }) {
  const location = useLocation();

  function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = hours > 0 ? `${hours} ч` : '';
    const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes} м` : '';

    return `${formattedHours} ${formattedMinutes}`;
  }

  const formattedDuration = formatDuration(movie.duration);

  function handleSaveClick() {
    onSave(movie);
  }

  function handleDeleteClick() {
    onDelete(movie);
  }

  return (
    <li className="card">
      <div className="card__img-container">
        <Link to={movie.trailerLink} target="_blanck">
          <img src={movie.image} alt={movie.image.alternativeText} className="card__img" />
        </Link>
        {location.pathname === '/movies' && (
          <button
            onClick={saved ? handleDeleteClick : handleSaveClick}
            type="submit"
            className={`card__btn ${saved && 'card__btn_active'}`}
          >
            <span className="card__btn-txt">{!saved ? 'Сохранить' : ''}</span>
            <span className="card__btn-icn" />
          </button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            onClick={handleDeleteClick}
            type="submit"
            className={`card__btn card__btn_active`}
          >
            <span className="card__btn-txt">{''}</span>
            <span className="card__btn-icn" />
          </button>
        )}
      </div>
      <div className="card__description">
        <h2 className="card__name">{movie.nameRU || movie.nameEN}</h2>
        <p className="card__mv-duration">{formattedDuration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
