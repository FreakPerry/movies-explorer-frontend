import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/FreakPerry"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
