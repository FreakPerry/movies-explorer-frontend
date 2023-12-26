import { NavLink } from 'react-router-dom';
import './EditForm.css';
import { useContext, useEffect, useState } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../contexts/context';
import Notification from '../Notification/Notification';

function EditForm({ onLogout, onSubmit, successMessage, isSuccess }) {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(successMessage);

  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  const currentUser = useContext(CurrentUserContext);

  function handleEdit() {
    setIsEditing(true);
    setMessage('');
  }

  const isDataChanged = values.name !== currentUser.name || values.email !== currentUser.email;

  function handleSubmit(e) {
    e.preventDefault();
    if (isDataChanged && isValid) {
      onSubmit(values);
    }
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <section className="profile">
      <div className="profile__title">Привет, {currentUser.name}!</div>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            className="profile__inpt"
            value={values.name || ''}
            readOnly={!isEditing}
            onChange={handleChange}
            required
          />
        </div>

        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Введите почту"
            className="profile__inpt"
            value={values.email || ''}
            readOnly={!isEditing}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__btn-container">
          <Notification message={message} isSuccess={isSuccess} />
          {isEditing ? (
            <button
              type="submit"
              className="profile__save-btn"
              disabled={!isValid || !isDataChanged}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button type="button" className="profile__btn" onClick={handleEdit}>
                Редактировать
              </button>
              <NavLink to="/" className="profile__btn profile__btn_logout" onClick={onLogout}>
                Выйти из аккаунта
              </NavLink>
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default EditForm;
