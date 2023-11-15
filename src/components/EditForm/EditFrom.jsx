import ApiError from '../ApiError/ApiError';
import './EditForm.css';

function EditForm() {
  return (
    <section className="profile">
      <div className="profile__title">Привет, Виталий!</div>
      <form className="profile__form">
        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">Имя</label>
          <input type="text" className="profile__inpt" value={'Виталий'} readOnly />
        </div>

        <div className="profile__inpt-container">
          <label className="profile__inpt-ttl">E-mail</label>
          <input type="text" className="profile__inpt" value={'pochta@yandex.ru'} readOnly />
        </div>
        <div className="profile__btn-container">
          <ApiError />
          <button className="profile__btn">Редактировать</button>
          <button className="profile__btn profile__btn_logout">Выйти из аккаунта</button>
          <button className="profile__save-btn">Сохранить</button>
        </div>
      </form>
    </section>
  );
}

export default EditForm;
