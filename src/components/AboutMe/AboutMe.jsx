import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__container">
        <h2 className="student__title">Студент</h2>
        <div className="student__description">
          <div className="student__text">
            <p className="student__name">Виталий</p>
            <p className="student__info">Фронтенд-разработчик, 26 лет</p>
            <p className="student__about">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и
              дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
              работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/FreakPerry"
              className="student__social"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img src={avatar} alt="Аватар" className="student__avatar" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
