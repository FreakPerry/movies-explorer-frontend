import './MoviesCard.css';
import saveIcn from '../../images/saveIcn.svg';
import movieCover from '../../images/B4F64F31-831A-4902-AE9E-67D0E21DC2B8_1_105_c.jpeg';

function MoviesCard(cardName) {
  return (
    <li className="card">
      <div className="card__img-container">
        <img src={movieCover} alt={cardName} className="card__img" />
        <button type="submit" className="card__btn">
          <span className="card__btn-txt">Сохранить</span>
          <div className="card__btn-icn" />
        </button>
      </div>
      <div className="card__description">
        <h2 className="card__name">33 слова о дизайне</h2>
        <p className="card__mv-duration">1ч 17м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
