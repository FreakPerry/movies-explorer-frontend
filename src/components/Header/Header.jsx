import { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;
  const isLanding = location === '/';
  const isLoggedIn = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebarClick() {
    setIsOpen(state => !state);
  }

  return (
    <header className={`header ${isLanding ? 'header_pink' : ''}`}>
      <NavLink to="/" className="header__logo"></NavLink>
      {!isLoggedIn ? (
        <nav className="header__auth">
          <ul className="header__list">
            <li>
              <a href="/signup" className="header__item">
                Регистрация
              </a>
            </li>
            <li>
              <NavLink to="/signin" className="header__login-bttn">
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <Navigation open={isOpen} />
          <button
            type="button"
            onClick={toggleSidebarClick}
            className={`header__burger-btn ${isOpen ? 'header__burger-btn_open' : ''}`}
          >
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
