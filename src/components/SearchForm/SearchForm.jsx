import './SearchForm.css';
import srcIcn from '../../images/src-icn.svg';
import useInput from '../../hooks/useInput';

function SearchForm({ onSearch, storedQuery, onCheckboxChange, isShortFilm }) {
  const query = useInput(storedQuery);

  const handleCheckboxChange = e => {
    onCheckboxChange(e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query.query);
  };

  return (
    <section className="src">
      <form className="src__container" onSubmit={handleSubmit}>
        <div className="src__inpt-container">
          <img className="src__icn" src={srcIcn} alt="Иконка поиска" />
          <input
            value={query.query || ''}
            onChange={query.handleInputChange}
            type="text"
            className="src__inpt"
            placeholder="Фильм"
            required
            title="Нужно ввести ключевое слово"
          />
          <button type="submit" className="src__btn">
            Найти
          </button>
        </div>
        <div className="src__check-container">
          <label className="src__check" htmlFor="shortFilmCheckbox">
            <input
              type="checkbox"
              id="shortFilmCheckbox"
              checked={isShortFilm ? true : false}
              onChange={handleCheckboxChange}
            />
            <span className="src__check-slider"></span>
          </label>
          <p className="src__check-txt">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
