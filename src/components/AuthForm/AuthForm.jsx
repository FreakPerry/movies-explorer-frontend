import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Notification from '../Notification/Notification';

function AuthForm({ onRegister, onLogin, error, resetError }) {
  const location = useLocation().pathname;

  const { values, handleChange, messages, isValid, resetForm } = useFormAndValidation();

  const isRegister = location === '/signup';

  function handleSubmit(e) {
    e.preventDefault();
    if (isRegister) {
      onRegister(values);
    } else {
      onLogin(values);
    }
  }

  function handleLinkClick() {
    resetForm();
    resetError();
  }

  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__logo"></Link>
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
                onChange={handleChange}
                value={values.name || ''}
              />
              <span className="auth__input-error">{messages.name}</span>
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
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className="auth__input-error">{messages.email}</span>
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
              onChange={handleChange}
              value={values.password || ''}
            />
            <span className="auth__input-error">{messages.password}</span>
          </div>
        </form>
      </div>
      <div className="auth__bottom-container">
        <Notification message={error} isSuccess={false} />
        <button type="submit" className="auth__btn" onClick={handleSubmit} disabled={!isValid}>
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
        <div className="auth__nav-cnt">
          <p className="auth__text">
            {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
          </p>
          {isRegister ? (
            <Link to="/signin" className="auth__link" onClick={handleLinkClick}>
              Войти
            </Link>
          ) : (
            <Link to="/signup" className="auth__link" onClick={handleLinkClick}>
              Регистрация
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
