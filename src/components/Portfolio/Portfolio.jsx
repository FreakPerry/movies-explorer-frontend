import './Portfolio.css';
import arrowIcon from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="#" target="_blank" className="portfolio__link">
              <span className="portfolio__link-text">Статичный сайт</span>
              <img src={arrowIcon} alt="" className="portfolio__arrow-icn" />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#" target="_blank" className="portfolio__link">
              <span>Адаптивный сайт</span>
              <img src={arrowIcon} alt="" className="portfolio__arrow-icn" />
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#" target="_blank" className="portfolio__link">
              <span>Одностраничное приложение</span>
              <img src={arrowIcon} alt="" className="portfolio__arrow-icn" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
