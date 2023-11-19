import { Link, NavLink, useLocation } from 'react-router-dom';
import './AuthForm.css';
import ApiError from '../ApiError/ApiError';

function AuthForm() {
  const location = useLocation().pathname;

  const isRegister = location === '/signup';
  return (
    <section className="auth">
      <div className="auth__container">
        <NavLink to="/" className="auth__logo"></NavLink>
        <h1 className="auth__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
        <form className="auth__form">
          {isRegister && (
            <div className="auth__input-container">
              <label className="auth__input-ttl">Имя</label>
              <input
                type="text"
                placeholder="Введите имя"
                className="auth__input "
                minLength="2"
                maxLength="40"
                name="name"
                required
              />
              <span className="auth__input-error"></span>
            </div>
          )}
          <div className="auth__input-container">
            <label className="auth__input-ttl">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Введите почту"
              className="auth__input"
              required
            />
            <span className="auth__input-error">Что-то пошло не так...</span>
          </div>
          <div className="auth__input-container">
            <label className="auth__input-ttl">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              name="password"
              minLength="8"
              maxLength="50"
              className="auth__input"
              required
            />
            <span className="auth__input-error auth__input-error_active"></span>
          </div>
        </form>
      </div>
      <div className="auth__bottom-container">
        <ApiError />
        <button type="submit" className="auth__btn">
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <div className="auth__nav-cnt">
          <p className="auth__text">
            {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
          </p>
          {isRegister ? (
            <Link to="/signin" className="auth__link">
              Войти
            </Link>
          ) : (
            <Link to="/signup" className="auth__link">
              Регистрация
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
