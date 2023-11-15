import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation({ open }) {
  const location = useLocation().pathname;
  const isLanding = location === '/';
  return (
    <div className={`navigation ${open ? 'navigation_open' : ''}`}>
      <nav className={`navigation__menu ${open ? 'navigation__menu_open' : ''}`}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link navigation__link_disp">
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/movies" className="navigation__link">
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/saved-movies" className="navigation__link">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink to="/profile" className="navigation__link">
          <span>Аккаунт</span>
          <div
            className={`${isLanding ? 'navigation__acc-icn' : 'navigation__acc-icn_dark'}`}
          ></div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
