import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <div className="nav">
      <nav className="nav__container">
        <a href="#project" className="nav__link">
          О проекте
        </a>
        <a href="#techs" className="nav__link">
          Технологии
        </a>
        <a href="#student" className="nav__link">
          Студент
        </a>
      </nav>
    </div>
  );
}

export default NavTab;
