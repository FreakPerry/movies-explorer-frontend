import { NavLink } from 'react-router-dom';
import ApiError from '../ApiError/ApiError';
import './EditForm.css';

function EditForm() {
  return (
    <section className="profile">
      <div className="profile__title">Привет, Виталий!</div>
      <form className="profile__form">
        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            className="profile__inpt"
            value={'Виталий'}
            readOnly
          />
        </div>

        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">E-mail</label>
          <input
            type="email"
            placeholder="Введите почту"
            className="profile__inpt"
            value={'pochta@yandex.ru'}
            readOnly
          />
        </div>
        <div className="profile__btn-container">
          <ApiError />
          <button type="button" className="profile__btn">
            Редактировать
          </button>
          <NavLink to="/" className="profile__btn profile__btn_logout">
            Выйти из аккаунта
          </NavLink>
          <button type="submit" className="profile__save-btn">
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditForm;
