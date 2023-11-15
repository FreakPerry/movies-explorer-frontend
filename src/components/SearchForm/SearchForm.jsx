import './SearchForm.css';
import srcIcn from '../../images/src-icn.svg';

function SearchForm() {
  return (
    <section className="src">
      <div className="src__container">
        <div className="src__inpt-container">
          <img className="src__icn" src={srcIcn} alt="иконка поиска" />
          <input type="text" className="src__inpt" placeholder="Фильм" />
          <button className="src__btn">Найти</button>
        </div>
        <div className="src__check-container">
          <label className="src__check">
            <input type="checkbox" />
            <span className="src__check-slider"></span>
          </label>
          <p className="src__check-txt">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
