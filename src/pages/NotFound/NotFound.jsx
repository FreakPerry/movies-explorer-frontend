import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="nf">
      <div className="nf__cnt">
        <h1 className="nf__ttl">404</h1>
        <p className="nf__txt">Страница не найдена</p>
      </div>
      <button type="button" onClick={goBack} className="nf__btn">
        Назад
      </button>
    </div>
  );
}

export default NotFound;
