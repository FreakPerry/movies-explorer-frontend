import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://freakperry.github.io/how-to-learn/"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              <span className="portfolio__link-text">Статичный сайт</span>
              <div className="portfolio__link-icn" />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://freakperry.github.io/russian-travel/"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              <span>Адаптивный сайт</span>
              <div className="portfolio__link-icn" />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://e-tatarenko.nomoredomainsrocks.ru/"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              <span>Одностраничное приложение</span>
              <div className="portfolio__link-icn" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
