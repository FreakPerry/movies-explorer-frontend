import logo from '../../images/prakticum-logo.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={logo} alt="Логотип практикума" className="promo__logo" />
      </div>
    </section>
  );
}

export default Promo;
