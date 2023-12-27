import './MoreButton.css';

function MoreButton({ onClick }) {
  return (
    <button type="button" className="cards__list-btn" onClick={onClick}>
      Ещё
    </button>
  );
}

export default MoreButton;
