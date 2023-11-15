import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project" id="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <ul className="project__items">
          <li className="project__item">
            <h3 className="project__item-title">Дипломный проект включал 5 этапов</h3>
            <p className="project__item-text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </li>
          <li className="project__item">
            <h3 className="project__item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="project__item-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="project__table">
          <li className="project__cell project__cell_first">
            <h4 className="project__cell-title project__cell-title_black">1 неделя</h4>
            <p className="project__cell-description">Back-end</p>
          </li>
          <li className="project__cell">
            <h4 className="project__cell-title">4 недели</h4>
            <p className="project__cell-description">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
