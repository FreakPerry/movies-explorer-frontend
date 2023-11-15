import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';
import ApiError from '../ApiError/ApiError';

function AuthForm() {
  const location = useLocation().pathname;

  const isRegister = location === '/signup';
  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__logo"></div>
        <h1 className="auth__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
        <form className="auth__form">
          {isRegister && (
            <div className="auth__input-container">
              <label className="auth__input-ttl">Имя</label>
              <input type="text" className="auth__input " />
              <span className="auth__input-error"></span>
            </div>
          )}
          <div className="auth__input-container">
            <label className="auth__input-ttl">E-mail</label>
            <input type="text" className="auth__input " />
            <span className="auth__input-error">Что-то пошло не так...</span>
          </div>
          <div className="auth__input-container">
            <label className="auth__input-ttl">Пароль</label>
            <input type="password" className="auth__input" />
            <span className="auth__input-error auth__input-error_active"></span>
          </div>
        </form>
      </div>
      <div className="auth__bottom-container">
        <ApiError />
        <button className="auth__btn">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
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
