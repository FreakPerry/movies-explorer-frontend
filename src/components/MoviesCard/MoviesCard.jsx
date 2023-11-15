import './MoviesCard.css';
import saveIcn from '../../images/saveIcn.svg';
import movieCover from '../../images/B4F64F31-831A-4902-AE9E-67D0E21DC2B8_1_105_c.jpeg';

function MoviesCard() {
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={movieCover} alt="Обложка фильма" className="card__img" />
        <button className="card__btn">
          <span className="card__btn-txt">Сохранить</span>
          <div className="card__btn-icn" />
        </button>
      </div>
      <div className="card__description">
        <p className="card__name">33 слова о дизайне</p>
        <p className="card__mv-duration">1ч 17м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
